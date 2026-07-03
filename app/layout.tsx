import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/shared/animated-background";
import { Particles } from "@/components/shared/particles";
import { MouseSpotlight } from "@/components/shared/mouse-spotlight";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Mark Michael Angelo Clarus | Full Stack Developer",
    template: "%s | Mark Michael Angelo Clarus",
  },
  description:
    "Full Stack Developer specializing in building scalable web applications, mobile apps, and enterprise software. React, Next.js, TypeScript, Laravel, Spring Boot.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "Spring Boot",
    "React Native",
    "Web Development",
    "Mobile Development",
  ],
  authors: [{ name: "Mark Michael Angelo Clarus" }],
  creator: "Mark Michael Angelo Clarus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://markclarus.dev",
    siteName: "Mark Michael Angelo Clarus",
    title: "Mark Michael Angelo Clarus | Full Stack Developer",
    description:
      "Full Stack Developer specializing in building scalable web applications, mobile apps, and enterprise software.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Michael Angelo Clarus | Full Stack Developer",
    description:
      "Full Stack Developer specializing in building scalable web applications, mobile apps, and enterprise software.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mark Michael Angelo Clarus",
              jobTitle: "Full Stack Developer",
              url: "https://markclarus.dev",
              sameAs: [
                "https://github.com/markclarus",
                "https://linkedin.com/in/markclarus",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <AnimatedBackground />
        <Particles />
        <MouseSpotlight />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
