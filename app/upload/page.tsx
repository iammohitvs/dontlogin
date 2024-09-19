"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FilePresent from "../../components/FilePresent";
import { bytesToMb, computeSHA256 } from "@/lib/utils";
import api from "@/lib/axiosInstance";
import { dbEntryResponse, getUrlResponse } from "@/lib/types";
import { AlertCircle, FileCheck, Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";

const UploadPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [code, setCode] = useState<string | null>(null);

    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [pending, setPending] = useState<boolean>(false);

    const handleFormSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        if (!file) {
            return;
        }

        setPending(true);

        try {
            const preSignedUrlResponse = await api.post("/api/geturl", {
                fileSize: file.size,
                fileType: file.type,
                checksum: await computeSHA256(file),
            });

            const {
                fileInfo: { url, fileName },
            } = preSignedUrlResponse.data as getUrlResponse;

            const fileUploadResponse = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": file.type,
                },
                body: file,
            });

            if (!fileUploadResponse.ok) {
                console.error(fileUploadResponse);
                throw new Error((await fileUploadResponse.json()).message);
            }

            const dbEntryResponse = await api.post("/api/createdbentry", {
                fileLink: url,
                fileName,
            });

            const { code } = dbEntryResponse.data as dbEntryResponse;

            setCode(code);
            setSuccess(true);
            setError(false);
        } catch (error) {
            if (error) {
                setError(true);
                setSuccess(false);
            }
        }
        setPending(false);
    };

    const handleFileInputChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0] ?? null;
        setFile(file);
    };

    return (
        <main className="p-4 pt-24 max-w-[640px] mx-auto flex flex-col gap-5">
            <h1 className="font-bold text-3xl text-primary">
                Upload Your File
            </h1>
            <h3 className="text-gray-600 font-light font-2xl">
                After the upload, get your unique access code and share it!
            </h3>
            <div>
                <p className="font-bold text-lg">
                    Note: The file should not be greater than 10MB.
                </p>
                <p className="font-bold text-lg">
                    Note: The file will automatically be deleted after 1 day.
                </p>
                <p className="font-bold text-lg">
                    Note: Leaving this page post upload will mean that you lose
                    your code; so tread lightly!
                </p>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
                <div className="flex flex-row gap-3 items-center group">
                    <Label
                        htmlFor="fileInput"
                        className="text-xl font-bold group-hover:cursor-pointer"
                    >
                        File:
                    </Label>
                    <Input
                        id="fileInput"
                        type="file"
                        required
                        onChange={handleFileInputChange}
                        className="group-hover:cursor-pointer"
                    />
                </div>

                {file && (
                    <>
                        <FilePresent
                            name={file.name}
                            size={Number(bytesToMb(file.size))}
                            type={file.type}
                        />
                    </>
                )}
                <Button
                    type="submit"
                    disabled={!file || pending || success}
                    className="w-fit ml-auto font-bold"
                >
                    {pending ? "Uplaoding..." : "Uplaod"}
                </Button>
            </form>

            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        An error ocurred trying to upload your file. Maybe it&apos;s
                        too large?
                    </AlertDescription>
                </Alert>
            )}

            {success && (
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>
                        File has been uploaded! Go to{" "}
                        <Link href="/download" className="underline">
                            download page
                        </Link>
                    </AlertDescription>
                </Alert>
            )}

            {code && (
                <div className="border-[1px] text-green-800 border-green-900 bg-green-100 p-5 rounded-md flex flex-row gap-1 items-center">
                    <FileCheck className="mr-3" />
                    Your Download Code is
                    <span className="font-bold">{code}</span>
                </div>
            )}
        </main>
    );
};

export default UploadPage;
