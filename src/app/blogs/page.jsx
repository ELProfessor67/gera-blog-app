import React from 'react'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import axios from 'axios'

const getArticles = async () => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    })
    return data?.data;
  } catch (error) {
    console.log(error.message)
  }
}

const page = async () => {
  const articles = await getArticles();
 
  return (
    <>
      <section className="section" style={{ height: '40vh' }}>
        <div className="container h-full flex justify-center items-center gap-3 flex-col">
          <p className='text-black text-lg font-dotted'>Articles written by</p>
          <h1 className='text-4xl md:text-6xl font-semibold font-dotted text-black animate'>Gera Baano-Stewart II
          </h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container flex flex-wrap justify-center gap-5">
          {
            articles?.map((data) => (<Card link={`/blogs/${data?.attributes?.slug}`} banner={`${process.env.NEXT_PUBLIC_API_URL}${data?.attributes?.cover?.data?.attributes?.formats?.thumbnail?.url}`} title={data?.attributes?.title} />))
          }

        </div>
      </section>
      <Footer />
    </>
  )
}

export default page