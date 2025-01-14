import type { Metadata } from "next";
import localFont from "next/font/local";
import "./homepage/globals.css";
import Footer from "./components/Footer";
import Navbar from "./homepage/Navbar";
import "./index.css"

const geistSans = localFont({
  src: "./homepage/fonts/GeistMonoVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./homepage/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My hr expert",
  description: "All technical and management service providers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
