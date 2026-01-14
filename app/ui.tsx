'use client'

import MovieCardList from "@/components/movie-card-list"
import { useSearchStore } from "@/store/useSearchStore"

export default function UI() {
    const { search } = useSearchStore();

    return (
        <div className="flex w-full">
            <MovieCardList search={search} />
        </div>
    )
}