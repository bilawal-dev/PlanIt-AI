"use client"

import { motion } from "framer-motion"
import { BrainCircuit } from "lucide-react"

export function Logo() {
  return (
    <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-700">
        <BrainCircuit className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold">PlanIt AI</span>
    </motion.div>
  )
}

