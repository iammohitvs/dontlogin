import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const RulesPage = () => {
    return (
        <div className="pt-24 max-w-[500px] mx-auto flex flex-col gap-5">
            <Link
                href="/upload"
                className="group text-primary flex flex-row gap-3 w-fit mx-auto text-2xl items-center hover:underline font-bold"
            >
                upload page{" "}
                <MoveRight className="group-hover:translate-x-2 transition-all" />
            </Link>

            <h1 className="text-3xl font-bold">The way it works:</h1>

            <ol className="list-decimal text-xl list-inside flex flex-col gap-3">
                <li>
                    Start by visiting the{" "}
                    <Link className="text-primary font-bold" href="/upload">
                        upload page
                    </Link>{" "}
                    using the above link and chooosing{" "}
                    <span className="text-primary font-bold">
                        one single file{" "}
                    </span>
                    to upload.
                </li>
                <li>
                    <span className="text-primary font-bold">Click upload</span>{" "}
                    and wait while your file gets uploaded our AWS cloud
                    storage.
                </li>
                <li>
                    Use the generated{" "}
                    <span className="text-primary font-bold">
                        6-digit code{" "}
                    </span>
                    to access that file on any other system on the internet!
                </li>
                <li>
                    And that's it! If it was helpful, help out by starring this on{" "}
                    <Link href="https://github.com/iammohitvs/dontlogin" className="font-bold text-primary">
                        github
                    </Link>
                    !
                </li>
            </ol>

            <p className="font-bold text-xl">
                Note: The file should not be greater than 10MB.
            </p>
        </div>
    );
};

export default RulesPage;