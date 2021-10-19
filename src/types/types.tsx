export interface ICategory {
  id: number
  sort: number
  title: string
}

export interface IAccessory {
  id: number
  sort: number
  title: string
  category: number
}

export interface IProduct {
  id: number
  title: string
  description: string
  photo: string
  price: number
  accessory: number
}
