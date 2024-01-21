'use client'

import React from 'react'
import ProductCard from './ProductCard'
import Container from './Container'
import {ProductProps} from '@/types'
import Link from 'next/link'
interface props{
newProducts:ProductProps[]
}
const NewArrivalProducts = ({newProducts}:props) => {
  return (
    <Container className='-mt-20 z-40'>
    {
            
                newProducts?.map((product: ProductProps, index: number)=>{
                    return(
                        <Link href="/" className="" key={product?._id}>

                            <ProductCard product={product}/>
                        </Link>
                    )
                })
            
            }
    </Container>
  )
}

export default NewArrivalProducts