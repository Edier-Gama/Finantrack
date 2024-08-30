import "../styles/globals.css";
import "@fontsource-variable/montserrat";
// Supports weights 100-900
import "@fontsource-variable/inter";
import { Metadata } from "next";
import React from "react";

import { siteConfig } from "../config/site";
import NavbarPage from "../components/navbar";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body>
        <Providers>
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
          <div>
            <NavbarPage />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
