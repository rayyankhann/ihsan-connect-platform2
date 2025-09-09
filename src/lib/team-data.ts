import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { getDb } from "./firebase";

export type TeamDoc = {
  id: string;
  name: string;
  title: string;
  major: string;
  classYear: string;
  bio: string;
  linkedin?: string;
  photoURL?: string;
  alt?: string;
  order?: number;
};

export async function listTeamMembers(): Promise<TeamDoc[]> {
  const db = getDb();
  const ref = collection(db, 'team');
  const q = query(ref, orderBy('order', 'asc'), orderBy('name', 'asc'));
  const snap = await getDocs(q);
  const items: TeamDoc[] = [];
  snap.forEach((docSnap) => {
    const d = docSnap.data() as any;
    items.push({
      id: docSnap.id,
      name: String(d.name || ''),
      title: String(d.title || ''),
      major: String(d.major || ''),
      classYear: String(d.classYear || ''),
      bio: String(d.bio || ''),
      linkedin: d.linkedin ? String(d.linkedin) : undefined,
      photoURL: d.photoURL ? String(d.photoURL) : undefined,
      alt: d.alt ? String(d.alt) : undefined,
      order: typeof d.order === 'number' ? d.order : undefined,
    });
  });
  return items;
}


