export type Product = {
  id: number
  name: string
  price: number
  embedding: number[]
  storeId: number
  store: Store
}

export type Store = {
  id: number
  name: string
}

export type Cart = {
  createdAt: string
  id: number
  active: boolean
  userId: number
  storeId: number

  items: CartItem[]
  store: Store
}

type CartItem = {
  id: number
  quantity: number
  cartId: number
  productId: number
  createdAt: string

  product: Product
  cart: Cart
}