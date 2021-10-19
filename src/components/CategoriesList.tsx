import React, { FC, useEffect, useState } from 'react'

import CategoriesService from '../API/CategoriesService'
import { ICategory } from '../types/types'
import CategoryItem from './CategoryItem'

const CategoriesList: FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([])

  useEffect(() => {
    fetchCategories()
  }, [])

  async function fetchCategories() {
    const getCategories = await CategoriesService.getAll()
    getCategories && setCategories(getCategories)
  }

  return (
    <div>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoriesList
