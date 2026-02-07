"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, CheckCircle2, ExternalLink, Bookmark } from "lucide-react"
import { useState } from "react"

interface Certification {
  title: string
  issuer: string
  provider: string
  date: string
  url: string
  color: string
}

const allCertifications: Certification[] = [
  {
    title: "Advanced MERN Development",
    issuer: "Infosys",
    provider: "Infosys",
    date: "March 2025",
    url: "https://1drv.ms/b/c/7a28bbd6d2a19c80/EVEgMJ4r4ylJgPcAmOzchCQBKu6JPyfVhozhrFAJn99VCQ?e=d4Rtlh",
    color: "border-t-cyan-500"
  },
  {
    title: "Search Engine Optimization (SEO)",
    issuer: "Coursera",
    provider: "University of California, Davis",
    date: "Feb 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/BKG4MWK0ZG7F",
    color: "border-t-yellow-500"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Infosys",
    provider: "Infosys",
    date: "March 2025",
    url: "https://1drv.ms/b/c/7a28bbd6d2a19c80/EbZghV6xDfpFl05ifvctilIBxV0f2y3mv2KujjoS_MWMwQ?e=tAdDKu",
    color: "border-t-purple-500"
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "Coursera",
    provider: "IBM",
    date: "March 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/G6KXMMGOWP33       ",
    color: "border-t-blue-500"
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Coursera",
    provider: "AWS",
    date: "Feb 7, 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/HWLGOZY6P0P2",
    color: "border-t-orange-500"
  },
  {
    title: "Getting Started with Front-End and Web Development",
    issuer: "Coursera",
    provider: "IBM",
    date: "Oct 12, 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/JP2XKLTDMF8U",
    color: "border-t-blue-500"
  },
  {
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    issuer: "Coursera",
    provider: "IBM",
    date: "Aug 5, 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/S51CCJNHOCZR",
    color: "border-t-blue-600"
  },
  {
    title: "Foundations of Coding Full-Stack",
    issuer: "Microsoft",
    provider: "Microsoft",
    date: "March 21, 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/PVUIDDFHEND4",
    color: "border-t-sky-500"
  }
]

const achievements = [
  "2nd Place – Bhopal Inter-College Ideathon",
  "Coding progress tracked via Codolio",
  "Solved 500+ DSA problems across various platforms",
  "5 Star Badge in Problem Solving on HackerRank"
]

const categories = ["All", "Infosys", "Coursera", "IBM", "AWS", "Microsoft"]

export function Certifications() {
  const [filter, setFilter] = useState("All")

  const filteredCerts = allCertifications.filter(cert => 
    filter === "All" || cert.issuer === filter || cert.provider === filter
  )

  return (
    <section className="py-20 bg-neutral-50/50 dark:bg-neutral-900/10">
      <div className="container px-6 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          >
            My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
            <div className="h-1.5 w-24 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
          </motion.h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-medium">
            Professional credentials that validate my expertise and continuous learning.
          </p>
        </div>

        {/* Filters */}
        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" 
                  : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
           layout
           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <motion.div
                layout
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-t-4 ${cert.color} border-x border-b border-neutral-100 dark:border-neutral-800 flex flex-col h-full`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full text-xs font-semibold">
                    {cert.provider}
                  </span>
                  <button className="text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2 min-h-[3rem]">
                  {cert.title}
                </h3>
                
                <div className="flex flex-col gap-1 mb-6">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                    Issued {cert.date}
                  </p>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified Credential
                  </div>
                  
                  <a href={cert.url} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                    View Certificate
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

     


      </div>
    </section>
  )
}
