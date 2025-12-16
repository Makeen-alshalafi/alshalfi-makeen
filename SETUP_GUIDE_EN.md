# 📚 Portfolio Project Setup Guide

## Prerequisites

Before starting, ensure you have the following installed on your system:

### 1. Node.js and npm
- **Download:** https://nodejs.org/
- **Choose:** LTS (Long Term Support) version
- **Verify installation:**
```bash
node --version
npm --version
```

### 2. Git (Optional but recommended)
- **Download:** https://git-scm.com/
- **Verify installation:**
```bash
git --version
```

---

## Step-by-Step Setup Instructions

### Step 1: Clone the Project from GitHub

```bash
git clone https://github.com/Makeen-alshalafi/alshalfi-makeen.git
cd alshalfi-makeen
```

**Or** if you don't have Git:
- Go to: https://github.com/Makeen-alshalafi/alshalfi-makeen
- Click **Code** → **Download ZIP**
- Extract the ZIP file
- Open Terminal/Command Prompt and navigate to the project folder

---

### Step 2: Install Dependencies

Open Terminal/Command Prompt in the project folder and run:

```bash
npm install
```

Or if using pnpm:

```bash
pnpm install
```

**Note:** This may take 5-10 minutes depending on your internet speed.

---

### Step 3: Start Development Server

```bash
npm run dev
```

Or with pnpm:

```bash
pnpm dev
```

**Expected output:**
```
  ➜  Local:   http://localhost:5173/
  ➜  Network: http://[your-ip]:5173/
```

---

### Step 4: Open in Browser

Copy the URL from the previous step and paste it in your browser:

```
http://localhost:5173/
```

**Done! 🎉 Your portfolio is now running locally**

---

## Important Commands

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Check for Errors
```bash
npm run check
```

### Format Code
```bash
npm run format
```

---

## Troubleshooting

### Issue: "command not found: npm"
**Solution:** Ensure Node.js is properly installed and restart Terminal

### Issue: "Port 5173 is already in use"
**Solution:** Use a different port:
```bash
npm run dev -- --port 3000
```

### Issue: "node_modules not found"
**Solution:** Run `npm install` again

### Issue: Blank white page with no content
**Solution:**
1. Open Developer Tools (F12)
2. Check Console for errors
3. Reload the page (Ctrl+R or Cmd+R)

---

## Project Structure

```
alshalfi-makeen/
├── client/
│   ├── src/
│   │   ├── pages/           # Website pages
│   │   ├── components/      # React components
│   │   │   └── sections/    # Website sections
│   │   ├── index.css        # Global styles
│   │   └── App.tsx          # Main app component
│   ├── public/              # Static files
│   └── index.html           # Main HTML file
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

---

## Customization

### Change Colors
- Open: `client/src/index.css`
- Find: `@theme inline` and `--color-primary`
- Modify values as needed

### Edit Content
- **Hero Section:** `client/src/components/sections/Hero.tsx`
- **About Section:** `client/src/components/sections/About.tsx`
- **Skills Section:** `client/src/components/sections/Skills.tsx`
- **Projects Section:** `client/src/components/sections/Projects.tsx`

### Add Profile Picture
1. Place image in: `client/public/profile.jpg`
2. Open: `client/src/components/sections/Hero.tsx`
3. Add image reference in the appropriate section

---

## Deployment

### Deploy to GitHub Pages (Free)
```bash
npm run build
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Deploy to Vercel
1. Go to: https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"

### Deploy to Netlify
1. Go to: https://netlify.com
2. Click "New site from Git"
3. Select your repository
4. Click "Deploy"

---

## Support & Help

If you encounter issues:
1. Check Console in Developer Tools (F12)
2. Read error messages carefully
3. Search for the error on Google
4. Verify all prerequisites are installed

---

## Technology Stack

- **Frontend Framework:** React 19
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Language:** TypeScript

**Supported Browsers:** Chrome, Firefox, Safari, Edge

---

**Enjoy your new portfolio! 🚀**
