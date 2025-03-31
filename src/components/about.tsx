"use client";

import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={ref} 
          className={`transition-all duration-700 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4">
                I'm a <span className="text-primary font-semibold">Computer Science</span> graduate student at California State University, Fresno, 
                with a background in Computer Engineering from Stanley College of Engineering and Technology for Women.
              </p>
              
              <p className="text-lg mb-4">
                My journey in tech has led me to develop expertise in full-stack web development, health tech, 
                and AI applications. I'm passionate about creating solutions that combine technical excellence 
                with meaningful impact.
              </p>
              
              <p className="text-lg mb-6">
                Currently focused on developing AI-powered applications that help solve real-world problems,
                particularly in healthcare monitoring and mental health domains.
              </p>
            </div>
            
            <div className="space-y-6">
              <EducationCard 
                institution="California State University, Fresno"
                degree="MS in Computer Science"
                period="Aug 2023 – May 2025"
              />
              
              <EducationCard 
                institution="Stanley College of Engineering and Technology for Women"
                degree="BE in Computer Engineering"
                period="Aug 2019 – May 2023"
              />
              
              <div className="p-6 bg-background rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">Internship Experience</h3>
                <p className="text-primary font-medium">Exposys Data Labs</p>
                <p className="text-foreground/80 mb-2">Web Developer Intern</p>
                <p>
                  Developed frontend web components using HTML, CSS, and JavaScript, 
                  focusing on implementing visually engaging parallax effects for website interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, period }) => {
  return (
    <div className="p-6 bg-background rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">{institution}</h3>
      <p className="text-primary font-medium">{degree}</p>
      <p className="text-foreground/80">{period}</p>
    </div>
  );
};

export default About;