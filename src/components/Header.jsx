"use client"

import Link from "next/link"

const Header = () => {
   return(
    <header className="w-full h-[8rem] relative" id="header">
        <ul className="flex w-full relative">
            <li className="absolute top-0 left-0 right-0 overflow-hidden">
                <Link href={'/'} className="font-dotted text-dark-shadow text-black font-bold text-4xl texsh scrolling-text" style={{"--i": "0s"}}>HOME</Link>
            </li>
            <li className="absolute top-5 left-0 right-0 overflow-hidden">
                <Link href={'/projects'} className="font-dotted text-dark-shadow text-black font-bold text-4xl texsh scrolling-text-reverce uppercase" style={{"--i": "0s"}}>our company</Link>
            </li>
            <li className="absolute top-20 left-0 right-0 overflow-hidden">
                <Link href={'/article'} className="font-dotted text-dark-shadow text-black font-bold text-4xl texsh scrolling-text" style={{"--i": "2s"}}>ARTICLES</Link>
            </li>
            <li className="absolute top-16 left-0 right-0 overflow-hidden">
                <Link href={'/blogs'} className="font-dotted text-dark-shadow text-black font-bold text-4xl texsh scrolling-text-reverce" style={{"--i": "2s"}}>BLOGS</Link>
            </li>
        </ul>
        <div className="bg-candle">

        </div>
        
    </header>
   )
}

export default Header