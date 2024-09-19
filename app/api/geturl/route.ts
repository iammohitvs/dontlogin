import { getPresignedURL } from "@/app/actions";
import { GetSignedURLParams } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { fileType, fileSize, checksum } =
        (await request.json()) as GetSignedURLParams;

    const result = await getPresignedURL({ fileType, fileSize, checksum });

    if (result.failure) {
        return NextResponse.json(
            {
                message: result.failure,
            },
            { status: 400 }
        );
    } else if (result.success) {
        return NextResponse.json(
            {
                message: "success",
                fileInfo: {
                    url: result.success.url,
                    fileName: result.success.fileName,
                },
            },
            {
                status: 201,
            }
        );
    }
}
