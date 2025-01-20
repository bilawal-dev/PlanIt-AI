"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bot, Brain, Cpu, LineChart, Sparkles, Users, Zap, Github, Slack, Trello } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { useRouter } from "next/navigation"


export default function Home() {

  const router = useRouter();

  return (
    <div className="relative">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
      <div className="relative">

        {/* Hero Section */}
        <section className="container flex min-h-screen flex-col items-center justify-center py-24 text-center">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Discover the Future of <GradientText>Project Management</GradientText>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Bring AI-powered efficiency to your team's project management
            </p>
            <div className="mt-10">
              <Link href="/login" className="inline-block">
                <div className="group relative rounded-lg border bg-card/50 backdrop-blur-sm p-8 transition-all hover:bg-card/80">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <h3 className="text-2xl font-bold">Try PlanIt AI now</h3>
                      <p className="text-muted-foreground">Get started with our AI-powered platform</p>
                    </div>
                    <div className="ml-8">
                      <div className="rounded-full border p-2 group-hover:border-purple-500 group-hover:text-purple-500 group-hover:-rotate-[30deg] duration-100">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* AI Features Showcase */}
        <section className="animate-section container py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold lg:text-4xl">
                  <GradientText>AI-Powered Intelligence</GradientText>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Experience the power of artificial intelligence in project management
                </p>
                <div className="space-y-6">
                  {aiFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start gap-4"
                    >
                      <div className="rounded-lg bg-purple-500/10 p-2">{feature.icon}</div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-lg border bg-card/50 backdrop-blur-sm p-8 overflow-hidden">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/20 to-purple-700/20 blur-xl" />
                  <Image
                    src="/HomeImage1.jpeg"
                    alt="AI Visualization"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Features */}
        <section className="animate-section container py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {interactiveFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative rounded-lg border bg-card/50 backdrop-blur-sm p-8"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 to-purple-700/10 opacity-0 blur transition-opacity group-hover:opacity-100" />
                  <div className="mb-4 text-purple-500">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="mb-4 text-muted-foreground">{feature.description}</p>
                  <Button onClick={() => {router.push('/about')}} variant="link" className="p-0 text-purple-500">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Animation */}
        <section className="animate-section container py-24">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-lg border bg-card/50 backdrop-blur-sm p-8">
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold lg:text-4xl">
                    <GradientText>Seamless Workflow</GradientText>
                  </h2>
                  <p className="mt-4 text-xl text-muted-foreground">
                    Watch how PlanItAI transforms your project management workflow
                  </p>
                  <div className="mt-8 space-y-4">
                    {workflowSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-center gap-4"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
                          {index + 1}
                        </div>
                        <p>{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-lg border bg-card/50 backdrop-blur-sm p-4 overflow-hidden">
                    <Image
                      src="/HomeImage2.avif"
                      alt="Workflow Visualization"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="animate-section container py-24">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">
              <GradientText>Powerful Integrations</GradientText>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">Connect with your favorite tools seamlessly</p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-lg border bg-card/50 backdrop-blur-sm p-6"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 to-purple-700/10 opacity-0 blur transition-opacity group-hover:opacity-100" />
                  <div className="mx-auto mb-4 flex items-center justify-center">
                    {integrationIcons[integration as keyof typeof integrationIcons]}
                  </div>
                  <h3 className="font-semibold">{integration}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="animate-section container py-24">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card/50 backdrop-blur-sm p-8 text-center">
              <h2 className="text-3xl font-bold lg:text-4xl">Ready to Transform Your Workflow?</h2>
              <p className="mt-4 text-xl text-muted-foreground">Join thousands of teams already using PlanItAI</p>
              <div className="mt-8 flex justify-center gap-4">
                <Button onClick={() => router.push('/login')} size="lg" className="bg-gradient-to-r from-purple-500 to-purple-700">
                  Get Started
                </Button>
                <Button onClick={() => router.push('/login')} size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

const aiFeatures = [
  {
    title: "Smart Task Prioritization",
    description: "AI analyzes your workflow to suggest optimal task sequences",
    icon: <Brain className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "Predictive Analytics",
    description: "Forecast project timelines and resource needs with ML models",
    icon: <LineChart className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "Automated Workflows",
    description: "Let AI handle routine tasks while you focus on what matters",
    icon: <Cpu className="h-6 w-6 text-purple-500" />,
  },
]

const interactiveFeatures = [
  {
    title: "Real-time Collaboration",
    description: "Work together seamlessly with your team in real-time",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    title: "Smart Automation",
    description: "Automate repetitive tasks with AI-powered workflows",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Instant Insights",
    description: "Get AI-powered insights and recommendations instantly",
    icon: <Zap className="h-6 w-6" />,
  },
]

const workflowSteps = [
  "AI analyzes your project requirements",
  "Smart task distribution and timeline creation",
  "Automated progress tracking and updates",
  "Real-time collaboration and communication",
  "Predictive analytics and insights",
]

const integrations = ["GitHub", "Slack", "Jira", "Microsoft Teams", "Trello", "Asana", "Notion", "Google Workspace"]

const features = [
  {
    title: "AI-Powered Insights",
    description: "Get real-time project insights and predictions powered by advanced AI algorithms.",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    title: "Smart Automation",
    description: "Automate routine tasks and workflows with intelligent project management.",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized platform.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Team Collaboration",
    description: "Foster seamless collaboration with real-time updates and smart notifications.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Advanced Analytics",
    description: "Make data-driven decisions with comprehensive project analytics.",
    icon: <LineChart className="h-6 w-6" />,
  },
  {
    title: "Custom Workflows",
    description: "Create and optimize workflows tailored to your team's needs.",
    icon: <Bot className="h-6 w-6" />,
  },
]

const stats = [
  { value: "10k+", label: "Active Users" },
  { value: "50k+", label: "Projects Managed" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
]

const testimonials = [
  {
    content:
      "PlanItAI has completely transformed how our team manages projects. The AI insights are incredibly valuable.",
    name: "Sarah Chen",
    role: "Product Manager",
    avatar: "👩‍💼",
  },
  {
    content: "The automation features have saved us countless hours. It's like having an extra team member.",
    name: "Michael Rodriguez",
    role: "Tech Lead",
    avatar: "👨‍💻",
  },
  {
    content: "Best project management tool we've ever used. The AI capabilities are truly game-changing.",
    name: "Emily Thompson",
    role: "Operations Director",
    avatar: "👩‍💼",
  },
]

const integrationIcons = {
  GitHub: <Github className="h-8 w-8" />,
  Slack: <Slack className="h-8 w-8" />,
  Jira: (
    <div className="h-8 w-8 bg-[#0052CC] rounded-sm flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
        <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.762a1.005 1.005 0 0 0-1.001-1.005zM23.017 0H11.459a5.215 5.215 0 0 0 5.214 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.005 1.005 0 0 0 23.017 0z" />
      </svg>
    </div>
  ),
  "Microsoft Teams": (
    <div className="h-8 w-8 bg-[#6264A7] rounded-sm flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
        <path d="M14.5 21.25h-11A2.75 2.75 0 0 1 .75 18.5V5.5a2.75 2.75 0 0 1 2.75-2.75h11a2.75 2.75 0 0 1 2.75 2.75v13a2.75 2.75 0 0 1-2.75 2.75zm-11-17a1.25 1.25 0 0 0-1.25 1.25v13a1.25 1.25 0 0 0 1.25 1.25h11a1.25 1.25 0 0 0 1.25-1.25V5.5a1.25 1.25 0 0 0-1.25-1.25h-11z" />
        <path d="M23.25 17.5V8.25a2 2 0 0 0-2-2h-2.5v1.5h2.5a.5.5 0 0 1 .5.5v9.25a.5.5 0 0 1-.5.5h-2.5v1.5h2.5a2 2 0 0 0 2-2z" />
      </svg>
    </div>
  ),
  Trello: <Trello className="h-8 w-8" />,
  Asana: (
    <div className="h-8 w-8 bg-[#F06A6A] rounded-sm flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.66c-4.24 0-7.66-3.42-7.66-7.66 0-4.24 3.42-7.66 7.66-7.66 4.24 0 7.66 3.42 7.66 7.66 0 4.24-3.42 7.66-7.66 7.66z" />
      </svg>
    </div>
  ),
  Notion: (
    <div className="h-8 w-8 bg-black rounded-sm flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-2.986-4.577c-.56-.84-.748-1.306-.748-1.96V2.667c0-.839.374-1.54 1.26-1.632z" />
      </svg>
    </div>
  ),
  "Google Workspace": (
    <div className="h-8 w-8 bg-white rounded-sm flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#4285F4" />
        <path
          d="M9.577 11.667H6.808v2.666h2.769c-.135 1.6-1.532 2.666-2.769 2.666a3.001 3.001 0 0 1 0-6c.784 0 1.492.323 2.007.844l1.872-1.872a5.001 5.001 0 1 0-3.879 8.365c2.784 0 5.269-2.005 5.269-5.333 0-.294-.034-.583-.094-.861L9.577 11.667z"
          fill="#fff"
        />
      </svg>
    </div>
  ),
}

