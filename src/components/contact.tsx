"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Mail, MapPin, Linkedin, Github, Loader2 } from "lucide-react"

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    // Mock submission
    setTimeout(() => {
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 3000)
    }, 2000)
  }

  return (
    <section id="contact" className="py-20  dark:bg-neutral-900/10">
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          >
            Get In <span className="text-blue-600 dark:text-blue-500">Touch</span>
            <div className="h-1.5 w-24 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
          </motion.h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-medium max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Card - Left Column (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-lg shadow-blue-900/5 dark:shadow-none flex flex-col justify-between h-full border border-neutral-100 dark:border-neutral-800"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Email</h4>
                    <a href="mailto:sumanqaj9876@gmail.com" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words">
                      sumanqaj9876@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Location</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Bhopal, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/suman-kumar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/suman987654432" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:sumanqaj9876@gmail.com"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-semibold">
                Available for freelance
              </span>
            </div>
          </motion.div>

          {/* Contact Form Card - Right Column (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-lg shadow-blue-900/5 dark:shadow-none border border-neutral-100 dark:border-neutral-800"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 border-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 text-neutral-900 dark:text-white placeholder:text-neutral-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 border-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 text-neutral-900 dark:text-white placeholder:text-neutral-400 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 border-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 text-neutral-900 dark:text-white placeholder:text-neutral-400 resize-none transition-all"
                  placeholder="Hi Suman, I'd like to discuss a project with you..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
