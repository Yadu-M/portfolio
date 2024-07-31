import "../globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Yadu KM | Portfolio",
    template: "%s | Yadu KM",
  },
  description: "Personal portfolio of Yadu Krishnan Madhu, New Grad Software Dev",
  openGraph: {
    title: "Yadu KM | Portfolio",
    description: "Personal portfolio of Yadu KM, showcasing software development projects and skills",
    url: "https://www.yadukm.com/",
    siteName: "Yadu KM Portfolio",
    locale: "en-US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.yadukm.com",
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16' },
      { url: '/android-chrome-192x192.png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, "select-none"].join(" ")}>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}