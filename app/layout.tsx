import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav-bar";

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
export const config = {
  name: "Mohamed Naceur Mabrouk",
  description: "I am a Passionate Software Developer",
  ogImage: "", //TODO
  url: "", //TODO
};
export const metadata: Metadata = {
  //metadataBase: new URL(""), //TODO
  title: {
    default: config.name,
    template: `%s - Software Engineer`,
  },
  description: config.description,

  // added new keywords for seo
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
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex relative screen break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
