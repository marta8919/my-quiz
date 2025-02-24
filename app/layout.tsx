import type { Metadata } from "next";
import "./globals.css";
import LayoutProvider from "@/providers/LayoutProvider";

export const metadata: Metadata = {
  title: "Web Dev Quiz app",
  description: "Quiz app that prepares you for your web developer interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
