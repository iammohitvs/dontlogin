import WhyThisExistsDialog from "@/components/WhyThisExistsDialog";
import { Button } from "@/components/ui/button";
import { FileDown, FileUp, GithubIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen max-h-screen overflow-hidden">
            <div className="relative min-h-screen grid place-items-center isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                    <div
                        style={{
                            clipPath:
                                "polygon(25.9% 55.9%, 0% 38.4%, 2.5% 73.1%, 14.5% 100%, 19.3% 98%, 27.5% 67.5%, 39.8% 37.6%, 47.6% 31.9%, 52.5% 41.7%, 54.8% 65.5%, 72.5% 23.3%, 100% 35.1%, 82.1% 0%, 72.4% 23.2%, 23.9% 2.3%, 25.9% 55.9%)",
                        }}
                        className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] translate-y-1/2 translate-x-2/3 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>{" "}
                <div className="max-w-[500px] text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold">
                        Upload, Share, and Download
                        <br />
                        but <span className="text-primary">dontLogin</span>
                    </h1>

                    <h5 className="text-gray-600 mt-4 text-xl font-extralight tracking-tight">
                        With dontLogin, your files are just a click away. No
                        accounts, no passwords - simply upload, share your
                        files, and access from anywhere. Fast, secure, and
                        hassle-free.
                    </h5>

                    <div className="p-5 text-xl">
                        <Link href="/rules">
                            <Button className="mr-3 py-6">
                                Upload a file{" "}
                                <FileUp color="white" className="ml-2" />
                            </Button>
                        </Link>
                        <Link href="/download">
                            <Button variant="secondary" className="py-6">
                                Download a file <FileDown className="ml-2" />
                            </Button>
                        </Link>
                    </div>

                    <WhyThisExistsDialog />

                    <Link href="https://github.com/iammohitvs/dontlogin" target="_blank">
                        <GithubIcon className="mx-auto mt-5 text-primary" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
