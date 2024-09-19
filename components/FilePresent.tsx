import { File, FileUp } from "lucide-react";
import React from "react";

const FilePresent = ({
    name,
    size,
    type,
}: {
    name: string;
    size: number;
    type: string;
}) => {
    return (
        <div className="flex flex-row gap-5 items-center border-[1px] border-black rounded-md p-5">
            <FileUp size={50} color="black" />

            <div className="hidden text-md md:flex flex-row gap-5">
                <div className="font-bold text-right">
                    <p>File Name:</p>
                    <p>File size:</p>
                    <p>File type:</p>
                </div>
                <div className="text-left">
                    <p>{name}</p>
                    <p>{size} MB</p>
                    <p>{type}</p>
                </div>
            </div>

            <div className="text-md md:hidden flex-row gap-5">
                <div className="font-bold text-left">
                    <p className="mb-2">
                        File Name: <span className="font-normal">{name}</span>
                    </p>
                    <p className="mb-2">
                        File Size: <span className="font-normal">{size} MB</span>
                    </p>
                    <p className="mb-2">
                        File Type: <span className="font-normal">{type}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FilePresent;
