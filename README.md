# Mithrive Global Limited - Corporate Website

Welcome to the official corporate website repository for **Mithrive Global Limited**, a performance-focused consulting and capacity development firm operating across Africa.

This website is designed to be lightning-fast, highly optimized for search engines (SEO), and visually authoritative—comparable to top-tier global consulting firms.

---

## 🛠 Technology Stack

This project is built using modern, production-ready web technologies:

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Image Hosting & Optimization:** [Cloudinary](https://cloudinary.com/)

---

## 🚀 Key Features & Optimizations

- **Server-Side Rendering (SSR) & Static Site Generation (SSG):** Leverages Next.js App router for incredibly fast page loads.
- **Advanced SEO Implementation:** 
  - Dynamic `sitemap.xml` and `robots.txt` generation.
  - JSON-LD Structured Data (Organization, LocalBusiness, Service) injected into layouts for AI Search and Google Rich Snippets.
  - Dynamic Canonical URLs and Open Graph (OG) social sharing metadata.
- **Image Optimization:** All images are hosted on Cloudinary and pulled through Next.js `<Image />` components. The `f_auto,q_auto` Cloudinary flags are utilized to seamlessly convert `.heic` formats from iOS devices into highly compressed WebP/AVIF formats automatically based on the user's browser.
- **Resilience:** Custom Global Error boundaries (`error.tsx`) and 404 pages (`not-found.tsx`) ensure a robust user experience.

---

## 💻 Local Development Guide

If you are a developer taking over or updating this project, follow these steps to run the site locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bookofharry/MithriveGlobal.git
   cd MithriveGlobal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-update as you edit files in the `src/app/` directory.

---

## 🌍 Hosting & Deployment Guide

This application is extremely lightweight and can be deployed easily. 

### Option A: Vercel (Recommended)
Because this is a Next.js application, [Vercel](https://vercel.com/) (the creators of Next.js) is the best hosting platform. It requires zero configuration.
1. Create a free account at [Vercel.com](https://vercel.com/).
2. Click **Add New... > Project**.
3. Import your GitHub repository (`Bookofharry/MithriveGlobal`).
4. Keep all default settings (Framework Preset: Next.js).
5. Click **Deploy**. Vercel will automatically build and host the site, and update it every time you push to the `main` branch.

### Option B: Netlify
1. Create an account at [Netlify.com](https://www.netlify.com/).
2. Click **Add new site > Import an existing project**.
3. Connect your GitHub and select the repository.
4. Netlify will auto-detect Next.js. Click **Deploy Site**.

### Option C: Custom Server / VPS (AWS, DigitalOcean)
If you need to host this on a traditional Node.js server:
1. Pull the code to the server.
2. Run `npm install` to get dependencies.
3. Run `npm run build` to generate the highly optimized production build.
4. Run `npm run start` to start the Node server on port 3000. 
*(Note: You will want to use a process manager like `pm2` and a reverse proxy like Nginx).*

---

## 📂 Project Structure

- `src/app/` - The core routing directory. Every folder (e.g., `/about`, `/services`) corresponds to a URL path.
- `src/app/layout.tsx` - The global layout containing the Navbar, Footer, and global SEO metadata.
- `src/components/` - Reusable UI components like the `Hero`, `Card`, and `ClientLogoGrid`.
- `next.config.mjs` - Next.js configuration. Currently configured to authorize `res.cloudinary.com` as a trusted remote image source.

---

Built by [dev harry](https://github.com/Bookofharry)
