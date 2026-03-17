import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Starter",
  description: "A Next.js starter template with TypeScript and SQLite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
