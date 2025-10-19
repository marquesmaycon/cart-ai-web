import { api } from "."
import type { ChatSession } from "./types"

export const getChatSessions = async () => {
  return await api.get<ChatSession[]>("chat-sessions").json()
}

export const getChatSession = async (chatSessionId: number) => {
  return await api.get<ChatSession>(`chat-sessions/${chatSessionId}`).json()
}

export const createChatSession = async () => {
  return await api.post<ChatSession>("chat-sessions").json()
}

export const sendMessageToChat = async (
  chatSessionId: number,
  content: string
) => {
  return await api
    .post(`chat-sessions/${chatSessionId}/messages`, { json: { content } })
    .json()
}

export const confirmAction = async (
  chatSessionId: number,
  actionId: number
) => {
  return await api
    .post(`chat-sessions/${chatSessionId}/actions/${actionId}/confirm`)
    .json()
}
