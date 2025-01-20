"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating an API call
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-b from-background via-gray-900 to-black">
      <Toaster />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-background to-background blur-xl" />
      <div className="container relative py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-6xl md:text-7xl">
            <GradientText>Let's Connect</GradientText>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to learn more? Fill out the form below, and we’ll get back to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                  First Name
                </label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="rounded-lg bg-white/20 border-none outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                  className="rounded-lg bg-white/20 border-none outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="johndoe@example.com"
                className="rounded-lg bg-white/20 border-none outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                Subject
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
                className="rounded-lg bg-white/20 border-none outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                className="h-40 rounded-lg bg-white/20 border-none outline-none transition-all"
              />
            </div>
            <Button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold text-lg tracking-wide shadow-lg  transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}