import React, { useEffect, useState } from 'react'

function Products() {

    const [products,setProducts] =useState()

    useEffect(()=>{
        fetchProducts()

    },[])

    async function fetchProducts(){
        const response = await fetch('https://dummyjson.com/products')
        const responseJson = await response.json()
        console.log(responseJson)
        setProducts(responseJson.products)


    }

  return (
    <div className='mt-4  p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>

        {
        products && products.map(
            (product)=>{
                const discountPercentage = product.discountPercentage
              const sellingPrice = product.price - (product.price * discountPercentage)/100
            return(
                <Product name={product.title} markedPrice={product.price} sellingPrice={sellingPrice.toFixed(2)} imageURL={product.images[0]}/>
        )
        }
    )
        }

       
       
    </div>
  )
}

export default Products



function Product({name,markedPrice,sellingPrice,imageURL}){
    return (
        <>
         <div className='bg-gray-200 w-full p-5 rounded-xl'>
            <div className='h-48 w-full '>
                <img src={imageURL} alt={name} className='h-full w-full object-cover'/>

            </div>

            <h1 className='text-lg sm:text-xl md:text-2xl font-bold  '>{name}</h1>

            <h2 className='text-red-500 font-bold line-through'>$ {markedPrice}</h2>
            <h2 className='text-green-500 font-bold '>$ {sellingPrice}</h2>
            <button className='px-4 py-2 rounded-xl bg-blue-500 text-white w-full hover:scale-105  '>View</button>
        </div>
        </>
    )
}


