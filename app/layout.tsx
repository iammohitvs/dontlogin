import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    metadataBase: new URL('http://dontlogin.vercel.app'),
    title: {
        default: "dontLogin",
        template: "%s - dontLogin",
    },
    description: "Anonymous and seamless file sharing.",
    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <header className="absolute h-[100px] z-40 grid place-items-center w-full text-2xl font-extrabold text-black">
                    <Link href="/">
                        dont<span className="text-primary">Login</span>
                    </Link>
                </header>

                {children}
            </body>
        </html>
    );
}
