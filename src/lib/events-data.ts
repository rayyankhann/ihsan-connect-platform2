import { collection, doc, getDoc, getDocs, getFirestore, orderBy, query, Timestamp, where } from "firebase/firestore";
import { getDb } from "./firebase";
import type { EventDoc } from "@/types/events";

function toEventDoc(id: string, data: any): EventDoc | null {
  if (!data) return null;
  // Firestore may store strings or Timestamps; normalize to ISO strings
  const start = data.start instanceof Timestamp ? data.start.toDate().toISOString() : String(data.start ?? "");
  const end = data.end instanceof Timestamp ? data.end.toDate().toISOString() : String(data.end ?? "");

  return {
    id,
    title: String(data.title ?? ""),
    start,
    end,
    location: String(data.location ?? ""),
    type: String(data.type ?? ""),
    description: String(data.description ?? ""),
    coverImageURL: data.coverImageURL ? String(data.coverImageURL) : undefined,
    rsvpURL: data.rsvpURL ? String(data.rsvpURL) : undefined,
  } as EventDoc;
}

export async function listUpcomingEvents(): Promise<EventDoc[]> {
  const db = getDb();
  const nowIso = new Date().toISOString();
  const eventsRef = collection(db, "events");
  const q = query(eventsRef, where("start", ">=", nowIso), orderBy("start", "asc"));
  const snap = await getDocs(q);
  const items: EventDoc[] = [];
  snap.forEach((docSnap) => {
    const normalized = toEventDoc(docSnap.id, docSnap.data());
    if (normalized) items.push(normalized);
  });
  return items;
}

export async function getEventById(id: string): Promise<EventDoc | null> {
  const db = getDb();
  const docRef = doc(getFirestore(), "events", id);
  const snap = await getDoc(docRef);
  if (!snap.exists()) return null;
  return toEventDoc(snap.id, snap.data());
}

export async function listEventsInRange(startIso: string, endIso: string): Promise<EventDoc[]> {
  const db = getDb();
  const eventsRef = collection(db, "events");
  const q = query(
    eventsRef,
    where("start", ">=", startIso),
    where("start", "<", endIso),
    orderBy("start", "asc")
  );
  const snap = await getDocs(q);
  const items: EventDoc[] = [];
  snap.forEach((docSnap) => {
    const normalized = toEventDoc(docSnap.id, docSnap.data());
    if (normalized) items.push(normalized);
  });
  return items;
}


