import React from "react";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export const metadata = {
  title: "Prostate Cancer",
  description: "Healthcare International.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Prostate Cancer",
    description: "Prostate Cancer",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Healthcare International",
      },
    ],
  },
  icons: {
    icon: "favicon_io/favicon-32x32.png",
    shortcut: "favicon_io/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
