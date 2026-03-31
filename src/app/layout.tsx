import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shravan More - Full Stack Developer & AI Enthusiast | Portfolio",
    template: "%s | Shravan More",
  },
  description:
    "Shravan More is a Full Stack Developer and AI & Data Science student from Mumbai, India. Experienced in React, Next.js, Node.js, TypeScript, Python, and Machine Learning. View projects, experience, and achievements.",
  keywords: [
    "Shravan More",
    "Shravan More Portfolio",
    "Full Stack Developer Mumbai",
    "AI Developer India",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Python Developer",
    "MERN Stack Developer",
    "Web Developer Mumbai",
    "Software Engineer",
    "AI and Data Science",
    "Machine Learning",
    "Thadomal Shahani Engineering College",
    "TSEC",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio Website",
    "Shravan More GitHub",
    "Shravan More LinkedIn",
  ],
  authors: [{ name: "Shravan More", url: "https://github.com/ShravanMore" }],
  creator: "Shravan More",
  publisher: "Shravan More",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shravanmore.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shravanmore.vercel.app",
    title: "Shravan More - Full Stack Developer & AI Enthusiast",
    description:
      "Full Stack Developer and AI & Data Science student from Mumbai. Specializing in React, Next.js, Node.js, Python, and Machine Learning. Explore my projects and experience.",
    siteName: "Shravan More Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shravan More - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shravan More - Full Stack Developer & AI Enthusiast",
    description:
      "Full Stack Developer and AI & Data Science student from Mumbai. Specializing in React, Next.js, Node.js, and Machine Learning.",
    images: ["/og-image.png"],
    creator: "@ShravanMore",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shravan More",
    url: "https://shravanmore.vercel.app",
    image: "https://shravanmore.vercel.app/profile.png",
    sameAs: [
      "https://github.com/ShravanMore",
      "https://www.linkedin.com/in/shravanmore/",
      "https://leetcode.com/u/ShravanMore/",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Cimate Infomedia",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Thadomal Shahani Engineering College",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    email: "shravanmore125@gmail.com",
    description:
      "Full Stack Developer and AI & Data Science student specializing in React, Next.js, Node.js, TypeScript, Python, and Machine Learning.",
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Python",
      "JavaScript",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Web Development",
      "MERN Stack",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shravan More Portfolio",
    url: "https://shravanmore.vercel.app",
    description:
      "Portfolio website of Shravan More - Full Stack Developer and AI Enthusiast from Mumbai, India",
    author: {
      "@type": "Person",
      name: "Shravan More",
    },
    inLanguage: "en-US",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2025-01-01T00:00:00+05:30",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: "Shravan More",
      alternateName: "SM",
      description:
        "Full Stack Developer specializing in React, Next.js, and AI technologies",
    },
  };

  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://shravanmore.vercel.app" />
        <link rel="icon" href="/icon-192.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
