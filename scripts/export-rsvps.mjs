import 'dotenv/config'
import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore'
import fs from 'node:fs'
import path from 'node:path'

const argvEvent = process.argv.find((a) => a.startsWith('--event='))?.split('=')[1]
const EVENT_ID = argvEvent || process.env.EVENT_ID

if (!EVENT_ID) {
  console.error('Usage: npm run export:rsvps -- --event=<EVENT_ID>')
  process.exit(1)
}

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

async function exportRsvps() {
  const rsvpsRef = collection(db, 'rsvps')
  const q = query(rsvpsRef, where('eventId', '==', EVENT_ID))
  const snap = await getDocs(q)

  const rows = []
  rows.push(['eventId', 'name', 'email', 'phone', 'notes', 'createdAt'])

  snap.forEach((doc) => {
    const d = doc.data()
    const created = d.createdAt && d.createdAt.toDate ? d.createdAt.toDate().toISOString() : ''
    rows.push([
      d.eventId || '',
      d.name || '',
      d.email || '',
      d.phone || '',
      (d.notes || '').toString().replaceAll('\n', ' ').replaceAll('\r', ' '),
      created,
    ])
  })

  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const dd = String(today.getDate()).padStart(2, '0')
  const outDir = path.join(process.cwd(), 'exports')
  const outFile = path.join(outDir, `rsvps-${EVENT_ID}-${yyyy}-${mm}-${dd}.csv`)
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const csv = rows.map((r) => r.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(',')).join('\n')
  fs.writeFileSync(outFile, csv, 'utf-8')
  console.log(`Exported ${rows.length - 1} RSVPs to ${outFile}`)
}

exportRsvps().catch((e) => {
  console.error(e)
  process.exit(1)
})


