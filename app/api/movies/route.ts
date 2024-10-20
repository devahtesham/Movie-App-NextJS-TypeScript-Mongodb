import { NextResponse } from "next/server";
import { connectDB, getCollection } from "../db/connection";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const currentPage: number = searchParams.get('page') ? Number(searchParams.get('page')) : 1
    const limit: number = searchParams.get('limit') ? Number(searchParams.get('limit')) : 10

    // skip logic
    const skip = (currentPage - 1) * limit
    try {
        await connectDB()
        const moviesCollection = await getCollection('embedded_movies')
        const movies = await moviesCollection?.find({})
            .limit(limit)
            .skip(skip)
            .toArray();

        return NextResponse.json(
            { message: 'Movies Get Successfully !', data: movies },
            { status: 200 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        )
    }
}