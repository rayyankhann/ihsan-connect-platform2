# Firebase Setup Guide for Collaborators

## Project Information
- **Firebase Project ID**: `ihsanhealthcare-ea7de`
- **Project Number**: `383997141550`
- **Site ID**: `ihsanhealthcare-ea7de`
- **Hosting URL**: https://ihsanhealthcare-ea7de.web.app

## Setup Instructions for Collaborators

### Option 1: Firebase Project Access (Recommended)
1. Ask the project owner to add you as a collaborator:
   - Go to [Firebase Console](https://console.firebase.google.com/project/ihsanhealthcare-ea7de)
   - Project Settings → Users and permissions → Add member
   - Add your Google account with Editor/Owner role

2. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

3. Login to Firebase:
   ```bash
   firebase login
   ```

4. Set the project:
   ```bash
   firebase use ihsanhealthcare-ea7de
   ```

### Option 2: Local Development Environment
If you need environment variables for local development:

1. Create `.env.local` file in the project root:
   ```bash
   touch .env.local
   ```

2. Add the following content to `.env.local`:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=ihsanhealthcare-ea7de
   FIREBASE_PROJECT_ID=ihsanhealthcare-ea7de
   FIREBASE_SITE_ID=ihsanhealthcare-ea7de
   
   # Development Configuration
   NODE_ENV=development
   ```

## Deployment Commands
```bash
# Build the project
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

## Important Notes
- The project uses **Firebase Hosting only** (no Firebase SDK)
- No Firebase environment variables are required for deployment
- The `firebase.json` file contains all necessary configuration
- Make sure to run `npm run build` before deploying

## Troubleshooting
- If you get permission errors, ask the project owner to add you as a collaborator
- If deployment fails, check that you're using the correct project: `firebase use ihsanhealthcare-ea7de`
- The site is configured for static export (`output: 'export'` in next.config.js)
