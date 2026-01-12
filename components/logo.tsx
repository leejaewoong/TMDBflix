'use client'

import Image from "next/image";

export default function Logo() {
    return (        
        <div className='flex items-center gap-2'>
            <Image 
                src='/images/tmdbflix_logo.png' 
                alt='TMDBflix Logo' 
                width={50} height={30}
                className='!w-20 h-auto' />                       
        </div>        
    )
}