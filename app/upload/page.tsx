"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FilePresent from "../../components/FilePresent";
import { bytesToMb, computeSHA256 } from "@/lib/utils";
import { getPresignedURL } from "../actions";

const UploadPage = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFormSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        console.log(file);

        if(!file) {
            return
        }

        const preSignedURLResult = await getPresignedURL({
            fileSize: file.size,
            fileType: file.type,
            checksum: await computeSHA256(file),
        });

        if (preSignedURLResult.failure !== undefined) {
            console.error(preSignedURLResult.failure);
            return;
        }

        const { url } = preSignedURLResult.success;
        console.log(url.split("?")[0]);

        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": file.type,
            },
            body: file,
        });

        console.log(res)
    };

    const handleFileInputChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0] ?? null;
        setFile(file);
    };

    return (
        <main className="p-4 pt-24 max-w-[750px] mx-auto flex flex-col gap-5">
            <h1 className="font-bold text-3xl text-primary">Upload Your Files - No Login Needed</h1>
            <h3 className="text-gray-600 font-light font-2xl">
                Securely upload your files and get a unique code. Share the
                code, and download your files on any device - fast, simple, and
                completely anonymous.
            </h3>

            <form onSubmit={handleFormSubmit}>
                <Input type="file" required onChange={handleFileInputChange} />
                <Button type="submit">Submit</Button>
            </form>

            {file && (
                <>
                    <FilePresent />
                    <p>{file.name}</p>
                    <p>{bytesToMb(file.size)} mb</p>
                    <p>{file.type}</p>
                </>
            )}
        </main>
    );
};

export default UploadPage;
