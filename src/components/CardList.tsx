import { IProduct } from '../types/types'
import styles from './CardList.module.css'

interface CardListProps {
  products: IProduct[]
  handleProductRemoveFromCard: (item: IProduct) => void
  handleProductReplaceToCard: (item: IProduct) => void
  countProduct: (num: number, item: IProduct) => void
}

const CardList = ({
  products,
  handleProductRemoveFromCard,
  handleProductReplaceToCard,
  countProduct,
}: CardListProps) => {
  return (
    <div className={styles.list}>
      {products.map((item, i) => (
        <div key={item.id} className={styles.card}>
          <div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>
              <div className={styles.col}>
                <input
                  className={styles.input}
                  type='number'
                  min='1'
                  defaultValue='1'
                  onChange={(e) => {
                    countProduct(Number(e.target.value), item)
                  }}
                />
              </div>
              <div>
                Цена: {item.price}{' '}
                {item.newPrice && item.newPrice !== item.price && (
                  <span>/ {item.newPrice}</span>
                )}{' '}
                руб.
              </div>
            </div>
          </div>

          <div className={styles.but}>
            <div
              className={styles.edit}
              onClick={() => {
                handleProductReplaceToCard(item)
              }}
            >
              <img src='./images/edit.png' alt='' />
            </div>
            <div
              className={styles.trash}
              onClick={() => {
                handleProductRemoveFromCard(item)
              }}
            >
              <img src='./images/trash.png' alt='' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardList
