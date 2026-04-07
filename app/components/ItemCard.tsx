'use client'
import Image from "next/image";
import React from 'react'  
import Link from "next/link";
import {useState} from "react";

interface ItemCardProps {
  id: number;       
    title: string;
    price: number;
    rating: number;
    thumbnail: string;
}     

const ItemCard = ({product}: {product: ItemCardProps}) => {
    const [ImgSrc , setImgSrc] = useState(product.thumbnail);
  return (
    
        <Link href={`/items/${product.id}`}>
          <div key={product.id} className="  bg-white rounded-xl h-full shadow hover:bg-gray-100 transition overflow-hidden cursor-pointer">
            <Image
              src={ImgSrc}
              alt={product.title}
              className="h-55 w-full object-contain"
              width={300}
              height={300}
             priority
              onError={() => setImgSrc("https://via.placeholder.com/300x300?text=No+Image")} // fallback image on error
            />
             <div className="p-4">
              <div className="flex items-center justify-between gap-4">
            <h2 className="font-semibold mt-2">{product.title}</h2>
            <p>${product.price}</p>
            </div>
            <p className="pt-2">rating: {product.rating}</p>
             </div>
          </div>
        </Link>
  )
}

export default ItemCard