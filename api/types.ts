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
