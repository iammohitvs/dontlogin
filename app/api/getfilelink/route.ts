import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { code } = (await request.json()) as { code: string };

    const result = await db.uploads.findFirst({
        where: {
            code,
        },
        select: {
            fileLink: true,
        },
    });

    if (!result) {
        return NextResponse.json(
            {
                message: "No file associated with this code",
            },
            { status: 400 }
        );
    } else {
        return NextResponse.json(
            {
                message: "sucess",
                fileLink: result.fileLink,
            },
            { status: 200 }
        );
    }
}
