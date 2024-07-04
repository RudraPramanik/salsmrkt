import React from 'react'
import Text from './SharedComponent/Text'

const ProductDescription = () => {
  return (
    <div className='flex justify-between' >
        <div>
        <Text variant='heading2xl' color='black' fontWeight='bold' >Polo Shirt</Text>
        <Text variant='bodySm' color='gray' lineHeight='loose' >Teixeira Design Studio</Text>

        </div>
        <div>
            icon
        </div>
    </div>
  )
}

export default ProductDescription