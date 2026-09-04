import type { Metadata } from "next";
import "./globals.css";
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

import FooterScripts from '@/components/FooterScripts';

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Union Trucking - Union Trucking LLC",
  description: "Union Trucking LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/all.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/slick-theme.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/typography.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" sizes="any" />
      
      <body suppressHydrationWarning>
        <Loader />
        
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
        <FooterScripts />
      </body>
    </html>
  );
}


