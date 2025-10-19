export type User = {
  id: number
  name: string
  email: string
  password: string
  createdAt: string

  carts: Cart[]
  chatSessions: ChatSession[]
}

export type Product = {
  id: number
  name: string
  price: number
  embedding: number[]
  storeId: number

  store: Store
  cartItems: CartItem[]
}

export type Store = {
  id: number
  name: string

  products: Product[]
  carts: Cart[]
}

export type Cart = {
  createdAt: string
  id: number
  active: boolean
  score?: number
  userId: number
  storeId: number
  suggestedByMessageId?: number | null

  user: User
  items: CartItem[]
  store: Store
  message: ChatMessage | null
}

export type CartItem = {
  id: number
  quantity: number
  cartId: number
  productId: number
  createdAt: string

  product: Product
  cart: Cart
}

export type ChatSession = {
  id: number
  userId: number
  createdAt: string

  user: User
  messages?: ChatMessage[]
}

export enum MessageSender {
  USER = "USER",
  ASSISTANT = "ASSISTANT"
}

export enum MessageType {
  TEXT = "TEXT",
  SUGGESTION = "SUGGESTION"
}

export type ChatMessage = {
  id: number
  content: string
  sender: MessageSender
  geminiMessageId: string | null
  messageType: MessageType
  chatSessionId: number
  createdAt: Date

  chatSession: ChatSession
  carts: Cart[] | null
  actions: ChatMessageAction[]
}

enum ActionType {
  SUGGEST_CART = "SUGGEST_CART"
}

export type ChatMessageAction = {
  id: number
  actionType: ActionType
  payload: object
  confirmedAt: Date | null
  executedAt: Date | null
  createdAt: Date
  chatMessageId: number

  chatMessage: ChatMessage
}