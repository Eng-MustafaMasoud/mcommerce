import Banner from '@/components/Banner'
import NewArrivalProducts from '@/components/NewArrivalProducts';
import BestSellers from "@/components/BestSellers";
import HomeBanner from "@/components/HomeBanner";
import YearProduct from "@/components/YearProduct";import { Client } from '@/lib/sanityClient'
import { groq } from 'next-sanity'
import React from 'react'


export const revalidate=10;
const bannerQuery=groq`*[_type=='banner']{
  image,
  _id
} | order(_createdAt asc)`;

// export const productQuery = groq`*[_type == 'product']{
//   ...
// } | order(_createdAt desc)`;

export const newArrival = groq`*[_type == 'product'&&position=='new arrival']{
  ...
} | order(_createdAt desc)`;

const bestSellersQuery = groq`*[_type == 'product' && position == 'bestSeller']{
  ...
 } | order(_createdAt asc)`;
const specialOffersQuery = groq`*[_type == 'product' && position == 'highQuality']{
  ...
 } | order(_createdAt asc)`;



const Homepage = async() => {

  const banners=await Client.fetch(bannerQuery)
  const product=await Client.fetch(newArrival)
  const bestSellersProducts = await Client.fetch(bestSellersQuery);
  const specialOffersProducts = await Client.fetch(specialOffersQuery); 
  return (
    <main className='w-full px-6'>
      <Banner banners={banners}/>
      {/* <Products productData={productData}/> */}
      <NewArrivalProducts products={product}/>
      <HomeBanner />
      <BestSellers products={bestSellersProducts} title="Our Bestsellers" />
      <YearProduct />
      <BestSellers products={specialOffersProducts} title="Special Offers" />
    </main>
  )
}

export default Homepage

