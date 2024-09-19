import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "upload",
};

const UploadLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <>{children};</>;
};

export default UploadLayout;
