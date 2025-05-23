import React from "react";
import ProjectCard from "../projectcard.jsx";

const Projects = () => {
  const projectss = [
    {
      id: 1,
      image: "/bcexam.png",
      title: "EduLedger – Blockchain-based Exam Platform",
      description:
        "EduLedger is a decentralized exam platform that leverages blockchain technology to provide secure, transparent, and voice-enabled online examinations.",
      techStack: ["Next.js", "Thirdweb", "Pinata", "Python", "Solidity"],
      imageAlt: "eduledger screenshot",
      githubUrl: "https://github.com/call-me-suman/BlockchainBasedExam",
      liveUrl: "https://blockchain-based-exam--sigma.vercel.app/",
    },
    {
      id: 2,
      image: "/bcnotary.png",
      title: "Blockchain-Based Notary System",
      description:
        "A decentralized notary platform for document verification and notarization using blockchain technology. The project is deployed on Vercel and tested on the Sepolia testnet.",
      techStack: ["Next.js", "Thirdweb", "Solidity", "ipfs", "Spline"],
      imageAlt: "blockchain based notary",
      githubUrl: "https://github.com/call-me-suman/Blockchain-based-Notary-",
      liveUrl: "https://blockchain-based-notary.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work in blockchain technology and decentralized
            applications
          </p>
        </div>

        {/* Projects Grid - Cards with equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          {projectss.map((project) => (
            <div key={project.id} className="w-full max-w-md h-full flex">
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                imageAlt={project.imageAlt}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </div>

        {/* Optional: Add a subtle animation or decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
