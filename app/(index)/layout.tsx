import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/(index)/globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fikri.dev",
  description: "Fikri Portofoilo Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="8b031f89-05f1-4c62-946e-dfaeb80a26d7"></script>
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
