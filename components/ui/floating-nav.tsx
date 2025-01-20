"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function FloatingNav() {
  return (
    <motion.div
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border bg-background/80 px-4 py-2 backdrop-blur-sm"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-sm">
          Features
        </Button>
        <Button variant="ghost" className="text-sm">
          Pricing
        </Button>
        <Button className="bg-gradient-to-r from-purple-500 to-purple-700 text-sm">Try for free</Button>
      </div>
    </motion.div>
  )
}

