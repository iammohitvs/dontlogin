"use server";

import { MAX_FILE_SIZE } from "@/lib/constants";
import { GetSignedURLParams, SignedURLResponse } from "@/lib/types";
import { generateFileName } from "@/lib/utils";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
    region: process.env.AWS_BUCKET_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_BUCKET_SECRET_ACCESS_KEY!,
    },
});

export async function getPresignedURL({
    fileType,
    fileSize,
    checksum,
}: GetSignedURLParams): Promise<SignedURLResponse> {
    if (fileSize > MAX_FILE_SIZE) {
        return { failure: "File size too large" };
    }

    const fileName = generateFileName();

    const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileName,
        ContentType: fileType,
        ContentLength: fileSize,
        ChecksumSHA256: checksum,
    });

    const url = await getSignedUrl(s3Client, putObjectCommand, {
        expiresIn: 120,
    });

    return { success: { url, fileName } };
}
