import { useEffect, useState } from 'react'

import AccessoriesService from '../API/AccessoriesService'
import { IAccessory, ICategory } from '../types/types'
import AccessoryItem from './AccessoryItem'
import styles from './css/AccessoriesList.module.css'

interface AccessoriesListProps {
  category: ICategory
}

const AccessoriesList = ({ category }: AccessoriesListProps) => {
  const [accessories, setAccessories] = useState<IAccessory[]>([])

  useEffect(() => {
    fetchAccessories()
    // eslint-disable-next-line
  }, [])

  async function fetchAccessories() {
    const getAccessories = await AccessoriesService.getGroup(category.id)
    getAccessories && setAccessories(getAccessories)
  }
  if (accessories.length) {
    return (
      <>
        <h2>{category.title}</h2>
        <ol className={styles.bullet}>
          {accessories.map((accessory) => (
            <AccessoryItem key={accessory.id} accessory={accessory} />
          ))}
        </ol>
      </>
    )
  } else {
    return <></>
  }
}

export default AccessoriesList
