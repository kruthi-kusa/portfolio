"use client";

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  features: string[];
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: "Health Tracker",
      description: "A full-stack health monitoring application for tracking nutrition, physical activity, and health metrics.",
      technologies: ["Next.js", "Tailwind CSS", "Python", "FastAPI", "MongoDB", "Docker"],
      image: "/placeholder-health-tracker.jpg",
      features: [
        "Comprehensive calorie tracking with food intake recording and nutritional analysis",
        "Activity tracking module to monitor physical metrics including step counts and calories burned",
        "MongoDB database schema for efficient health data storage and querying",
        "Intuitive data visualization components to display health trends and progress",
        "Containerized with Docker for consistent development and production environments",
        "CI/CD pipeline using GitHub Actions for automated testing and deployment",
        "Frontend deployed on Vercel, backend on AWS EC2, with MongoDB Atlas cloud database"
      ]
    },
    {
      title: "International Student Services Virtual Assistant",
      description: "A chatbot using Hugging Face, LangChain, and open-source LLMs to assist international students from application to graduation.",
      technologies: ["LangChain", "Hugging Face", "RAG", "Python", "NLP"],
      image: "/placeholder-chatbot.jpg",
      features: [
        "Implemented RAG architecture to retrieve accurate information from the university's international office website",
        "Enhanced response accuracy by 55% through custom knowledge base indexing",
        "Context-aware prompt engineering for improved response quality",
        "Provides resources and information needed throughout the international student journey"
      ]
    },
    {
      title: "Social Media Suicidal Detection",
      description: "A deep learning model to analyze social media posts for suicide risk indicators, achieving 73.34% accuracy.",
      technologies: ["CNN", "NLP", "Python", "Deep Learning", "Text Analysis"],
      image: "/placeholder-detection.jpg",
      features: [
        "Developed using CNN architecture and NLP techniques for social media content analysis",
        "Implemented text preprocessing pipeline including HTML tag removal, emoticon extraction, and POS tagging",
        "Created word embeddings using SuicideWatch and mental health datasets",
        "Built web interface for real-time text analysis with probability scores for suicidal ideation detection"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16">My Projects</h2>
        
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="mb-10 flex overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex space-x-4">
              {projects.map((project, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full whitespace-nowrap transition-colors ${
                    activeProject === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card hover:bg-card/80'
                  }`}
                  onClick={() => setActiveProject(index)}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 bg-card rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video relative bg-muted">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-primary/20 to-secondary/20 text-2xl font-medium">
                  {projects[activeProject].title}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{projects[activeProject].title}</h3>
                <p className="mb-4 text-foreground/80">{projects[activeProject].description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-card rounded-xl p-6 shadow-md h-full">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  Key Features
                </h4>
                
                <ul className="space-y-3">
                  {projects[activeProject].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-secondary mt-1 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;