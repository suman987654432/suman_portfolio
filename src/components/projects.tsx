"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "ClipURL Platform",
    description: "A modern SaaS platform offering powerful file utilities and QR-based tools through a seamless web experience.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "RESTful API", "ImageKit"],
    links: { demo: "https://www.quickgrab.tech/", code: "https://github.com/suman987654432/scan2-Download" },
    image: "/clipurl.png", 
    featured: true,
    achievements: [
      "Built a multi-tool SaaS platform (QR Scanner, Image-to-PDF, File Compressor)",
      "Enabled instant access with a seamless no-authentication flow.",
      "Implemented in-browser QR scanning and file processing."
    ]
  },
  {
    title: "Cloth2Cash",
    description: "A sustainability-focused platform enabling users to recycle old clothes and earn money through doorstep pickups.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    links: { demo: "https://cloth2cash.vercel.app/", code: "https://github.com/suman987654432/Cloth2cash" },
    image: "/cloth.png",
    featured: true,
    achievements: [
      "Developed doorstep pickup booking for old clothes with weight-based earnings.",
      "Integrated secure REST APIs for order and pickup management.",
      "Implemented JWT authentication with protected user routes."
    ]
  },
  {
    title: "Edu-Quiz",
    description: "An interactive MERN-based quiz application designed to enhance competitive and engaging learning.Provide real time results.",
    tech: ["React", "RESTful APIs", "Tailwind CSS", "TensorFlow.js"],
    links: { demo: "https://quizmaster-flax.vercel.app/", code: "https://github.com/suman987654432/Quiz" },
    image: "/quiz.png",
    featured: true,
    achievements: [
      "Built a MERN quiz platform with real-time questions and scoring.",
      "Added role-based authentication for admins and users.",
      "Implemented leaderboards and performance tracking."
    ]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 relative  dark:bg-neutral-900/5">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          >
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
            <div className="h-1.5 w-24 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
          </motion.h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-medium max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills and expertise in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col h-full group"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                 <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-500"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
                 
                 {project.featured && (
                   <div className="absolute top-4 right-4 bg-white dark:bg-neutral-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-amber-500 flex items-center gap-1 shadow-sm border border-neutral-100 dark:border-neutral-800 z-10">
                     <Star className="w-3 h-3 fill-current" />
                     Featured
                   </div>
                 )}
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Achievements Bullet points */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400 leading-snug">
                         <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Actions */}
                <div className="mt-auto pt-6 border-t border-neutral-100 dark:border-neutral-800 flex gap-6">
                  <Link href={project.links.demo} className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                     Live Demo
                  </Link>
                  <Link href={project.links.code} className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Github className="w-4 h-4" />
                     Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
