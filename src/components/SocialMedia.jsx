import Link from 'next/link';
import React from 'react'
import { FaFacebookF,FaPinterest , FaTwitter ,FaGooglePlusG } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className='para flex gap-4 items-center py-10 border-b border-black/20'>
            <Link href={'/'} className='icons-animate' style={{'--i': '0s'}}>
                <FaFacebookF size={20}/>
            </Link>
            <Link href={'/'} className='icons-animate' style={{'--i': '1s'}}>
                <FaTwitter size={20}/>
            </Link>
            <Link href={'/'} className='icons-animate' style={{'--i': '2s'}}>
                <FaPinterest size={20}/>
            </Link>
            <Link href={'/'} className='icons-animate' style={{'--i': '3s'}}>
                <FaGooglePlusG size={29}/>
            </Link>
        </div>
    )
}

export default SocialMedia