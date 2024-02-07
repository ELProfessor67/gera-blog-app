import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import Link from 'next/link';
import { FaFacebookF,FaPinterest , FaTwitter ,FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black/80 py-16 px-5 relative mt-10'>
        <a href='#header' className=' grid place-items-center rounded-full w-14 h-14 bg-indigo-500 absolute top-[-2rem] right-[47%]'>
            <IoIosArrowUp size={20} color='white'/>
        </a>

        <div className='flex items-center justify-center flex-col gap-4'>
            <h2 className='text-white/50 text-xl font-dotted'>FOLLOW ME ON SOCIAL MEDIA</h2>

            <div className='flex items-center gap-4 text-white/70'>
            <Link href={'/'} className='icons-animate' style={{'--i': '3s'}}>
                <FaFacebookF size={20}/>
            </Link>
            <Link href={'/'} className='icons-animate' style={{'--i': '2s'}}>
                <FaTwitter size={20}/>
            </Link>
            <Link href={'/'} className='icons-animate' style={{'--i': '1s'}}>
                <FaPinterest size={20}/>
            </Link>
            <Link href={'/'} className='icons-animate' style={{'--i': '0s'}}>
                <FaGooglePlusG size={29}/>
            </Link>
            </div>
        </div>


    </footer>
  )
}

export default Footer