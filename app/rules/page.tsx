import { MoveRight, Upload, Cloud, Key, Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "rules",
};

const RulesPage = () => {
    return (
        <main className="pt-24 max-w-2xl mx-auto px-6">
            <div className="mb-12">
                <h1 className="text-3xl font-bold mb-4">
                    How It Works
                </h1>
                <p className="text-lg text-gray-600">
                    Simple file sharing in 4 easy steps
                </p>
            </div>

            <div className="space-y-4 mb-12">
                <div className="flex items-start gap-4 p-4 bg-white rounded-md border border-gray-200 shadow-sm">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-100 rounded-md flex items-center justify-center">
                            <Upload className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Choose Your File
                        </h3>
                        <p className="text-gray-600">
                            Visit the{" "}
                            <Link
                                className="text-purple-600 font-semibold hover:text-purple-700"
                                href="/upload"
                            >
                                upload page
                            </Link>{" "}
                            and select{" "}
                            <span className="text-purple-600 font-semibold">
                                one single file
                            </span>{" "}
                            to share.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-md border border-gray-200 shadow-sm">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-100 rounded-md flex items-center justify-center">
                            <Cloud className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Upload to Cloud
                        </h3>
                        <p className="text-gray-600">
                            <span className="text-purple-600 font-semibold">
                                Click upload
                            </span>{" "}
                            and wait while your file gets securely stored in our
                            AWS cloud storage.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-md border border-gray-200 shadow-sm">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-100 rounded-md flex items-center justify-center">
                            <Key className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Get Your Code
                        </h3>
                        <p className="text-gray-600">
                            Use the generated{" "}
                            <span className="text-purple-600 font-semibold">
                                6-digit code
                            </span>{" "}
                            to access your file from anywhere on the internet!
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-md border border-gray-200 shadow-sm">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-100 rounded-md flex items-center justify-center">
                            <Star className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Share the Love
                        </h3>
                        <p className="text-gray-600">
                            That&apos;s it! If this was helpful, consider starring this
                            on{" "}
                            <Link
                                href="https://github.com/iammohitvs/dontlogin"
                                target="_blank"
                                className="text-purple-600 font-semibold hover:text-purple-700"
                            >
                                GitHub
                            </Link>
                            !
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <Link
                    href="/upload"
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-all"
                >
                    Upload Page
                    <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </main>
    );
};

export default RulesPage;
