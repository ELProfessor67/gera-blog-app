import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section className="section px-1" style={{ height: 'auto' }}>
      <p className="max-w-[60rem] font-dotted mt-2 mb-5 px-1">
        Raised in Chicago, I am Gera Baano-Stewart II—a versatile individual with a passion for creativity and innovation. My entrepreneurial journey commenced in elementary school and took a tech-savvy turn at the age of 12 when I ventured into software development, aspiring to create the next Temple Run game. College played a pivotal role as I balanced sports, majoring in software engineering, and successfully selling my first app during my sophomore year. Inspired by my father, I've honed a distinctive approach to entrepreneurship, steering my diverse interests—from fashion design to aerospace engineering—towards a common thread of innovation and leadership.

        Navigating a landscape that encompasses art, technology, and athletics, my journey reflects a commitment to pushing boundaries. With roots in Chicago, I continue to explore and contribute to various fields, drawing inspiration from both my diverse skill set and the entrepreneurial lessons instilled by my father.

      </p>
      <div className="container h-full pt-20">
        <h1 className='text-7xl md:text-8xl font-semibold text-black font-dotted animate'>Gera Baano-Stewart II</h1>
        <h2 className='text-3xl text-black mt-5 font-semibold md:pl-2 font-dotted'>
          <a href='https://apps.apple.com/us/app/crowd-plays/id6446473496'>Founder of Crowd Plays</a> + <a href='https://apps.apple.com/us/app/simp-now/id1597791766' className='underline'>Simp Now</a>
          <br />
          American Entrepreneur
        </h2>
        <div className='flex items-center pl-2'>
        <h2 className='text-xl font-dotted'>My Sign: </h2>
        <Image width={150} height={150} src={'/images/sign.jpg'}/>
      </div>
      </div>

      
    </section>
  )
}

export default page