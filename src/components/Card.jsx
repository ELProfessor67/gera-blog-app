import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"

const Card = ({ banner, link, title }) => {
    return (
        <Link href={link} className='w-[19rem] max-w-[19rem] min-h-[25rem] relative border-r border-l border-black/90'>
            <div className='image-container h-[60%] relative overflow-hidden'>
                <img src={banner} alt='banner' className='w-full h-full object-cover' />
            </div>

            <div className="detail py-4 px-1">
                <h2 className='text-black/90 text-2xl leading-8 hover:underline font-dotted'>
                    {
                        title?.slice(0, 60)
                    }
                </h2>
            </div>
        </Link>
    )
}

export default Card