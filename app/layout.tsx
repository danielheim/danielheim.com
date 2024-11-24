import type { Metadata } from "next";
import { Footer } from "./components/Footer";
import { body as bodyFont } from "./fonts";
import "./globals.scss";

import * as content from "./content.json";

const { intro } = content;

export const metadata: Metadata = {
  title: `${intro.title} &middot; ${intro.subtitle}`,
  description: intro.desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className}`}>
        <div className={"app"}>
          <main className={"app__item"}>{children}</main>
          <footer className={"app__item"}>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
