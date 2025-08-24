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
- Event details and RSVP buttons

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
```

### 2. Backend Features to Implement
- **Sanity CMS**: Content management system
- **Blog System**: Post submission and moderation
- **Stripe**: Donation processing
- **Cloudinary**: Media uploads
- **Google Forms**: Data collection

### 3. API Routes to Create
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
