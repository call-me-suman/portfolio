"use client";
import { achievementsData } from "@/utils/data/achievements-data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/animations/ScrollAnimations";
import { motion } from "framer-motion";

function Achievements() {
  return (
    <section id="achievements" className="relative z-50 my-12 lg:my-24">
      <FadeIn>
        <div className="flex justify-center mb-5 lg:mb-16">
          <div className="flex items-center relative">
            <motion.span 
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-pink-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            ></motion.span>
            
            <span className="relative bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 text-transparent bg-clip-text text-3xl lg:text-4xl font-bold px-5 uppercase">
              Achievements
            </span>
            
            <motion.span 
              className="w-24 h-[2px] bg-gradient-to-r from-pink-500 via-violet-500 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            ></motion.span>
          </div>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.2} className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((achievement, index) => (
            <StaggerItem key={achievement.id}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative group h-full"
              >
                {/* Reduced blur effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-violet-600 to-blue-500 rounded-lg opacity-60 group-hover:opacity-80 transition duration-300"></div>
                
                {/* Corner Accents - Hidden on mobile */}
                <div className="hidden md:block absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-pink-500 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="hidden md:block absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card Content */}
                <div className="relative bg-gradient-to-br from-[#0d1224] to-[#0a0d37] rounded-lg p-6 lg:p-8 h-full border border-[#1b2c68a0] overflow-hidden">
                  {/* Icon & Year */}
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <motion.div 
                      className="text-5xl lg:text-6xl"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <div className="flex flex-col items-end gap-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${achievement.color} text-white shadow-lg`}>
                        {achievement.year}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500 transition-all duration-300 relative z-10">
                    {achievement.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-gray-400 text-sm mb-4 relative z-10">
                    {achievement.organization}
                  </p>

                  {/* Shortened Problem Statement */}
                  {achievement.problemStatement && (
                    <div className="mb-3 p-3 rounded-lg bg-pink-500/10 border border-pink-500/20 relative z-10">
                      <span className="text-pink-500 font-semibold text-xs uppercase tracking-wide block mb-1">Problem</span>
                      <span className="text-gray-300 text-sm line-clamp-2">{achievement.problemStatement}</span>
                    </div>
                  )}

                  {/* Key Highlights - Reduced to 2 */}
                  {achievement.highlights && achievement.highlights.length > 0 && (
                    <div className="mb-4 relative z-10">
                      <ul className="space-y-1">
                        {achievement.highlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-gray-300 text-xs">
                            <span className="text-cyan-500 mr-2 mt-0.5">▹</span>
                            <span className="line-clamp-1">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700/50 relative z-10">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      {achievement.teamName && (
                        <>
                          <span className="text-blue-500 font-semibold">{achievement.teamName}</span>
                          <span>•</span>
                        </>
                      )}
                      {achievement.teamSize && (
                        <span>{achievement.teamSize} members</span>
                      )}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${achievement.color} text-white shadow-lg`}>
                      {achievement.award}
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

export default Achievements;
