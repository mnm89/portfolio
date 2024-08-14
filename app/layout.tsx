import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav-bar";
import { ThemeProvider } from "@/providers/theme-provider";
import { ProgressBarProviders } from "@/providers/progress-bar-provider";
import { ModeToggle } from "@/components/mode-toggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});
const deploymentUrl = "portfolio-two-pi-54.vercel.app";
const config = {
  name: "Mohamed Naceur Mabrouk",
  description: "I am a Passionate Software Engineer",
  ogImage: "", //TODO
  url: deploymentUrl,
};
export const metadata: Metadata = {
  metadataBase: new URL(deploymentUrl),
  title: {
    default: config.name,
    template: `%s - Software Engineer`,
  },
  description: config.description,
  keywords: [
    "mabrouk",
    "MABROUK",
    "Mabrouk",
    "mohamed",
    "MOHAMED",
    "Mohamed",
    "naceur",
    "NACEUR",
    "Naceur",
    "mohamed naceur mabrouk",
    "MOHAMED NACEUR MABROUK",
    "Mohamed Naceur Mabrouk",
    "portfolio",
    "web developer",
    "software developer",
    "software engineer",
    "programmer",
    "website",
    "@mnm89",
  ],
  authors: [
    {
      name: "Mohamed Naceur Mabrouk",
      url: "https://github.com/mnm89",
    },
  ],
  creator: "Mohamed Naceur Mabrouk",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.url,
    title: config.name,
    description: config.description,
    images: [`${config.url}/og-image.png`],
    siteName: config.name,
  },
  twitter: {
    card: "summary_large_image",
    title: config.name,
    description: config.description,
    images: [`${config.url}/og-image.png`],
    creator: "@mnm89",
  },
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
    <html lang="en">
      <body
        className={`${poppins.variable} ${rubik.variable} bg-gradient-to-r from-background to-muted p-0 m-0`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressBarProviders>
            <div className="absolute top-7 left-7 z-50">
              <ModeToggle />
            </div>

            <main
              className={cn(
                "container relative screen break-words min-h-screen flex items-center"
              )}
            >
              <Navbar />
              {children}
            </main>
          </ProgressBarProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
