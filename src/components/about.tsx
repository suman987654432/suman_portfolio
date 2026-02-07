"use client"
import { motion } from "framer-motion"
import { GraduationCap, Award, Download, ArrowUpRight } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden dark:bg-neutral-950">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          >
            About <span className="text-blue-600 dark:text-blue-500">Me</span>
            <div className="h-1.5 w-24 bg-blue-500 mx-auto mt-4 rounded-full" />
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-medium"
          >
            A passionate full-stack developer with a focus on creating elegant solutions
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Story Card - Left Column (2 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-900/5 dark:shadow-none flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-6">My Journey</h3>
              <div className="space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
                <p>
                  I'm a <span className="font-semibold text-neutral-900 dark:text-white">final-year Computer Science student</span> at SAGE University, Bhopal, with a strong academic record (CGPA: 8.6). I specialize in building <span className="font-semibold text-neutral-900 dark:text-white">production-ready, scalable web applications</span> using modern <span className="font-semibold text-neutral-900 dark:text-white">full-stack technologies</span>.
                </p>
                <p>
                  I have <span className="font-semibold text-neutral-900 dark:text-white">hands-on industry experience</span> as a Full Stack Developer Intern at <span className="font-semibold text-neutral-900 dark:text-white">Itonic Labs</span>, where I worked on frontend-heavy applications. During this time, I <span className="font-semibold text-neutral-900 dark:text-white">integrated REST APIs</span> improving data flow by 30%, and optimized Git workflows reducing conflicts significantly.
                </p>
                <p>
                  I'm passionate about solving <span className="font-semibold text-neutral-900 dark:text-white">real-world problems</span> through <span className="font-semibold text-neutral-900 dark:text-white">clean code</span> and performance-focused engineering. I enjoy building intuitive user experiences while maintaining scalability and code quality.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                View Resume
                <Download className="w-4 h-4" />
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                See My Work
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="space-y-8">
            {/* Education Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-3xl p-8 shadow-xl shadow-blue-900/5 dark:shadow-none"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-1">Education</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-neutral-900 dark:text-white text-lg">SAGE University Bhopal</h4>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">B.Tech in Computer Science and Engineering</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">2022 - Present</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-blue-600 dark:text-blue-400">CGPA: 8.6</span>
                  <span className="text-neutral-400">86%</span>
                </div>
                <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "86%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-3xl p-8 shadow-xl shadow-blue-900/5 dark:shadow-none"
            >
               <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-1">Key Achievements</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>2nd Place – Bhopal Inter-College Ideathon</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Integrated REST APIs improving data flow by 30%</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Built optimized full-stack applications with 30% fewer conflicts in Git workflows</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
