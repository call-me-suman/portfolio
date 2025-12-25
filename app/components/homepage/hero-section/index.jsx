// @flow strict
"use client";
import portfolioConfig from "@/portfolio.config";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import ParticleSystem from "@/app/components/animations/ParticleSystem";

function HeroSection() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const intervalRef1 = useRef(null);
  const intervalRef2 = useRef(null);

  const createMouseOverHandler = (originalText, intervalRef) => {
    return (event) => {
      const target = event.target;
      let iteration = 0;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        target.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= originalText.length) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }

        iteration += 1 / 3;
      }, 30);
    };
  };

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 min-h-screen">
      {/* Particle Background - Hidden on mobile for performance */}
      <div className="hidden md:block">
        <ParticleSystem 
          particleCount={portfolioConfig.theme.particles.count} 
          colors={portfolioConfig.theme.particles.colors}
          formPattern={portfolioConfig.theme.particles.enableHoverEffect}
        />
      </div>

      {/* Background SVG */}
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 opacity-50"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-10 relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Left Column - Text Content */}
        <motion.div 
          className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated Heading with Original Hover Effect */}
          <h1 className="text-4xl font-bold leading-[3.5rem] text-white md:font-extrabold lg:text-[3.6rem] lg:leading-[4.5rem]">
            {portfolioConfig.personal.heroTitle} <br />
            <span
              className="text-pink-500 cursor-pointer"
              onMouseEnter={createMouseOverHandler(
                portfolioConfig.personal.heroName,
                intervalRef1
              )}
            >
              {portfolioConfig.personal.heroName}
            </span>
            <br />
            {portfolioConfig.personal.heroSubtitle}{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onMouseEnter={createMouseOverHandler(
                portfolioConfig.personal.heroRole,
                intervalRef2
              )}
            >
              {portfolioConfig.personal.heroRole}
            </span>
          </h1>

          {/* Shortened Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl"
          >
            Smart India Hackathon 2025 Winner. Building secure, scalable applications with AI/ML, blockchain, and cybersecurity.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className="my-8 flex items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link
              href={portfolioConfig.personal.github}
              target="_blank"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative text-pink-500 hover:text-white transition-all duration-300 transform group-hover:scale-110">
                <BsGithub size={32} />
              </div>
            </Link>
            
            <Link
              href={portfolioConfig.personal.linkedIn}
              target="_blank"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative text-blue-500 hover:text-white transition-all duration-300 transform group-hover:scale-110">
                <BsLinkedin size={32} />
              </div>
            </Link>
            
            <Link
              href={portfolioConfig.personal.leetcode}
              target="_blank"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative text-yellow-500 hover:text-white transition-all duration-300 transform group-hover:scale-110">
                <SiLeetcode size={32} />
              </div>
            </Link>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-violet-600 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <button className="relative px-8 py-4 bg-[#0d1224] rounded-full border-none text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2 hover:gap-3 transition-all duration-300">
                <span>Contact Me</span>
                <RiContactsFill size={18} />
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column - Code Card */}
        <motion.div 
          className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Card Header */}
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>

          {/* Code Content */}
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{portfolioConfig.personal.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                {portfolioConfig.skills.frontend.slice(0, 3).map((skill, idx) => (
                  <span key={idx}>
                    <span className="text-amber-300">{skill}</span>
                    <span className="text-gray-400">{"', '"}</span>
                  </span>
                ))}
                {portfolioConfig.skills.backend.slice(0, 2).map((skill, idx) => (
                  <span key={idx}>
                    <span className="text-amber-300">{skill}</span>
                    <span className="text-gray-400">{"', '"}</span>
                  </span>
                ))}
                {portfolioConfig.skills.languages.slice(0, 2).map((skill, idx) => (
                  <span key={idx}>
                    <span className="text-amber-300">{skill}</span>
                    <span className="text-gray-400">{idx === 1 ? "']," : "', '"}</span>
                  </span>
                ))}
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  hardWorker:
                </span>
                <span className="text-orange-400">{portfolioConfig.personal.codeProperties.hardWorker.toString()}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  quickLearner:
                </span>
                <span className="text-orange-400">{portfolioConfig.personal.codeProperties.quickLearner.toString()}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  problemSolver:
                </span>
                <span className="text-orange-400">{portfolioConfig.personal.codeProperties.problemSolver.toString()}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                  hireable:
                </span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                  return
                </span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
