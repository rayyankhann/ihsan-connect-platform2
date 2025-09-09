import 'dotenv/config'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

const required = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
]
for (const k of required) {
  if (!process.env[k]) {
    console.error(`Missing env var: ${k}`)
    process.exit(1)
  }
}

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
})
const db = getFirestore(app)

async function seed() {
  const members = [
    { id: 'sarah-ahmed', name: 'Sarah Ahmed', title: 'President', major: 'Biology', classYear: 'Senior', bio: 'Passionate about community health and mentorship.', linkedin: 'https://www.linkedin.com/in/example-sarah', order: 1 },
    { id: 'michael-rodriguez', name: 'Michael Rodriguez', title: 'Vice President', major: 'Biochemistry', classYear: 'Junior', bio: 'Focused on workshops and partnerships.', linkedin: 'https://www.linkedin.com/in/example-michael', order: 2 },
    { id: 'jennifer-park', name: 'Jennifer Park', title: 'Secretary', major: 'Neuroscience', classYear: 'Sophomore', bio: 'Maintains communication and impact records.', order: 3 },
    { id: 'david-chen', name: 'David Chen', title: 'Treasurer', major: 'Public Health', classYear: 'Junior', bio: 'Ensures sustainable programming.', order: 4 },
    { id: 'aisha-patel', name: 'Aisha Patel', title: 'Events Coordinator', major: 'Psychology', classYear: 'Senior', bio: 'Organizes engaging events.', order: 5 },
    { id: 'omar-hassan', name: 'Omar Hassan', title: 'Community Outreach Chair', major: 'Health Studies', classYear: 'Junior', bio: 'Builds bridges with community.', order: 6 },
  ]

  for (const m of members) {
    const ref = doc(db, 'team', m.id)
    // Email omitted by design
    await setDoc(ref, { ...m }, { merge: true })
    console.log('Seeded team member:', m.id)
  }
}

seed().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })


