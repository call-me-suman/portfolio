import portfolioConfig from "@/portfolio.config";

// Flatten all skills into a single array for the skills section
export const skillsData = [
  ...portfolioConfig.skills.languages,
  ...portfolioConfig.skills.frontend,
  ...portfolioConfig.skills.backend,
  ...portfolioConfig.skills.blockchain,
  ...portfolioConfig.skills.database,
  ...portfolioConfig.skills.cybersecurity,
  ...portfolioConfig.skills.aiml,
  ...portfolioConfig.skills.tools,
];
