"use client"
import { motion } from "framer-motion"
import { Layout, Server, Database, Code, Globe, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Next.js", "Redux", "TypeScript", "JavaScript", "Three.js", "GSAP", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Flask", "FastAPI", "Appwrite"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Drizzle ORM", "Neon DB"]
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["C/C++", "Java (Basic)", "Python (Basic)"]
  },
  {
    title: "Languages",
    icon: Globe,
    skills: ["English", "Hindi (Native)"]
  },
  {
    title: "CS Fundamentals",
    icon: Cpu,
    skills: ["Data Structures", "Algorithms", "DBMS", "OOPS", "Operating Systems"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="container px-6 mx-auto">
        {/* Header - Left Aligned Title, Right Aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-neutral-500 dark:text-neutral-400 font-medium"
          >
            Technologies I've worked with
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
