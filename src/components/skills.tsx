"use client";

import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "MySQL"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 18 2-2v-3"></path>
          <path d="M10 18H8a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"></path>
          <path d="m20 14 2-2v-3"></path>
          <path d="m14 4 2-2v3"></path>
          <path d="M8 14H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"></path>
          <path d="m4 14 2-2V9"></path>
          <path d="M2 14h.01"></path>
          <path d="M8 4h.01"></path>
          <path d="M14 18h.01"></path>
          <path d="M20 8h.01"></path>
        </svg>
      ),
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z"></path>
          <path d="M3 10h18"></path>
          <path d="M12 3v18"></path>
        </svg>
      ),
    },
    {
      title: "Tools & Platforms",
      skills: ["AWS", "EC2", "Docker", "Git", "Tableau"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
    },
    {
      title: "AI & Machine Learning",
      skills: ["Hugging Face", "LangChain", "Vector Databases", "RAG", "Prompt Engineering"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M7 7h.01"></path>
          <path d="M11 7h.01"></path>
          <path d="M16 7h.01"></path>
          <path d="M7 12h.01"></path>
          <path d="M13 12h2"></path>
          <path d="M7 17h10"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16">My Skills</h2>
        
        <div 
          ref={ref} 
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 100}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay: number;
  inView: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon, delay, inView }) => {
  return (
    <div 
      className={`bg-card rounded-xl p-6 shadow-md transition-all duration-700 transform ${
        inView 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4 text-primary">
        <div className="mr-3">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;