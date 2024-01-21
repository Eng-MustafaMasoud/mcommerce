import Banner from '@/components/Banner'
import NewArrivalProducts from '@/components/NewArrivalProducts';
import Products from '@/components/Products';
import { Client } from '@/lib/sanityClient'
import { groq } from 'next-sanity'
import React from 'react'


export const revalidate=10;
const bannerQuery=groq`*[_type=='banner']{
  image,
  _id
} | order(_createdAt asc)`;

export const productQuery = groq`*[_type == 'product']{
  ...
} | order(_createdAt desc)`;

export const newArrival = groq`*[_type == 'product'&&position=='new arrival']{
  ...
} | order(_createdAt desc)`;




const Homepage = async() => {

  const banners=await Client.fetch(bannerQuery)
  const product=await Client.fetch(newArrival)
  // const productData = await Client.fetch(productQuery);
 
  return (
    <main className='w-full px-6'>
      <Banner banners={banners}/>
      {/* <Products productData={productData}/> */}
      <NewArrivalProducts products={product}/>
    </main>
  )
}

export default Homepage

