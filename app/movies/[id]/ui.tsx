'use client'

import Image from "next/image";
import { Star, UsersRound, CalendarDays } from "lucide-react";

export default function UI({ id }) {    
    return (
        <div className="flex w-full min-h-full items-center justify-center px-4 py-16 bg-foreground/90 text-background text-2xl md:flex-row flex-col gap-10">
            <Image
                src='https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg'
                alt="Movie Poster"
                width={300}
                height={450}
                className="h-2/5 w-auto px-10 "
            />
            <div className="flex flex-col w-2/3 gap-8">
                <h1 className="text-4xl font-bold">Dune: Part Two</h1>
                <p className="mt-4 text-md font-light opacity-75">
                    Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.
                </p>
                <div className="flex flex-col gap-2 text-md">
                    <p className="flex flex-row items-center gap-1">
                        <Star/>Vote_average: 8.3</p>
                    <p className="flex flex-row items-center gap-1">
                        <UsersRound/>Popularity:3437.313</p>
                    <p className="flex flex-row items-center gap-1">
                        <CalendarDays/>Release_date:2024-02-27</p>
                </div>
            </div>
        </div>
    )
}