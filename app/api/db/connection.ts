import mongoose from "mongoose";


// helper db functions
export async function connectDB() {
    // reuse the existing connection
    if (mongoose.connection.readyState === 1) {
        console.log("MongoDB already connected !");
        return
    }

    const BASE_URI = process.env.DB_CONNECTION_STRING; // Include the specific database name in your URI

    if (!BASE_URI) {
        throw new Error("Please provide a valid MongoDB URI.");
    }

    try {
        await mongoose.connect(BASE_URI);
        const dbName = await getDatabaseName()
        console.log("MongoDB Connected to:",dbName);
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        throw error;
    }
}

export async function getCollection(collection:string) {
    // Access the collection directly by name
    return mongoose?.connection?.db?.collection(collection);

}

export async function getAllCollectionNames() {
    console.log('[getAllCollectionNames is calling]')

    // Use the native `listCollections()` method to get collection names
    const collections = await mongoose.connection?.db?.listCollections().toArray();

    // Extract and log the collection names
    const collectionNames = collections?.map(collection => collection.name);
    console.log("Collections in the Database:", collectionNames);

    return collectionNames;
}

export async function getDatabaseName() {
    // Access the database name
    const dbName = mongoose.connection?.db?.databaseName;
    return dbName;
}

