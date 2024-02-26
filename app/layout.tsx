import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/ui/theme-provider";
import { Navbar } from "@/ui/nav-bar";
import "./globals.css";
import { AnimParticles } from "@/ui/components/animated-particles";
import { Footer } from "@/ui/components/footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed Naceur Mabrouk",
  description: "Software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,  
                   initial-scale=1.0"
        />
      </head>
      <ThemeProvider>
        <body
          className={`${raleway.className} antialiased text-white bg-gradient-to-r from-indigo-900 to-gray-900`}
        >
          <Navbar />
          <AnimParticles />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
