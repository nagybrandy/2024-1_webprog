import React from 'react'
import Card from './Card'

const CardContainer = () => {
  const products = ['shoe', 't-shirt', 'socks']
  return (
    <div className='grid grid-flow-col gap-4 grid-cols-3 w-full'>
        {products.map(e=> <Card name={e}/>)}
    </div>
  )
}

export default CardContainer
