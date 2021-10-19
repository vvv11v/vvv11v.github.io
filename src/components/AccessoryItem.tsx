import React, { FC, useContext } from 'react'

import { ProductContext } from '../context'
import { IAccessory } from '../types/types'
import styles from './css/AccessoryItem.module.css'

interface AccessoryItemProps {
  accessory: IAccessory
}

const AccessoryItem: FC<AccessoryItemProps> = ({ accessory }) => {
  const { shouldDisplayProducts, accessoriesDisabled } =
    useContext(ProductContext)
  const btn = accessoriesDisabled.has(accessory.id)
    ? styles.hide
    : styles.visible

  return (
    <li
      className={btn}
      onClick={() => {
        shouldDisplayProducts(accessory.id)
      }}
    >
      {accessory.title}
    </li>
  )
}

export default AccessoryItem
