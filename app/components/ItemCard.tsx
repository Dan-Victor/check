import Image from "next/image";
import React from 'react'  
import Link from "next/link";

interface ItemCardProps {
  id: number;       
    title: string;
    price: number;
    rating: number;
    thumbnail: string;
}     

const ItemCard = ({product}: {product: ItemCardProps}) => {
  return (
    
        <Link href={`/items/${product.id}`}>
          <div key={product.id} className="  bg-white rounded-xl h-full shadow hover:bg-gray-100 transition overflow-hidden cursor-pointer">
            <Image
              src={product.thumbnail}
              alt={product.title}
              className="h-55 w-full object-contain"
              width={300}
              height={300}
              loading="lazy"
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