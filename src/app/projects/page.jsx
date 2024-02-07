"use client"
import React from 'react'
import SocialMedia from '@/components/SocialMedia';
import Footer from '@/components/Footer'
// import TypeWriterEffect from 'react-typewriter-effect';
import Link from 'next/link';

// const paras = [
//   "Welcome to the heart of innovation and accomplishment at [Your Company Name]. Our diverse portfolio showcases our commitment to excellence, creativity, and cutting-edge solutions. Each project is a testament to our passion for pushing boundaries and delivering exceptional results."
// ]

// function deleyCalulater(i,speed){
//   if(i == 0){
//     return 0;
//   }
//   let text = '';
//   for (let index = 0; index < i; index++) {
//     text += paras[index]
//   }
//   return (text.length)*speed;

// }

const page = () => {
  return (
    <>
      <section className="section" style={{ height: '40vh' }}>
        <div className="container h-full flex justify-center items-center gap-3 flex-col">
          <p className='text-black text-lg font-dotted'>Company by</p>
          <h1 className='text-4xl md:text-6xl font-semibold font-dotted text-black animate'>Gera Baano Stewart</h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* {
            paras.map((data,i) => (
              <p className='para font-dotted'>
                <TypeWriterEffect
                  cursorColor="black"
                  text={data}
                  hideCursorAfterText={true}
                  typeSpeed={5}
                  startDelay={deleyCalulater(i,5)}
                />
              </p>
            ))
          } */}

        <p className='para font-dotted'>
        Welcome to the heart of innovation and accomplishment at [Your Company Name]. Our diverse portfolio showcases our commitment to excellence, creativity, and cutting-edge solutions. Each project is a testament to our passion for pushing boundaries and delivering exceptional results.
        </p>

          <ol className='mt-10 para flex flex-col gap-3 list-decimal' type='1'>
            <li className='flex items-center font-dotted gap-4'>
              <strong className='text-xl'><Link href={'https://polymaths.ai/'}>1. polymaths.ai</Link></strong>
              <span className='text-black text-xl'>-</span>
              <p className='text-black/90 text-lg'>virtual AI human like workers</p>
            </li> 
            <li className='flex items-center font-dotted gap-4'>
              <strong className='text-xl'><Link href={'https://www.instagram.com/hbcuszn/?hl=en'}>2. Hbcu Szn</Link></strong>
              <span className='text-black text-xl'>-</span>
              <p className='text-black/90 text-lg'>Hbcu Streetwear Brand</p>
            </li> 
            <li className='flex items-center font-dotted gap-4'>
              <strong className='text-xl'><Link href={'https://www.instagram.com/timelessbygbaano/'}>3. Luxury Fashion House</Link></strong>
              <span className='text-black text-xl'>-</span>
              <p className='text-black/90 text-lg'>TimelessbyGbaano</p>
            </li> 
            <li className='flex items-center font-dotted gap-4'>
              <strong className='text-xl'><Link href={'https://www.instagram.com/polymathmode/'}>4. Nonpofit</Link></strong>
              <span className='text-black text-xl'>-</span>
              <p className='text-black/90 text-lg'>Polymath Mode</p>
            </li> 
            <li className='flex items-center font-dotted gap-4'>
              <strong className='text-xl'><Link href={'https://www.instagram.com/richoffhitsstudios/'}>5. Recoding Studio</Link></strong>
              <span className='text-black text-xl'>-</span>
              <p className='text-black/90 text-lg'>Richoffhits Studio </p>
            </li> 
            <li className='flex items-center font-dotted gap-4'>
              <strong className='text-xl'><Link href={'https://www.instagram.com/blueprntrecords/'}>6. Record Label</Link></strong>
              <span className='text-black text-xl'>-</span>
              <p className='text-black/90 text-lg'>BluePrint Records</p>
            </li> 
          </ol>
          <SocialMedia/>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default page