"use client"
import { motion } from "framer-motion"
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, 
  SiJavascript, SiTypescript, SiTailwindcss, SiGit 
} from "react-icons/si"
import { ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const innerOrbit = [
    { Icon: SiReact, name: "React", mobileColor: "text-blue-500", color: "#61DAFB" },
    { Icon: SiNextdotjs, name: "Next.js", mobileColor: "text-neutral-900 dark:text-white", color: "currentColor" },
    { Icon: SiTypescript, name: "TypeScript", mobileColor: "text-blue-600", color: "#3178C6" },
    { Icon: SiTailwindcss, name: "Tailwind", mobileColor: "text-cyan-400", color: "#06B6D4" },
  ]

  const outerOrbit = [
    { Icon: SiNodedotjs, name: "Node.js", mobileColor: "text-green-500", color: "#339933" },
    { Icon: SiMongodb, name: "MongoDB", mobileColor: "text-green-600", color: "#47A248" },
    { Icon: SiJavascript, name: "JavaScript", mobileColor: "text-yellow-400", color: "#F7DF1E" },
    { Icon: SiGit, name: "Git", mobileColor: "text-orange-500", color: "#F05032" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
        >
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">Available for freelance opportunities</span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              Hi, I'm <span className="text-blue-600 dark:text-blue-500 border-b-4 border-blue-600 dark:border-blue-500 whitespace-nowrap">Suman Kumar</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              <span className="text-neutral-500 dark:text-neutral-400">Full Stack</span> <span className="text-neutral-900 dark:text-white">Software Engineer</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Professional Full Stack Developer specializing in <span className="font-semibold text-neutral-900 dark:text-white">React.js, Next.js, Node.js,</span> and <span className="font-semibold text-neutral-900 dark:text-white">MongoDB</span>. I build responsive, scalable web applications that solve real problems with <span className="font-semibold text-blue-600 dark:text-blue-400">clean code</span> and modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3.5 bg-white dark:bg-transparent border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white font-semibold rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              Download CV
              <Download className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-4 justify-center lg:justify-start pt-6">
            <a 
              href="https://www.linkedin.com/in/suman-kumar-97310a25b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 transition-all hover:shadow-md"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/suman987654432" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 transition-all hover:shadow-md"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:sumanqaj9876@gmail.com"
              className="p-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-red-500 hover:border-red-200 transition-all hover:shadow-md"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Visuals / Icons - Orbital Animation */}
        <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[600px] w-full mt-8 lg:mt-0 mobile-scale">
     
           {/* Center Tech Circle */}
           <motion.div 
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.5 }}
             className="relative z-20 flex flex-col items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white dark:bg-neutral-900 border-4 border-blue-100 dark:border-neutral-800 shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] dark:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
           >
             <span className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">
               Tech.
             </span>
             <div className="absolute inset-0 rounded-full border border-blue-500/10 dark:border-blue-500/10 animate-pulse" />
           </motion.div>

           <motion.div
             animate={{ rotate: 360 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-neutral-300 dark:border-neutral-700/50"
           >
             {innerOrbit.map((item, i) => (
                <div
                  key={item.name}
                  className="absolute top-0 left-1/2 -ml-[25px] -mt-[25px]"
                  style={{ 
                    transformOrigin: "50% 185px", // Radius + half item height (160 + 25)
                    transform: `rotate(${i * 90}deg)` 
                  }}
                >
                   {/* Counter-rotate the content so it stays upright-ish or just rotate with ring as requested */}
                   <motion.div 
                      className="p-3 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800 flex items-center gap-2 transform -rotate-90"
                   >
                     <item.Icon className={`w-6 h-6 ${item.mobileColor}`} style={{ color: item.color }} />
                     <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap hidden sm:block">
                       {item.name}
                     </span>
                   </motion.div>
                </div>
             ))}
           </motion.div>

           {/* Outer Orbit Ring */}
           <motion.div
             animate={{ rotate: -360 }}
             transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
             className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-neutral-300 dark:border-neutral-700/30 opacity-60 sm:opacity-100"
           >
              {outerOrbit.map((item, i) => (
                <div
                  key={item.name}
                  className="absolute top-0 left-1/2 -ml-[30px] -mt-[25px]"
                  style={{ 
                    transformOrigin: "50% 285px", // Radius + half item height (260 + 25)
                    transform: `rotate(${i * 90 + 45}deg)` 
                  }}
                >
                   <motion.div 
                      className="p-3 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800 flex items-center gap-2 transform -rotate-90"
                   >
                     <item.Icon className={`w-6 h-6 ${item.mobileColor}`} style={{ color: item.color }} />
                     <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap hidden sm:block">
                       {item.name}
                     </span>
                   </motion.div>
                </div>
             ))}
           </motion.div>

           {/* Gradient Blur Background Behind Orbits */}
           <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-cyan-500/5 dark:to-blue-500/5 blur-3xl rounded-full -z-10" />
        </div>
      </div>
    </section>
  )
}
