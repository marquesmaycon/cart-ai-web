import { api } from "."
import type { Product } from "./types"

export const getCatalog = async (search?: string) => {
  const res = await api.get<Product[]>("catalog", {
    searchParams: { search }
  })
  return res.json()
}
