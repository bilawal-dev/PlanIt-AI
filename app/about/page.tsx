"use client"

import { motion } from "framer-motion"
import { GradientText } from "@/components/ui/gradient-text"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Globe2, Rocket, Shield, Sparkles, Target, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {

  const router = useRouter();

  return (
    <div className="relative min-h-screen pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />

      <div className="container relative py-20">
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <GradientText>Redefining Project Management</GradientText>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            We're building the future of collaborative work, where AI and human creativity converge to unlock
            unprecedented productivity.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-32"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-500 to-transparent" />
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-1/2 pl-16 text-left">
                          <h3 className="text-2xl font-bold line-clamp-1">{milestone.title}</h3>
                          <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2">
                          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">
                            {milestone.icon}
                            <div className="absolute -inset-2 rounded-full border border-purple-500/50" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute left-1/2 text-right -translate-x-1/2">
                          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">
                            {milestone.icon}
                            <div className="absolute -inset-2 rounded-full border border-purple-500/50" />
                          </div>
                        </div>
                        <div className="w-1/2 pr-16 text-right">
                          <h3 className="text-2xl font-bold line-clamp-1">{milestone.title}</h3>
                          <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 sm:mt-32 px-5"
        >
          <h2 className="text-3xl font-bold text-center mb-16">
            <GradientText>Our Core Values</GradientText>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative rounded-lg border p-6 backdrop-blur-sm transition-all hover:border-purple-500/50"
              >
                <div className="mb-4 text-purple-500">{value.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
                <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-700/10 opacity-0 blur transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-32"
        >
          <div className="rounded-2xl border bg-card/50 backdrop-blur-sm p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">The Future We're Building</h2>
                <p className="text-muted-foreground mb-6">
                  We envision a world where AI-powered project management tools don't just track tasks – they anticipate
                  needs, remove barriers, and empower teams to achieve the extraordinary.
                </p>
                <Button onClick={() => {router.push('/login')}} className="bg-gradient-to-r from-purple-500 to-purple-700">
                  Join Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="grid gap-4">
                {futurePoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="rounded-full bg-purple-500/10 p-2">{point.icon}</div>
                    <div>
                      <h3 className="font-semibold">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const milestones = [
  {
    title: "Founded in 2023",
    description: "Started with a vision to revolutionize project management",
    icon: <Rocket className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Launch of Core AI",
    description: "Introduced our AI-powered project management system",
    icon: <Sparkles className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Global Expansion",
    description: "Expanded operations to serve clients worldwide",
    icon: <Globe2 className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Next Generation",
    description: "Developing next-gen AI capabilities for productivity",
    icon: <Zap className="h-8 w-8 text-purple-500" />,
  },
]

const values = [
  {
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge AI technology",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Security Focused",
    description: "Ensuring data protection and privacy at every level",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "User Centered",
    description: "Building solutions that prioritize user experience",
    icon: <Target className="h-6 w-6" />,
  },
]

const impacts = [
  { value: "100+", label: "Countries" },
  { value: "1M+", label: "Tasks Managed" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "10k+", label: "Active Users" },
]

const futurePoints = [
  {
    title: "Advanced AI Integration",
    description: "Developing more sophisticated AI algorithms for predictive project management",
    icon: <Code2 className="h-5 w-5 text-purple-500" />,
  },
  {
    title: "Global Collaboration",
    description: "Breaking down geographical barriers with seamless collaboration tools",
    icon: <Globe2 className="h-5 w-5 text-purple-500" />,
  },
  {
    title: "Continuous Innovation",
    description: "Constantly evolving our platform with cutting-edge features",
    icon: <Sparkles className="h-5 w-5 text-purple-500" />,
  },
]