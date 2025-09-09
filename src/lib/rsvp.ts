import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDb } from "./firebase";

export interface RsvpInput {
  eventId: string;
  name: string;
  email: string;
  phone?: string;
  notes?: string;
}

async function sha256Hex(input: string): Promise<string> {
  // Browser SubtleCrypto
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  // Node.js fallback
  try {
    // @ts-ignore - optional import when available
    const crypto = await import('crypto');
    return crypto.createHash('sha256').update(input).digest('hex');
  } catch {
    throw new Error('Secure hashing not available in this environment');
  }
}

export async function computeRsvpId(eventId: string, email: string): Promise<string> {
  const emailLower = email.trim().toLowerCase();
  const emailHash = await sha256Hex(emailLower);
  const short = emailHash.slice(0, 12);
  return `${eventId}_${short}`;
}

export async function submitRsvp(input: RsvpInput): Promise<{ id: string }>{
  const db = getDb();
  const id = await computeRsvpId(input.eventId, input.email);
  const ref = doc(db, 'rsvps', id);
  const payload = {
    eventId: input.eventId,
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    phone: input.phone ? String(input.phone) : null,
    notes: input.notes ? String(input.notes) : null,
    createdAt: serverTimestamp(),
  } as const;

  try {
    await setDoc(ref, payload, { merge: true });
    return { id };
  } catch (e: any) {
    // Retry once on transient errors (e.g., UNAVAILABLE)
    const code = e?.code || '';
    if (code === 'unavailable' || code === 'deadline-exceeded') {
      await new Promise((r) => setTimeout(r, 300));
      await setDoc(ref, payload, { merge: true });
      return { id };
    }
    throw e;
  }
}


