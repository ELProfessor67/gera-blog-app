
import React from 'react'
import Footer from '@/components/Footer'
import axios from 'axios'
import ArticleBody from '@/components/ArticleBody'
import { redirect } from 'next/navigation'

const getArticle = async (slug) => {
  try {
    let {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*&filters[slug][$eq]=${slug}`,{
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    })
    let paras = [];
    data?.data[0]?.attributes?.content?.forEach((data) => {
      if(data.children[0].text){
        paras.push(data.children[0].text);
      }
    });
    let copy = JSON.parse(JSON.stringify(data));
    data = copy;
    data.data[0].attributes.paras = paras;
    
    return data?.data[0]?.attributes;
  } catch (error) {
    console.log(error)
    return undefined;
  }
}



const page = async ({params}) => {
  const article = await getArticle(params.slug);
  
  if(article === undefined){
    redirect('/article');
  }

  return (
    <>
      <section className="section" style={{ height: '40vh' }}>
        <div className="container h-full flex justify-center items-center gap-3 flex-col">
          <p className='text-black text-lg font-dotted'>As In Regarding</p>
          <h1 className='text-4xl md:text-6xl font-semibold font-dotted text-black animate'>{article?.title}</h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '2rem' }}>
        <ArticleBody paras={article?.paras}/>
      </section>
      <Footer/>
    </>
  )
}

export default page