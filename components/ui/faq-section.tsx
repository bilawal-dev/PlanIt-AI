"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { GradientText } from "./gradient-text"

const faqs = [
  {
    question: "Do I need to update the software after downloading it?",
    answer:
      "No, PlanItAI automatically updates itself to ensure you always have the latest features and security patches.",
  },
  {
    question: "Can I download the AI project management software on multiple devices?",
    answer:
      "Yes, you can use PlanItAI on unlimited devices with our Pro and Enterprise plans. The Starter plan supports up to 3 devices.",
  },
  {
    question: "Is this AI project management software available for desktop and mobile devices?",
    answer:
      "Yes, PlanItAI is available on web browsers, desktop apps (Windows, Mac, Linux), and mobile apps (iOS, Android).",
  },
  {
    question: "Is my data secure when downloading AI project management software?",
    answer:
      "Yes, we use industry-standard encryption and security measures to protect your data. All data is encrypted both in transit and at rest.",
  },
  {
    question: "Can I use AI project management software offline?",
    answer: "Yes, PlanItAI offers offline functionality. Your data will sync automatically when you're back online.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <GradientText className="mr-4">Frequently</GradientText>
          asked Questions
        </h2>
        <p className="text-muted-foreground">Still not sure? Let us explain couple of things.</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg border bg-card/50 backdrop-blur-sm overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-muted-foreground">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

