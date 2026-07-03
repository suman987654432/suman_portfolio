"use client"
import { motion } from "framer-motion"
import { Building2, Calendar, CheckCircle2, MapPin, Sparkles } from "lucide-react"

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "GraffersID",
    period: "March 2026 – June 2026",
    location: "Remote",
    description: "Worked as a Full Stack Developer Intern, maintaining and optimizing a production dashboard while integrating advanced AI speech pipelines. Focused on automation, latency reduction, and overall system optimization.",
    impact: [
      "Maintained and optimized a production dashboard, improving performance and user experience.",
      "Integrated AI STT/TTS pipelines using ElevenLabs and Sarvam AI for voice interactions.",
      "Reduced system latency by ~25% through real-time optimization.",
      "Automated workflows using Zapier, reducing manual effort by ~30%.",
      "Optimized database queries, reducing server load by ~30% and improving response time."
    ],
    technologies: ["React.js", "Node.js", "ElevenLabs", "Sarvam AI", "Zapier", "Performance Optimization"]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Itonic Labs",
    period: "Aug 2024 – March 2025",
    location: "On-site",
    description: "At Itonic Labs, I worked as a Full Stack Developer Intern focusing on frontend-heavy applications. I contributed to production-ready code, integrated complex APIs, and optimized development workflows to enhance team productivity and application performance.",
    impact: [
      "Developed and maintained frontend applications using React.js,and Next.js ensuring a responsive and user-friendly UI.",
      "Integrated RESTful APIs with MongoDB and Express.js, improving data flow and synchronization by 30%.",
      "Improved Git workflows, enhancing collaboration and reducing merge conflicts by 30%, boosting project efficiency.",
      "Contributed to agile development cycles, sprints through planning, code reviews, and timely feature delivery.",
      "Developed scalable web applications with a focus on clean code, and user experience across the full stack."
    ],
    technologies: ["React.js", "JavaScript", "Node.js", "Git", "Agile", "Tailwind CSS", "MongoDB", "Express.js", "REST API"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative  dark:bg-neutral-900/10">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          >
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
            <div className="h-1.5 w-24 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
          </motion.h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-medium">
            My professional journey and the impactful projects I've contributed to.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-12 border-t-4 border-blue-600 dark:border-blue-400 shadow-xl shadow-blue-900/5 dark:shadow-none hover:shadow-2xl hover:shadow-blue-900/20 dark:hover:shadow-blue-900/10 transition-all duration-300"
            >
              {/* Header Row */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{exp.role}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    Key Impact
                  </h4>
                  <div className="grid gap-3">
                    {exp.impact.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 dark:hover:bg-blue-900/10 transition-colors group">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-4 py-1.5 rounded-full text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
