"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { GradientText } from "@/components/ui/gradient-text"
import { Button } from "@/components/ui/button"
import { FAQSection } from "@/components/ui/faq-section"
import { useRouter } from "next/navigation"

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individuals and small teams",
    features: ["Up to 5 team members", "Basic AI insights", "3 projects", "Basic analytics", "24/7 support"],
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal for growing teams and businesses",
    features: [
      "Up to 20 team members",
      "Advanced AI insights",
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom workflows",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited team members",
      "Custom AI model training",
      "Unlimited projects",
      "Enterprise analytics",
      "Dedicated support",
      "Custom workflows",
      "API access",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
]

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />

      <div className="container relative py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <GradientText>Simple, Transparent Pricing</GradientText>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">Choose the perfect plan for your team's needs</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-20 grid gap-8 md:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border p-8 backdrop-blur-sm transition-all hover:border-purple-500/50 ${
                plan.popular ? "border-purple-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-500 px-3 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-2xl font-bold">{plan.name}</div>
              <div className="mt-4 text-4xl font-bold">{plan.price}</div>
              <div className="mt-2 text-sm text-muted-foreground">per user/month</div>
              <p className="mt-4 text-muted-foreground">{plan.description}</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-purple-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => {plan.name === 'Enterprise' ? router.push('/contact') : router.push('/loginG')}}
                className={`mt-8 w-full ${
                  plan.popular ? "bg-gradient-to-r from-purple-500 to-purple-700" : "bg-secondary"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <section className="animate-section mt-32">
          <FAQSection />
        </section>
      </div>
    </div>
  )
}

