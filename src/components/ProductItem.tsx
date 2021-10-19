import React, { FC } from 'react'

import { IProduct } from '../types/types'

interface ProductItemProps {
  product: IProduct
  accessoryId: number
  handleProductAddToCard: (item: IProduct, accessoryId: number) => void
}

const ProductItem: FC<ProductItemProps> = ({
  product,
  handleProductAddToCard,
  accessoryId,
}) => {
  return (
    <div
      onClick={() => handleProductAddToCard(product, accessoryId)}
      style={{ cursor: 'pointer', padding: '10px' }}
    >
      <div style={{ borderBottom: '1px solid blueviolet' }}>
        {product.title}
        <span style={{ color: 'grey', paddingLeft: '20px' }}>
          {product.price} руб.
        </span>
      </div>
    </div>
  )
}

export default ProductItem
