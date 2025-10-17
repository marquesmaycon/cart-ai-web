"use client"

import { Minus, Plus, Trash } from "lucide-react"
import Link from "next/link"
import useSWR from "swr"
import { getCart, updateCart } from "@/api/cart"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

export default function CartPage() {
  const { data: cart, mutate } = useSWR("/api/cart", () => getCart(1))

  const handleUpdateQuantity = async (productId: number, quantity: number) => {
    await mutate(
      async () => {
        return await updateCart({
          productId,
          quantity
        })
      }
      // {
      //   optimisticData: (curr) => {
      //     const optimisticData = {
      //       ...curr!,
      //       items: curr!.items
      //         .map((item) =>
      //           item.product.id === productId ? { ...item, quantity } : item
      //         )
      //         .filter((item) => item.quantity > 0)
      //     }
      //     return optimisticData
      //   },
      //   rollbackOnError: true
      // }
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 className="text-xl font-bold">Carrinho: {cart?.store.name}</h2>
        </CardTitle>
        <CardDescription>
          Total de itens:{" "}
          {cart?.items.reduce((acc, { quantity }) => acc + quantity, 0)}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="space-y-4">
          {cart?.items?.map(
            ({ product: { name, id: productId, price }, quantity }) => (
              <li key={productId} className="py-2 px-4 bg-slate-100 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <div className="flex items-center gap-3">
                    <span>
                      {((price * quantity) / 100).toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: "currency"
                      })}
                    </span>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon-sm"
                        onClick={() =>
                          handleUpdateQuantity(productId, quantity - 1)
                        }
                      >
                        <Minus />
                      </Button>
                      <span>{quantity}</span>
                      <Button
                        size="icon-sm"
                        onClick={() =>
                          handleUpdateQuantity(productId, quantity + 1)
                        }
                      >
                        <Plus />
                      </Button>
                      <Button
                        size="icon-sm"
                        onClick={() => handleUpdateQuantity(productId, 0)}
                        variant="destructive"
                      >
                        <Trash />
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </CardContent>

      <CardFooter className="flex flex-col">
        <span className="ml-auto mb-4 text-lg font-medium px-5">
          Total:{" "}
          {cart?.items
            .reduce(
              (acc, { quantity, product: { price } }) =>
                acc + (quantity * price) / 100,
              0
            )
            .toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency"
            })}
        </span>
        <CardAction className="flex items-center justify-between w-full">
          <Link href="/products">
            <Button variant="outline" size="lg">
              Continuar Comprando
            </Button>
          </Link>
          <Button size="lg">Finalizar Pedido</Button>
        </CardAction>
      </CardFooter>
    </Card>
  )
}
