import React, { FC, useEffect, useState } from 'react'

import ProductService from '../API/ProductService'
import { IProduct } from '../types/types'
import ProductItem from './ProductItem'
import LoadingProducts from './UI/Loading/LoadingProducts'

interface ProductsListProps {
  accessoryId: number
  handleProductAddToCard: (item: IProduct, accessoryId: number) => void
}

const ProductsList: FC<ProductsListProps> = ({
  accessoryId,
  handleProductAddToCard,
}) => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetchProducts()
    return () => {}
    // eslint-disable-next-line
  }, [])

  async function fetchProducts() {
    const getProducts = await ProductService.getGroup(accessoryId)
    getProducts &&
      setProducts(
        getProducts.sort(function (a: any, b: any) {
          return a.price - b.price
        })
      )
  }

  return (
    <div>
      {products.length ? (
        products.map((product, i) => (
          <ProductItem
            key={i}
            accessoryId={accessoryId}
            product={product}
            handleProductAddToCard={handleProductAddToCard}
          />
        ))
      ) : (
        <LoadingProducts />
      )}
    </div>
  )
}

export default ProductsList
