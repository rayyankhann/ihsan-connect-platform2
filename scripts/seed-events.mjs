// Seed Firestore with sample events using Firebase Web SDK
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

for (const key of required) {
  if (!process.env[key]) {
    console.error(`Missing env var: ${key}`)
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
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
})

const db = getFirestore(app)

async function seed() {
  const events = [
    {
      id: 'sample-workshop',
      title: 'Sample Workshop',
      start: new Date('2025-09-15T18:00:00-05:00').toISOString(),
      end: new Date('2025-09-15T20:00:00-05:00').toISOString(),
      location: 'Community Hall',
      type: 'Workshop',
      description: 'Hands-on workshop covering key skills.',
      coverImageURL: '',
    },
    {
      id: 'guest-speaker-event',
      title: 'Guest Speaker Event',
      start: new Date('2025-09-20T19:00:00-05:00').toISOString(),
      end: new Date('2025-09-20T20:30:00-05:00').toISOString(),
      location: 'Main Auditorium',
      type: 'Guest Speaker',
      description: 'Join us for an inspiring guest speaker talk.',
      coverImageURL: '',
    },
  ]

  for (const ev of events) {
    const ref = doc(db, 'events', ev.id)
    await setDoc(ref, ev, { merge: true })
    console.log(`Seeded event: ${ev.id}`)
  }
}

seed().then(() => {
  console.log('Seeding complete')
  process.exit(0)
}).catch((e) => {
  console.error(e)
  process.exit(1)
})


