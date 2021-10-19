import React, { FC } from 'react'

import { IProduct } from '../types/types'
import styles from './css/CardList.module.css'

interface CardListProps {
  products: IProduct[]
  handleProductRemoveFromCard: (item: IProduct) => void
  handleProductReplaceToCard: (item: IProduct) => void
}

const CardList: FC<CardListProps> = ({
  products,
  handleProductRemoveFromCard,
  handleProductReplaceToCard,
}) => {
  return (
    <div className={styles.list}>
      {products.map((item, i) => (
        <div key={i} className={styles.card}>
          <div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>Цена: {item.price} руб.</div>
          </div>

          <div
            className={styles.edit}
            onClick={() => {
              handleProductReplaceToCard(item)
            }}
          >
            <img src='/images/edit.png' alt='' />
          </div>
          <div
            className={styles.trash}
            onClick={() => {
              handleProductRemoveFromCard(item)
            }}
          >
            <img src='/images/trash.png' alt='' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardList
