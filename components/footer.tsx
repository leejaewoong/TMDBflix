'use client'

import Link from "next/link"

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-foreground text-background">
            <p>Movie Database from <Link href="https://www.themoviedb.org/" className="font-bold text-chart-1">TMDB</Link></p>
        </footer>
    )
}