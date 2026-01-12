"use client"

import Image from "next/image";
import Logo from "./logo";
import { Input } from "./ui/input"; 
import { Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-foreground z-10">
            <nav className="flex items-center text-background gap-10">
                <Link href="/">
                    <Logo/>    
                </Link>        
                <ul className="flex gap-6">
                    <li> Movies </li>
                    <li> TV Shows </li>
                </ul>
            </nav>                                                      
            <div className="flex w-full max-w-72 items-center border border-muted-foreground rounded-full pl-0 py-0">
                <Search className="w-14 p-0 text-muted-foreground" />
                <Input type="text" placeholder="Search..." className="bg-transparent border-none focus-visible:ring-0 pl-0 text-background" />
            </div>            
        </header>
    )
}