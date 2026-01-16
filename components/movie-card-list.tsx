'use client'

import { SearchMovies } from "@/actions/movieActions";
import MovieCard from "./movie-card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader2, Frown } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function MovieCardList({ search }) {
    const { data, hasNextPage, isFetching, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: [ 'movies', search ],
        queryFn: ({ pageParam }) => SearchMovies(search, pageParam, 20),
        getNextPageParam: (lastPage) =>
            lastPage.hasNextPage ? lastPage.page + 1 : undefined,
        initialPageParam: 1,
    });

    const [ ref, inView ] = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView && !isFetching && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView]);

    const movies = data?.pages?.flatMap((page) => page.data) ?? [];
    const isInitialLoading = isFetching && !isFetchingNextPage;

    return (
        <div className="my-18 px-4 w-full" >
            <div className={isInitialLoading || movies.length === 0 ?
                "flex flex-row justify-center items-center w-full mt-20 gap-2"
                : "grid grid-cols-1 md:grid-cols-4 gap-4"}>
                {isInitialLoading && <><Loader2 className="text-4xl animate-spin"/><p>Loading...</p></>}
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                {!isInitialLoading && movies.length === 0 && <><Frown className="text-4xl"/><p>No movies found.</p></>}
            </div>
            {isFetchingNextPage && (
                <div className="flex flex-row justify-center items-center w-full mt-5 gap-2">
                    <Loader2 className="text-4xl animate-spin"/>
                    <p>Loading more...</p>
                </div>
            )}
            <div ref={ref}/>
        </div>
    )
}