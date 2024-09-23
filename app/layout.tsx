import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Head from "next/head";
import React from 'react'

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
      <html lang="en">
        <Head>
          <meta content='user-scalable=0'/>
         <link rel="shortcut icon" href="public/favicon.ico"/>
        </Head>
        <body className={`${inter.className} bg-gray-50`}>
          <NavBar/>
          <div className="md:px-12 md:py-4 px-4 py-4 md:mt-14 mt-20">
            {children}
          </div>
        </body>
      </html>
  );
}
