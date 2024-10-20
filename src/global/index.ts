/*
AGGREGATION/STAGE PIPELINE:-
    It is a pipline in which we define sequence of different types of operations on our collection data in a database. 
    When we want to perform more than one operations on our collection data and in a specific sequence, we use aggregation pipleines.
    In this we define different stages contain desired operation query.It contains an array of stages(query object of you operation)
*/



import { PipelineStage } from "mongoose";
import { connectDB, getCollection } from "../../app/api/db/connection";

interface MOVIES_PAGINATION {
    page: number, limit: number, query?: string
}

export async function getMoviesAPI({ page, limit }: MOVIES_PAGINATION) {
    const query = `?page=${page}&limit=${limit}`
    const response = await fetch(`http://localhost:3000/api/movies${query}`);
    const data = await response.json();
    return data
}

export async function getMovies({ page, limit, query }: MOVIES_PAGINATION) {
    // console.log('[query]', query)
    const skip = (page - 1) * limit

    // ======= start: if we are only performing pagination so we use the below try catch block.
    // try {
    //     await connectDB()
    //     const moviesCollection = await getCollection('embedded_movies')
    //     const movies = await moviesCollection?.find({})
    //         .limit(limit)
    //         .skip(skip)
    //         .toArray();
    //     return movies
    // } catch (error) {
    //     console.log(error)
    // }
    // ======= end: if we are only performing pagination so we use the below try catch block.

    // ======= start: if we are performing searching also beside pagination so we use the below try catch block.
    try {
        await connectDB()
        const moviesCollection = await getCollection('embedded_movies')
        const pipeline: PipelineStage[] = [{ $skip: skip }, { $limit: limit }];

        if (query) {
            pipeline.unshift({
                $search: {
                    index: "search-movies",
                    text: {
                        query: query,
                        path: {
                            wildcard: "*"
                        }
                    }
                }
            })
        }

        const results = await moviesCollection?.aggregate(pipeline).toArray();

        // forcely wait to show loading skeleton
        // await wait(2000)
        return results
    } catch (error) {
        console.log(error)
    }
    // ======= end: if we are performing searching also beside pagination so we use the below try catch block.

}

export function wait(time: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolve')
        }, time)
    })
}
