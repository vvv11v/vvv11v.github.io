import axios from 'axios'

import { ICategory } from '../types/types'

export default class CategoriesService {
  static async getAll() {
    try {
      const response = await axios.get<ICategory[]>(
        'data/categories/categories.json'
      )
      return response.data
    } catch (error) {
      console.error('Загрузка категорий', error)
    }
  }
}
