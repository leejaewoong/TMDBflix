'use client'

import MovieCard from "./movie-card";

export default function MovieCardList() {
    return (
        <div className="my-18 px-4" >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />        
            </div>
        </div>
    )
}