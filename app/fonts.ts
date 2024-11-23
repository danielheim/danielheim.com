import { Rubik } from "next/font/google";
import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const heading = localFont({
  src: "./fonts/norwester.otf",
  variable: "--font-norwester",
});

export const subheading = localFont({
  src: "./fonts/kollektif/Kollektif.ttf",
  variable: "--font-kollektif",
});

export const body = Rubik({ subsets: ["latin"], weight: ["300", "400"] });
