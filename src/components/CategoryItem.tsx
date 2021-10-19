import React, { FC } from 'react'

import { ICategory } from '../types/types'
import AccessoriesList from './AccessoriesList'

interface CategoryItemProps {
  category: ICategory
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  return <AccessoriesList category={category} />
}
export default CategoryItem
