import Banner from '@/components/Banner'
import { Client } from '@/lib/sanityClient'
import { groq } from 'next-sanity'
import React from 'react'


export const revalidate=10;
const bannerQuery=groq`*[_type=='banner']{
  image,
  _id
} | order(_createdAt asc)`;
const Homepage = async() => {

  const banners=await Client.fetch(bannerQuery)
  return (
    <main className='w-full px-6'>
      <Banner banners={banners}/>
    </main>
  )
}

export default Homepage

