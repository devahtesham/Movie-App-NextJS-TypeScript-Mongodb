import mongoose, { Schema } from "mongoose";

const awardSchema = new Schema({
    wins: { type: Number, required: true },
    nominations: { type: Number, required: true },
    text: { type: String, required: true }
});

const imdbSchema = new Schema({
    rating: { type: Number, required: true },
    votes: { type: Number, required: true },
    id: { type: Number, required: true }
});

const viewerSchema = new Schema({
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    meter: { type: Number, required: true }
});

const criticSchema = new Schema({
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    meter: { type: Number, required: true }
});

const tomatoesSchema = new Schema({
    viewer: viewerSchema,
    fresh: { type: Number, required: true },
    critic: criticSchema,
    rotten: { type: Number, required: true },
    lastUpdated: { type: Date, required: true }
});

const movieSchema = new Schema({
    plot: { type: String, required: true },
    genres: [{ type: String, required: true }],
    runtime: { type: Number, required: true },
    cast: [{ type: String, required: true }],
    poster: { type: String, required: true },
    title: { type: String, required: true },
    fullplot: { type: String, required: true },
    languages: [{ type: String, required: true }],
    released: { type: Date, required: true },
    directors: [{ type: String, required: true }],
    rated: { type: String, required: true },
    awards: awardSchema,
    lastupdated: { type: String, required: true },
    year: { type: Number, required: true },
    imdb: imdbSchema,
    countries: [{ type: String, required: true }],
    type: { type: String, required: true },
    tomatoes: tomatoesSchema,
    num_mflix_comments: { type: Number, required: true },
    created_at: { type: Date, default: new Date() }

})

const moviesModel = mongoose.models.movies || mongoose.model('movies', movieSchema);
export default moviesModel