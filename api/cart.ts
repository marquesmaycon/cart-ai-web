import { api } from "."
import type { Cart } from "./types"

type AddToCartRequest = {
  userId?: number
  productId: number
  quantity: number
}

type UpdateCartRequest = AddToCartRequest

export const getCart = async (userId: number) => {
  return await api.get<Cart>(`cart/${userId}`).json()
}

export const addToCart = async ({
  userId = 1,
  productId,
  quantity = 1
}: AddToCartRequest) => {
  return await api
    .post<Cart>("cart", {
      json: { userId, productId, quantity }
    })
    .json()
}

export const updateCart = async ({
  userId = 1,
  productId,
  quantity
}: UpdateCartRequest) => {
  return await api
    .patch<Cart>(`cart/${userId}`, {
      json: { userId, productId, quantity }
    })
    .json()
}
