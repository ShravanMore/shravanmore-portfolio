# 🚀 Shravan More - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring stunning animations and a sleek dark/light theme.

## ✨ Features

- 🎨 Modern UI with glass morphism effects
- 🌓 Dark/Light theme toggle
- ✉️ Fully functional contact form with email notifications
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- ⚡ Optimized performance with Next.js
- 🎯 Interactive particle background
- 📄 Downloadable resume

## 🛠️ Tech Stack

- **Framework:** Next.js 16.2
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** Nodemailer
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ShravanMore/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

4. Add your resume:
Place your resume PDF as `public/resume.pdf`

5. Add your profile image:
Place your profile image as `public/profile.png`

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📧 Contact Form Setup

To enable the contact form:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Generate an App Password for Mail
4. Add credentials to `.env.local`

See `CONTACT_FORM_SETUP.md` for detailed instructions.

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 📂 Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/contact/     # Contact form API
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page
│   └── components/
│       ├── AboutSection.tsx
│       ├── AchievementsSection.tsx
│       ├── ContactSection.tsx
│       ├── EducationSection.tsx
│       ├── ExperienceSection.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── Navbar.tsx
│       ├── ProjectsSection.tsx
│       ├── SkillsSection.tsx
│       └── ...
├── public/
│   ├── resume.pdf          # Your resume
│   └── profile.png         # Your profile image
└── ...
```

## 🎨 Customization

All content is easily customizable in the respective component files:
- Personal info: `HeroSection.tsx`, `AboutSection.tsx`
- Experience: `ExperienceSection.tsx`
- Education: `EducationSection.tsx`
- Projects: `ProjectsSection.tsx`
- Skills: `SkillsSection.tsx`
- Achievements: `AchievementsSection.tsx`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shravan More**
- GitHub: [@ShravanMore](https://github.com/ShravanMore)
- LinkedIn: [shravanmore](https://www.linkedin.com/in/shravanmore/)
- Email: shravanmore125@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ Star this repo if you found it helpful!
