# Gavra Tsany Atmaja | Portfolio

A modern, minimal, and typography-forward personal portfolio built for a Computer Science undergraduate. Designed with a recruiter's 30-second scan in mind, it emphasizes clean UI, clear information hierarchy, and smooth micro-interactions.

## Features

- **Next.js App Router**: Fast, SEO-friendly, and modern React architecture.
- **Tailwind CSS v4**: Complete custom design system using the new `@theme` API.
- **Dark/Light Mode**: First-class support with smooth transitions.
- **Framer Motion**: Subtle, performant scroll and hover animations respecting `prefers-reduced-motion`.
- **Static Export Ready**: Configured to deploy flawlessly to GitHub Pages or Vercel.
- **Content-Driven**: All text and projects are separated from components into typed data files.

---

## 🚀 How to Run Locally

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **View the Site**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 How to Edit Content

This portfolio is designed to be easily updatable without digging through UI components. All content lives in the `src/data` folder.

### Editing Your Profile, Experience & Skills
Open `src/data/profile.ts`.
- Update the `profileData` object to change your bio, university, and contact links (replace the `TODO` placeholders).
- Modify the `experienceData` array to add or remove organizational/work history.
- Update the `skillsData` object to add new tech stack categories or individual skills.

### Adding or Editing Projects
Open `src/data/projects.ts`.
- The `projectsData` array contains all your portfolio projects.
- **To add a new project**, simply add a new object matching the `Project` type to this array. It will automatically appear on the home page and generate its own detail page!
- Be sure to provide a unique `slug` (e.g., `my-new-app`), as this dictates the URL route (`/projects/my-new-app`).

### Replacing Images
Currently, the site uses CSS gradients as beautiful placeholders. When you have real screenshots:
1. Place your images in `public/images/`.
2. Open `src/data/projects.ts` and update the `imagePlaceholder` field to point to your new image (e.g., `"/images/my-real-hero.jpg"`).
3. Place your portrait photo in `public/images/` and update `portraitPlaceholder` in `src/data/profile.ts`.

---

## 🌐 How to Deploy

This project is configured for **Static Export** (`output: 'export'` in `next.config.ts`), meaning it generates pure HTML/CSS/JS files that can be hosted anywhere for free.

### Deploying to Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect Next.js and apply the correct build settings. Click **Deploy**.

### Deploying to GitHub Pages
1. Push your code to GitHub.
2. In your repository settings, go to **Pages**.
3. Under **Build and deployment**, change the source to **GitHub Actions**.
4. GitHub will suggest a "Next.js" workflow. Click **Configure** and commit the generated `.github/workflows/nextjs.yml` file.
5. The site will automatically build and deploy.

---
*Built by Antigravity AI.*
