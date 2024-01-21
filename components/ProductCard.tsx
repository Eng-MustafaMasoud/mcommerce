import Image from 'next/image'
import React from 'react'
import { urlFor } from "@/lib/sanityClient";
import { ProductProps } from '@/types';



interface props{
product:ProductProps
}
const ProductCard = ({product}:props) => {
  return (
    <div className=''>
        <div className="">
            <Image src={urlFor(product?.image).url()} alt="new product" width={700} height={700} className="h-72 object-fit w-auto"/>
        </div>
        
    </div>
  )
}

export default ProductCard