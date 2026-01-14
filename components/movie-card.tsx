'use client'

import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: any }) {
    return (
        <div className="col-span-1 relative">
            <Image 
                src={movie.image_url} 
                alt='Movie Poster' 
                width={300} height={450}
                className='w-full'/>                       

            <Link 
                href={`/movies/${movie.id}`}                
            >
                <div className="absolute flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-foreground opacity-0 hover:opacity-85 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold text-background p-4">{movie.title}</h3>            
                </div>
            </Link>            
        </div>
    )
}
