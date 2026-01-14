'use client'

import { SearchMovies } from "@/actions/movieActions";
import MovieCard from "./movie-card";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Frown } from "lucide-react";

export default function MovieCardList({ search }) {
    const getAllMoviesQuery = useQuery({
        queryKey: ['movies', search],
        queryFn: () => SearchMovies(search)
    })

    return (
        <div className="my-18 px-4 w-full" >
            <div className={getAllMoviesQuery.isPending || getAllMoviesQuery.data.length === 0 ? 
                "flex flex-row justify-center items-center w-full mt-20 gap-2" 
                : "grid grid-cols-1 md:grid-cols-4 gap-4"}>
                {getAllMoviesQuery.isPending && <><Loader2 className="text-4xl animate-spin"/><p>Loading...</p></>}
                {getAllMoviesQuery.data?.map((movie: any) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                {getAllMoviesQuery.data?.length === 0 && <><Frown className="text-4xl"/><p>No movies found.</p></>}
            </div>
        </div>
    )
}