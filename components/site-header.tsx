"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <motion.header
      className="fixed top-0 overflow-hidden z-50 w-full px-4 sm:px-10 border-b bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="hidden md:flex md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  className="absolute -bottom-[21px] h-px w-full bg-gradient-to-r from-purple-500 to-purple-700"
                  layoutId="underline"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-sm">
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-gradient-to-r from-purple-500 to-purple-700 text-sm">Get Started</Button>
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

