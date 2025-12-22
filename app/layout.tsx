import type { Metadata } from "next";
import { Fira_Code, Inter, Poppins } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neha Chand – Software Developer Portfolio",
  description:
    "Portfolio of Neha Chand, a software developer specializing in Angular, .NET, React, and modern web technologies. Explore projects, skills, and contact information.",
  keywords: [
    "Neha Chand",
    "Software Developer",
    "Portfolio",
    "Angular",
    ".NET",
    "React",
    "Next.js",
    "Web Developer",
    "Full Stack",
    "Fintech",
  ],
  authors: [{ name: "Neha Chand", url: "https://nehachand.dev" }],
  creator: "Neha Chand",
  openGraph: {
    title: "Neha Chand – Software Developer Portfolio",
    description:
      "Portfolio of Neha Chand, a software developer specializing in Angular, .NET, React, and modern web technologies.",
    url: "https://nehachand.com.np",
    siteName: "Neha Chand Portfolio",
    images: [
      {
        url: "https://nehachand.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neha Chand Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neha Chand – Software Developer Portfolio",
    description:
      "Portfolio of Neha Chand, a software developer specializing in Angular, .NET, React, and modern web technologies.",
    creator: "@nehachand",
    images: ["https://nehachand.com.np/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: "#4f46e5",
  metadataBase: new URL("https://nehachand.com.np"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${firaCode.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}
