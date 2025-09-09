# IHSAN Healthcare Association - UT Dallas

A modern, responsive website for the IHSAN Healthcare Association at the University of Texas at Dallas. Built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Current Status

**This is the FRONTEND-ONLY version** of the IHSAN Connect Platform. The website is fully functional with:

- ✅ Complete UI/UX with modern design
- ✅ Responsive navigation and pages
- ✅ Animated components and interactions
- ✅ All pages implemented (Home, Events, Blog, Membership, Donate, About, Contact, Past Events)
- ✅ Fundraising progress bar and scroll animations

**Backend features are planned but not yet implemented:**

- 🔄 Sanity CMS integration
- 🔄 Blog submission and moderation
- 🔄 Stripe donations
- 🔄 Cloudinary media uploads
- 🔄 Google Forms integration

## 🚀 Features (Currently Working)

- **Modern UI/UX**: Beautiful, responsive design with blue/white theme
- **Animated Components**: Scroll animations and hover effects using Framer Motion
- **Fundraising Progress**: Animated progress bar showing $30k goal
- **Responsive Design**: Works perfectly on all devices
- **Complete Page Structure**: All major pages implemented
- **Navigation**: Smooth navigation with glassmorphism effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Query (TanStack Query)

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/rayyankhann/ihsan-connect-platform2.git
cd ihsan-connect-platform2
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Open Your Browser

Open [http://localhost:3000](http://localhost:3000) to view the website.

**That's it!** The website will run immediately without any additional setup.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── donate/            # Donate page with progress bar
│   ├── events/            # Events page
│   ├── membership/        # Membership page
│   └── past-events/       # Past events page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Navigation.tsx    # Main navigation
│   ├── ScrollAnimation.tsx # Animation wrapper
│   └── FundraisingProgress.tsx # Progress bar component
├── pages/                # Page components
├── lib/                  # Utility functions
└── hooks/                # Custom React hooks
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed:events` - Seed Firestore with sample events
- `npm run export:rsvps -- --event=<EVENT_ID>` - Export RSVPs to CSV for an event
- `npm run seed:team` - Seed leadership/team docs (LinkedIn-only; email omitted)

## 🎨 What You'll See

### Home Page (`/`)

- Hero section with animated content
- Mission and values sections
- Upcoming events showcase
- Call-to-action sections

### Donate Page (`/donate`)

- Animated fundraising progress bar
- Donation tiers and impact stats
- Beautiful gradient backgrounds

### Events Page (`/events`)

- Event listings with cards
- Filtering and search (UI only)
- Event details and RSVP buttons (detail links use `/event?id=<ID>` for static export)

### Other Pages

- **About**: Organization information and leadership
- **Blog**: Blog post listings (static content)
- **Membership**: Membership information and forms
- **Contact**: Contact form and information
- **Past Events**: Event gallery and history

## 🚀 Next Steps (Backend Development)

When you're ready to add backend functionality, you'll need to:

### 1. Environment Setup

```bash
cp env.local.example .env.local
# Add your API keys for:
# - Sanity CMS
# - Cloudinary
# - Stripe
# - Google Forms
# - Firebase Web (NEXT_PUBLIC_*)
```

### 2. Backend Features to Implement

- **Sanity CMS**: Content management system
- **Blog System**: Post submission and moderation
- **Stripe**: Donation processing
- **Cloudinary**: Media uploads
- **Google Forms**: Data collection

### 3. API Routes to Create

## 🧑‍💼 Admin: Leadership Data

- Maintain LinkedIn URLs for leadership members in Firestore or content source.
- Email is not rendered; keep it omitted.
- Seeding example:

```bash
npm run seed:team
```

- `/api/submit-post` - Blog submissions
- `/api/revalidate` - Content revalidation
- `/api/create-checkout-session` - Stripe donations

## 🤝 Contributing

### For Frontend Improvements

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the UI thoroughly
5. Submit a pull request

### For Backend Development

1. Check the backend tasks list in the project documentation
2. Start with Sanity CMS integration
3. Follow the implementation order in the backend tasks

## 🧑‍💼 Admin: Leadership Data

- Maintain LinkedIn URLs for leadership members in Firestore; email is not rendered.
- Seed leadership docs:

```bash
npm run seed:team
```

### Team Photos (Firebase Storage)

- Upload headshots to `teamPhotos/` in Firebase Storage.
- Copy the download URL and paste into the member’s `photoURL` field.
- Add short `alt` text like “Portrait of Jane Doe”.
- Control card order via numeric `order` (ascending). Fallback sort is `name`.

## 🔐 Deploying Firebase Rules

- RSVP via Google Forms

Admins should paste each event’s Google Form URL into the `rsvpURL` field on the event document in Firestore. If it’s blank, RSVP appears disabled or routes to the event details page depending on context.

One-time setup:

- Install CLI: `npm i -g firebase-tools`
- Login: `firebase login`

Deploy rules (Firestore + Storage) to `ihsanhealthcare-ea7de`:

```bash
npm run fb:deploy:rules
```

Helpers:

- Select project: `npm run fb:use:prod`
- List projects: `npm run fb:whoami`

Troubleshooting:

- Ensure these files exist at repo root: `firebase.json`, `.firebaserc`, `firestore.rules`, `storage.rules`.
- If you see storage target errors, confirm `firebase.json` uses single-bucket config with one `storage.rules` path (no targets/arrays).

## 🎯 Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow the existing component patterns
- Use Tailwind CSS for styling
- Add animations with Framer Motion

### Component Structure

- Keep components in `src/components/`
- Use `'use client'` directive for interactive components
- Follow the existing naming conventions

## 📄 License

This project is for the IHSAN Healthcare Association at UT Dallas.

## 🆘 Support

For technical support or questions about the website, please contact the development team.

---

**IHSAN Healthcare Association** - Connecting healthcare professionals and students at UT Dallas

> **Note**: This is a frontend-only version. Backend features are planned for future development.
