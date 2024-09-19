import { NextRequest, NextResponse } from "next/server";
import { generate6DigitCode } from "@/lib/utils";
import { createDbEntryBody } from "@/lib/types";
import db from "@/lib/db";

export async function POST(request: NextRequest) {
    const { fileName, fileLink } = (await request.json()) as createDbEntryBody;

    const randomNumber = generate6DigitCode();

    try {
        const dbEntry = await db.uploads.create({
            data: {
                fileName,
                fileLink: fileLink.split("?")[0],
                code: String(randomNumber),
            },
        });

        return NextResponse.json({ code: dbEntry.code }, { status: 201 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                { status: 400 }
            );
        } else {
            return NextResponse.json(
                {
                    message: "An unkown error occurred",
                },
                { status: 400 }
            );
        }
    }
}
