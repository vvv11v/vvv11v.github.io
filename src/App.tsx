import React, { Suspense, useEffect, useState } from 'react'

import styles from './App.module.css'
import CardList from './components/CardList'
import CategoriesList from './components/CategoriesList'
import LoadingProducts from './components/UI/Loading/LoadingProducts'
import Modal from './components/UI/modals/Modal'
import * as CONFIG from './config'
import { ProductContext } from './context'
import { calculatePriceTotal, getAccessoriesId } from './libs'
import { IProduct } from './types/types'

const ProductsList = React.lazy(() => import('./components/ProductsList'))

console.log(CONFIG.VERSION)

function App() {
  const [isModal, setIsModal] = useState<boolean>(false)
  const [products, setProducts] = useState<IProduct[]>([])
  const [accessoryId, setAccessoryId] = useState<number>(0)
  const [accessoriesDisabled, setAccessoriesDisabled] = useState<[]>([])
  const [priceTotal, setPriceTotal] = useState<number>(0)

  useEffect(() => {
    setAccessoriesDisabled(getAccessoriesId(products))
    setPriceTotal(calculatePriceTotal(products))
  }, [products])

  function shouldDisplayProducts(accessoryId: number): void {
    setAccessoryId(accessoryId)
    setIsModal(true)
  }

  function handleProductAddToCard(item: IProduct, accessoryId: number): void {
    item.accessory = accessoryId
    setProducts([...products, item].sort(sortCard))
    setIsModal(false)
  }

  function handleProductRemoveFromCard(item: IProduct): void {
    setProducts(products.filter((p) => p.title !== item.title).sort(sortCard))
  }

  function handleProductReplaceToCard(item: IProduct): void {
    setProducts(products.filter((p) => p.title !== item.title).sort(sortCard))
    setAccessoryId(item.accessory)
    setIsModal(true)
  }

  function countProduct(num: number, product: IProduct) {
    const newPrice = num * product.price
    product.newPrice = newPrice
    const newProducts = products.filter((item) => item.title !== product.title)

    setProducts([...newProducts, product].sort(sortCard))
  }

  function sortCard(a: any, b: any) {
    if (a.title < b.title) return -1
    else return 1
  }

  return (
    <ProductContext.Provider
      value={{
        shouldDisplayProducts,
        accessoriesDisabled,
      }}
    >
      <main className={styles.main}>
        <div className={styles.list}>
          <h1>Конфигуратор ПК</h1>
          <CategoriesList />
          {products.length !== 0 && (
            <button
              className={styles.button}
              onClick={() => {
                setProducts([])
              }}
            >
              Сбросить результаты ...
            </button>
          )}
        </div>
        <div className={styles.comp}>
          <CardList
            products={products}
            handleProductRemoveFromCard={handleProductRemoveFromCard}
            handleProductReplaceToCard={handleProductReplaceToCard}
            countProduct={countProduct}
          />
          {priceTotal !== 0 && (
            <h2 className={styles.price}>
              Цена: <span>{priceTotal}</span> руб.
            </h2>
          )}
        </div>
      </main>
      <Modal visible={isModal} setVisible={setIsModal}>
        {isModal && (
          <Suspense fallback={<LoadingProducts />}>
            <ProductsList
              accessoryId={accessoryId}
              handleProductAddToCard={handleProductAddToCard}
            />
          </Suspense>
        )}
      </Modal>
    </ProductContext.Provider>
  )
}

export default App
