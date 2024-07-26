import "../globals.css";
import { Inter } from "@next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "yadukm.com",
    template: "%s | yadukm.com",
  },
  description: "New Grad Eng",
  openGraph: {
    title: "yadukm.com",
    description:
      "New Grad Eng",
    url: "https://yadukim.com",
    siteName: "yadukm.com",
    images: [
      {
        url: "https://yadukm.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
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
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
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