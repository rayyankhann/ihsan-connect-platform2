# IHSAN Healthcare Association - UT Dallas

A modern, responsive website for the IHSAN Healthcare Association at the University of Texas at Dallas. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with blue/white theme
- **Content Management**: Sanity CMS integration for blog posts, events, and content
- **Blog System**: User-submitted posts with moderation workflow
- **Event Management**: Calendar integration and RSVP forms
- **Membership System**: Google Forms integration for member registration
- **Donation System**: Stripe integration with Zelle/Venmo options
- **Media Management**: Cloudinary integration for images and videos
- **SEO Optimized**: Built with Next.js for excellent performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **CMS**: Sanity
- **Media**: Cloudinary
- **Forms**: Google Forms + Sheets
- **Payments**: Stripe
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd ihsan-connect-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file and fill in your values:

```bash
cp env.local.example .env.local
```

Required environment variables:

```env
# Sanity CMS Configuration
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

# Google Services
NEXT_PUBLIC_GOOGLE_CALENDAR_SRC=your_google_calendar_embed_url

# Stripe Configuration
NEXT_PUBLIC_STRIPE_DONATE_URL=your_stripe_checkout_link

# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key

# Next.js Revalidation
REVALIDATE_SECRET=your_revalidation_secret
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── donate/            # Donate page
│   ├── events/            # Events page
│   ├── membership/        # Membership page
│   └── past-events/       # Past events page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── Navigation.tsx    # Main navigation
├── pages/                # Page components (legacy)
├── lib/                  # Utility functions
└── hooks/                # Custom React hooks
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 External Services Setup

### Sanity CMS
1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Get your project ID and API token
3. Set up schemas for Post, Author, Event, Gallery, Leader

### Cloudinary
1. Create a Cloudinary account at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name and upload preset
3. Configure upload widget for media management

### Google Forms
1. Create Google Forms for membership and RSVP
2. Get the embed URLs for integration

### Stripe
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Create a checkout link for donations
3. Add Zelle/Venmo information as alternatives

### reCAPTCHA
1. Register at [google.com/recaptcha](https://google.com/recaptcha)
2. Get site key and secret key for form protection

## 📝 Content Management

### Blog Posts
- Users can submit posts via `/api/submit-post`
- Posts are created with `status: "submitted"`
- Officers approve posts in Sanity Studio
- Only `status: "published"` posts appear on the blog

### Events
- Events are managed in Sanity CMS
- Google Calendar integration for display
- RSVP forms link to Google Forms

### Media
- Officers can upload media via `/admin/media`
- Cloudinary Upload Widget for easy management
- Media URLs stored in Sanity for content

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for the IHSAN Healthcare Association at UT Dallas.

## 🆘 Support

For technical support or questions about the website, please contact the development team.

---

**IHSAN Healthcare Association** - Connecting healthcare professionals and students at UT Dallas
