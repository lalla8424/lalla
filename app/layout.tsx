import React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata = {
  title: "Lalla Kids Art - Creative Art Programs for Kids in Seoul",
  description:
    "Creative art programs for young explorers living in Korea. Join our classes and unleash your child's creativity.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
