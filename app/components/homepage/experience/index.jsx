"use client";
import { experienceData } from "@/utils/data/experience-data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollAnimations";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="relative z-50 my-12 lg:my-24">
      <FadeIn>
        <div className="flex justify-center mb-5 lg:mb-16">
          <div className="flex items-center relative">
            <motion.span 
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-cyan-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            ></motion.span>
            
            <span className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 text-transparent bg-clip-text text-3xl lg:text-4xl font-bold px-5 uppercase">
              Experience
            </span>
            
            <motion.span 
              className="w-24 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            ></motion.span>
          </div>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.2} className="max-w-7xl mx-auto px-4 relative">
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <StaggerItem key={exp.id}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Reduced blur effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-600 to-violet-500 rounded-lg opacity-60 group-hover:opacity-80 transition duration-300"></div>
                
                {/* Corner Accents - Hidden on mobile */}
                <div className="hidden md:block absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="hidden md:block absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card Content */}
                <div className="relative bg-gradient-to-br from-[#0d1224] to-[#0a0d37] rounded-lg p-6 lg:p-8 border border-[#1b2c68a0] overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
                    {/* Left Column - Icon & Duration */}
                    <div className="lg:col-span-3 flex lg:flex-col items-start lg:items-center gap-4">
                      <motion.div 
                        className="text-5xl"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        {exp.icon}
                      </motion.div>
                      
                      <div className="text-center">
                        <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-10 border border-blue-500/30 shadow-lg`}>
                          <p className="text-sm font-semibold text-blue-400">{exp.duration}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 capitalize px-2 py-1 rounded bg-white/5">{exp.type}</p>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-9">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-gray-300">
                          {exp.company} • <span className="text-gray-400">{exp.location}</span>
                        </p>
                      </div>

                      {/* Shortened Description */}
                      <p className="text-gray-400 mb-6 leading-relaxed line-clamp-2">
                        {exp.description}
                      </p>

                      {/* Responsibilities - Limited to 2 */}
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="mb-6 p-4 rounded-lg bg-pink-500/10 border border-pink-500/20">
                          <h4 className="text-sm font-semibold text-pink-500 mb-3 uppercase tracking-wide">
                            Key Work
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                              <li key={idx} className="flex items-start text-gray-300 text-sm">
                                <span className="text-blue-500 mr-2 mt-1">▹</span>
                                <span className="line-clamp-2">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-cyan-500 mb-3 uppercase tracking-wide">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <motion.span
                                key={idx}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-blue-400 hover:border-blue-500/60 transition-all duration-300"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}

export default Experience;
