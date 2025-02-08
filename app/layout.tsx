import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M R Jeevan | Portfolio",
  description: "UI developer | software engineer with 2+ years of experience",
  openGraph: {
    title: "M R Jeevan | Portfolio",
    description: "UI developer | software engineer with 2+ years of experience",
    images: ["/og.png"],
  },
  twitter: {
    creator: "@m_r_jeevan",
    title: "Jeevan | Front-End Developer",
    description: "UI developer | software engineer with 2+ years of experience",
    images: [
      {
        url: "https://mrjeevan.dev/og-image.jpg",
        alt: "Jeevan's Portfolio Preview",
      },
    ],
    card: "summary_large_image",
  },

  keywords: [
    "Js",
    "Next.js",
    "React",
    "TypeScript",
    "MERN",
    "Tailwind",
    "Redux Toolkit",
    "Material-UI",
    "Bootstrap",
    "JavaScript",
    "HTML",
    "CSS",
    "Responsive UI",
    "Prototyping",
    "Web Performance",
    "Chart Libraries",
    "SSG",
    "ISG",
    "SSR",
    "PWA",
    "Front-end Development",
    "UI Components",
    "User Experience",
    "Web Applications",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
