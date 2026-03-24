import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import { Navbar } from "./components/Navbar";

// 1. The Viewport Lock (CRITICAL FOR MOBILE SAFARI)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevents users from accidentally double-tap zooming into a button
  userScalable: false,
  themeColor: "#113239", // Makes the top phone status bar match your dark Hero section!
};

// 2. Standard SEO Metadata
export const metadata: Metadata = {
  title: "Privae | Lakefront Residences",
  description: "World-class living spaces. 19 years. 16 projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden" cz-shortcut-listen="true">
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
