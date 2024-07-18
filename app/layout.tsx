import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { protectedPaths } from "./utils/protected-paths-utlils";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connect Hub",
  description:
    "A central place for connecting with friends and communities, offering seamless voice , video and text communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedIn>
              <UserButton />
              <main>{children}</main>
            </SignedIn>
          </header>
          <Link href={protectedPaths.test()}>sss </Link>
        </body>
      </html>
    </ClerkProvider>
  );
}
