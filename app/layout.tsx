import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { Toaster } from "sonner"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Grocery AI - Marketplace Inteligente",
  description:
    "Marketplace de supermercado com assistente de IA para receitas e comparação de preços"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col h-screen`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="px-4 pt-2 flex-1">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
        <Toaster richColors />
      </body>
    </html>
  )
}
