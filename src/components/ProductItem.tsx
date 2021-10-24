import React, { FC } from 'react'

import { IProduct } from '../types/types'
import styles from './ProductItem.module.css'

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
      className={styles.list}
    >
      <span>{product.title}</span>
      <span className={styles.price}>{product.price} руб.</span>
    </div>
  )
}

export default ProductItem
