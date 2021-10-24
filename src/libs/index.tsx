import { IProduct } from '../types/types'

export function getAccessoriesId(products: IProduct[]): [] {
  const result: any = new Map()
  products.map((p) => result.set(p.accessory, true))
  return result
}

export function calculatePriceTotal(products: IProduct[]): number {
  const result: number[] = []
  products.map((p: IProduct) =>
    p.newPrice ? result.push(p.newPrice) : result.push(p.price)
  )
  return result.reduce((acc, num) => acc + num, 0)
}
