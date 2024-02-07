import React from 'react'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import axios from 'axios'

const page = async () => {
  
  return (
    <>
      <section className="section" style={{ height: '40vh' }}>
        <div className="container h-full flex justify-center items-center gap-3 flex-col">
          <p className='text-black text-lg font-dotted'>Articles On</p>
          <h1 className='text-4xl md:text-6xl font-semibold font-dotted text-black animate'>Gera Baano-Stewart II
          </h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container flex flex-wrap justify-center gap-5">
          <Card link={`https://afrotech.com/morehouse-college-senior-builds-social-metaverse-platform`} banner={`https://cms.afrotech.com/wp-content/uploads/2023/07/Untitled-1-9.jpg`} title={`Morehouse College Senior Gera Baano-Stewart II Is Giving New Definition To Being A Simp By Building A Metaverse Empire`} />

          <Card link={`https://finance.yahoo.com/news/morehouse-college-senior-gera-baano-184218504.html`} banner={`https://cms.afrotech.com/wp-content/uploads/2023/07/Untitled-1-9.jpg`} title={`Morehouse College Senior Gera Baano-Stewart II Is Giving New Definition To Being A Simp By Building A Metaverse Empire`} />

          <Card link={`https://hupnccenter.howard.edu/hbcu-startup-scholars/`} banner={'https://hupnccenter.howard.edu/wp-content/uploads/2023/10/gstewart.jpeg'} title={`The HBCU Startup Scholars Program aims to empower the next generation of Black entrepreneurs.`} />

          <Card link={`https://www.techsquareatl.com/the-collection/2023/5/18/founders-friday-startup-law-for-entrepreneurs`} banner={'https://images.squarespace-cdn.com/content/v1/547c8400e4b04456c82aade5/f818a38a-55b2-49e7-8fe2-768cec810c3b/IMG_7732.jpg?format=1500w'} title={`Founder’s Friday: Startup Law for Entrepreneurs`} />
          <Card link={`https://innovationlabs.harvard.edu/about/news/thats-a-wrap-reflecting-on-the-inaugural-nextgen-accelerator-for-black-founders/`} banner={'https://i-lab.harvard.edu/innolabs/wp-content/uploads/sites/5/2023/08/53084341304_d1ab5458a5_o-scaled.jpg'} title={`That’s a Wrap! Reflecting on the Inaugural NextGen Accelerator for Black Founders`} />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page