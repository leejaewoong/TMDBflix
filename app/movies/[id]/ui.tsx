'use client'

import Image from "next/image";
import { Star, UsersRound, CalendarDays } from "lucide-react";

export default function UI({ movie }) {    
    return (
        <div className="flex w-full min-h-full items-center justify-center px-4 py-16 bg-foreground/90 text-background text-2xl md:flex-row flex-col gap-10">
            <Image
                src={movie.image_url}
                alt="Movie Poster"
                width={300}
                height={450}
                className="h-2/5 w-auto px-10 "
            />
            <div className="flex flex-col w-2/3 gap-8">
                <h1 className="text-4xl font-bold">{movie.title}</h1>
                <p className="mt-4 text-md font-light opacity-75">
                    {movie.overview}
                </p>
                <div className="flex flex-col gap-2 text-md">
                    <p className="flex flex-row items-center gap-1">
                        <Star/>Vote_average: {movie.vote_average}</p>
                    <p className="flex flex-row items-center gap-1">
                        <UsersRound/>Popularity: {movie.popularity}</p>
                    <p className="flex flex-row items-center gap-1">
                        <CalendarDays/>Release_date: {movie.release_date}</p>
                </div>
            </div>
        </div>
    )
}