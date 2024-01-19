import Banner from '@/components/Banner'
import { Client } from '@/lib/sanityClient'
import { groq } from 'next-sanity'
import React from 'react'


const bannerQuery=groq`*[_type=='banner']{
  image,
  _id
} | order(_createdAt asc)`;
const Homepage = async() => {

  const banners=await Client.fetch(bannerQuery)
  console.log(banners)
  return (
    <main className='max-w-[1440px] mx-auto px-6'>
      <Banner/>
    </main>
  )
}

export default Homepage

