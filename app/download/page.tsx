"use client";

import React, { useState } from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import api from "@/lib/axiosInstance";
import Link from "next/link";
import { getFileLink } from "@/lib/types";
import { AlertCircle, CircleCheck } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const DownloadPage = () => {
    const [code, setCode] = useState<string>("");
    const [link, setLink] = useState<string | undefined>();

    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [pending, setPending] = useState<boolean>(false);

    const downloadFileSubmitHandler = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setPending(true);

        const formData = new FormData(event.currentTarget);

        try {
            const response = await api.post("/api/getfilelink", {
                code: formData.get("codeInput") as string,
            });

            const getFileLinkResponseData = response.data as getFileLink;

            if (!getFileLinkResponseData.fileLink)
                throw new Error(
                    "Something went wrong trying to get access to your file"
                );

            setLink(getFileLinkResponseData.fileLink);
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

    return (
        <main className="p-4 pt-24 max-w-[500px] mx-auto flex flex-col gap-5">
            <h1 className="font-bold text-3xl text-primary">
                Download Your File
            </h1>
            <h3 className="text-gray-600 font-light font-2xl">
                Enter your code and receive a link to your file!
            </h3>

            <form
                className="border-[1px] border-gray-700 p-5 rounded-md flex flex-col gap-4 items-center"
                onSubmit={downloadFileSubmitHandler}
            >
                <Label htmlFor="codeInputOTP">Enter the code:</Label>
                <InputOTP
                    id="codeInputOTP"
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                    value={code}
                    onChange={(code) => setCode(code)}
                >
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <input type="hidden" value={code} name="codeInput" />
                <Button type="submit" disabled={pending || success}>
                    Submit
                </Button>
            </form>

            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Doesnt seem like a file exists with that code.
                    </AlertDescription>
                </Alert>
            )}

            {success && link && (
                <div className="border-[1px] text-green-800 border-green-900 bg-green-100 p-5 rounded-md flex flex-row items-center">
                    <CircleCheck className="mr-3" />
                    Your can access your file using this
                    <Link
                        href={link}
                        className="font-bold underline ml-1"
                        target="_blank"
                    >
                        link
                    </Link>
                </div>
            )}
        </main>
    );
};

export default DownloadPage;
