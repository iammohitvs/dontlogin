import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "download",
};

const DownloadLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <>{children};</>;
};

export default DownloadLayout;
