"use client"

import { motion } from "framer-motion"
import { GradientText } from "@/components/ui/gradient-text"
import { Button } from "@/components/ui/button"
import { Brain, Clock, LineChart, Users, Zap, MessageSquare, Shield, Boxes } from "lucide-react"
import { useRouter } from "next/navigation"

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI-Powered Insights",
    description:
      "Advanced machine learning algorithms analyze your project data to provide actionable insights and predictions.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Smart Time Tracking",
    description: "Automated time tracking with AI categorization of tasks and activities.",
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Predictive Analytics",
    description: "Forecast project timelines and resource needs with machine learning models.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description: "Real-time collaboration with AI-powered team productivity insights.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Automation",
    description: "Intelligent workflow automation based on your team's patterns.",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Smart Communication",
    description: "AI-enhanced team chat with automatic task creation and priority detection.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Risk Management",
    description: "Proactive risk identification and mitigation suggestions powered by AI.",
  },
  {
    icon: <Boxes className="h-8 w-8" />,
    title: "Resource Optimization",
    description: "AI-driven resource allocation and optimization recommendations.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function FeaturesPage() {

  const router = useRouter();
  
  return (
    <div className="relative min-h-screen pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />

      <div className="container relative py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <GradientText>Powerful Features</GradientText>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Discover how PlanItAI transforms project management with cutting-edge AI technology
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-content-center"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative rounded-lg border p-6 backdrop-blur-sm transition-all hover:border-purple-500/50"
              >
                <div className="mb-4 text-purple-500">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-700/10 opacity-0 blur transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20"
          >
            <Button onClick={() => {router.push('/login')}} size="lg" className="bg-gradient-to-r from-purple-500 to-purple-700">
              Get Started with PlanItAI
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

