import { ChefHat, MessageCircle, Search, ShoppingCart } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Chat Assistente",
    url: "/",
    icon: MessageCircle
  },
  {
    title: "Buscar Produtos",
    url: "/products",
    icon: Search
  },
  {
    title: "Meu Carrinho",
    url: "/cart",
    icon: ShoppingCart
  },
  {
    title: "Minhas Receitas",
    url: "#",
    icon: ChefHat
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h2 className="text-xl font-bold text-gray-900">🛒 Grocery AI</h2>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
