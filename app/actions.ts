"use server";

import { MAX_FILE_SIZE } from "@/lib/constants";
import { generateFileName } from "@/lib/utils";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

type SignedURLResponse =
    | {
          failure: string;
          success?: undefined;
      }
    | {
          success: {
              url: string;
          };
          failure?: undefined;
      };

type GetSignedURLParams = {
    fileType: string;
    fileSize: number;
    checksum: string;
};

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

    const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: generateFileName(),
        ContentType: fileType,
        ContentLength: fileSize,
        ChecksumSHA256: checksum,
    });

    const url = await getSignedUrl(s3Client, putObjectCommand, {
        expiresIn: 60,
    });

    return { success: { url } };
}
