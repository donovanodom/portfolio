import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donovan Odom",
  description: "Donovan Odom's software engineering portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId="894593821748-o67s404105t2npku4mksoi9as6bd1ovb.apps.googleusercontent.com">
      <html lang="en">
        <body className={`${inter.className} bg-gray-50 dark:bg-gray-700`}>{children}</body>
      </html>
    </GoogleOAuthProvider>
  );
}
