import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        {message:"API Hit Succesfully !"},
        {status:200}
    )
}