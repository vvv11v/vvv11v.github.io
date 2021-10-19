import axios from 'axios'

import { IAccessory } from '../types/types'

export default class AccessoriesService {
  static async getGroup(category: number) {
    try {
      const response = await axios.get<IAccessory[]>(
        `data/categories/accessories_${category}.json`
      )
      return response.data.sort(function (a, b) {
        return a.sort - b.sort
      })
    } catch (error) {
      console.error('Загрузка Групп товаров', error)
    }
  }
}
