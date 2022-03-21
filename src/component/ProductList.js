import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({produits}) {
  return (
    <div className='ProductList'>
      {produits.map(
          (el)=><ProductCard produit={el}/>
      )}
    </div>
  )
}
