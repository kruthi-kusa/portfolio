"use client";

import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16">Experience</h2>
        
        <div 
          ref={ref} 
          className={`transition-all duration-700 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Timeline entries */}
            <div className="space-y-12">
              <TimelineEntry
                title="Exposys Data Labs"
                role="Web Developer Intern"
                period="2023"
                isLeft={true}
                delay={0}
                inView={inView}
              >
                <p>
                  Interned as a web developer, developing parallax effects for websites
                  using HTML, CSS, and JavaScript to enhance visual appeal and user experience.
                </p>
              </TimelineEntry>
              
              <TimelineEntry
                title="Health Tracker Project"
                role="Full-Stack Developer"
                period="2023 - 2024"
                isLeft={false}
                delay={200}
                inView={inView}
              >
                <ul className="space-y-2 list-disc list-inside">
                  <li>Developed a full-stack health monitoring application</li>
                  <li>Implemented comprehensive calorie tracking system</li>
                  <li>Created MongoDB schema for efficient data storage</li>
                  <li>Built intuitive data visualization components</li>
                  <li>Implemented CI/CD pipeline using GitHub Actions</li>
                </ul>
              </TimelineEntry>
              
              <TimelineEntry
                title="International Student Services Virtual Assistant"
                role="AI Developer"
                period="2024"
                isLeft={true}
                delay={400}
                inView={inView}
              >
                <ul className="space-y-2 list-disc list-inside">
                  <li>Developed a chatbot using Hugging Face, LangChain, and open-source LLMs</li>
                  <li>Implemented RAG architecture for accurate information retrieval</li>
                  <li>Enhanced response accuracy by 55% through custom knowledge base indexing</li>
                  <li>Applied context-aware prompt engineering techniques</li>
                </ul>
              </TimelineEntry>
              
              <TimelineEntry
                title="Social Media Suicidal Detection Project"
                role="ML Engineer"
                period="2023"
                isLeft={false}
                delay={600}
                inView={inView}
              >
                <ul className="space-y-2 list-disc list-inside">
                  <li>Developed a CNN-based deep learning model achieving 73.34% accuracy</li>
                  <li>Implemented text preprocessing pipeline for social media content</li>
                  <li>Created word embeddings using specialized mental health datasets</li>
                  <li>Built web interface for real-time analysis with probability scoring</li>
                </ul>
              </TimelineEntry>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineEntryProps {
  title: string;
  role: string;
  period: string;
  isLeft: boolean;
  delay: number;
  inView: boolean;
  children: React.ReactNode;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({ 
  title, 
  role, 
  period, 
  isLeft, 
  delay,
  inView,
  children 
}) => {
  return (
    <div className={`relative grid md:grid-cols-2 gap-10 md:gap-0 items-center`}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary z-10"></div>
      
      {/* Content */}
      <div 
        className={`
          md:col-span-1 
          ${isLeft ? 'md:text-right md:pr-10' : 'md:pl-10 md:col-start-2'} 
          transition-all duration-700 transform
          ${inView 
            ? 'translate-y-0 opacity-100' 
            : `${isLeft ? '-translate-x-10' : 'translate-x-10'} opacity-0`
          }
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div 
          className={`
            bg-card rounded-xl p-6 shadow-md 
            transform transition-transform hover:-translate-y-1 duration-300
          `}
        >
          <span className="text-sm font-mono text-foreground/60 block mb-1">{period}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="text-primary font-medium mb-3">{role}</div>
          <div className="text-foreground/80">{children}</div>
        </div>
      </div>
      
      {/* Empty column for layout */}
      <div className={`hidden md:block md:col-span-1 ${!isLeft && 'md:col-start-1'}`}></div>
    </div>
  );
};

export default Experience;