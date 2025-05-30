import { File, Trash2 } from "lucide-react";
import React from "react";

const FilePresent = ({
    name,
    size,
    type,
    removeFile,
    isremoveDisabled
}: {
    name: string;
    size: number;
    type: string;
    removeFile: () => void;
    isremoveDisabled: boolean;
}) => {
    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return "0 B";
        const k = 1024;
        const sizes = ["B", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
    };

    return (
        <div className="bg-white border border-gray-300 rounded-xl p-6">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-50 rounded-lg">
                    <File className="w-6 h-6 text-purple-600" />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate mb-1">
                        {name}
                    </h3>
                    <div className="space-y-1">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{formatFileSize(size * 1024 * 1024)}</span>
                            <span className="text-gray-400">•</span>
                            <span className="uppercase">{type}</span>
                        </div>
                    </div>
                </div>

                <button
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:pointer-events-none"
                    onClick={removeFile}
                    disabled={isremoveDisabled}
                >
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default FilePresent;
