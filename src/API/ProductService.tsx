import axios from 'axios'

import { IProduct } from '../types/types'

export default class ProductService {
  static async getGroup(group: number) {
    try {
      const response = await axios.get<IProduct[]>(
        `data/products_${group}.json`
      )
      return response.data
    } catch (error) {
      console.error('Загрузка товаров', error)
    }
  }
}
