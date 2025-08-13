import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Pce-1",
  description: "Pce-1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
