import React from 'react'
import ProductCheckoutInfo from './product-checkout-info'
import Products from './products'

const ProductCheckoutComponenet = () => {
  return (
    <section className='w-[90%] m-auto grid grid-cols-[2fr_1.5fr] gap-5'>
        <ProductCheckoutInfo/>
        <Products/>
    </section>
  )
}

export default ProductCheckoutComponenet