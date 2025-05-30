import React, { useState, useRef } from "react";
import { Upload, File, X } from "lucide-react";

interface DropzoneProps {
    handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ handleFileInputChange }) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            setSelectedFile(file);

            const syntheticEvent = {
                target: { files: [file] },
            } as unknown as React.ChangeEvent<HTMLInputElement>;

            handleFileInputChange(syntheticEvent);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setSelectedFile(file);
        handleFileInputChange(e);
    };

    const removeFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }

        const syntheticEvent = {
            target: { files: null },
        } as React.ChangeEvent<HTMLInputElement>;

        handleFileInputChange(syntheticEvent);
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    return (
        <div className="w-full mx-auto">
            <div
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
          relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          transition-all duration-200 ease-in-out h-[160px]
          ${
              isDragOver
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
          }
        `}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleInputChange}
                    className="hidden"
                    accept="*/*"
                />

                {selectedFile ? (
                    <div className="space-y-3">
                        <div className="flex items-center justify-center">
                            <File
                                className="w-8 h-8 text-blue-500"
                                style={{ color: "hsl(262.1, 83.3%, 57.8%)" }}
                            />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                {selectedFile.name}
                            </p>
                            <p className="text-xs text-gray-500">
                                {formatFileSize(selectedFile.size)}
                            </p>
                        </div>
                        <button
                            onClick={removeFile}
                            className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label="Remove file"
                        >
                            <X className="w-3 h-3 text-gray-600" />
                        </button>
                    </div>
                ) : (
                    <div className="space-y-3 flex flex-col items-center justify-center h-full">
                        <div className="flex items-center justify-center">
                            <Upload
                                className="w-8 h-8"
                                style={{ color: "hsl(262.1, 83.3%, 57.8%)" }}
                            />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-900">
                                Drop files here or click to browse
                            </p>
                            <p className="text-xs text-gray-500">
                                All file types supported
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropzone;
