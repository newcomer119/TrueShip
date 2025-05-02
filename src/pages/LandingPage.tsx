import React from 'react';
import { Project } from '../types';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/landing/Hero';
import ProjectsShowcase from '../components/landing/ProjectsShowcase';
import ContactForm from '../components/contact/ContactForm';
import { Calendar, Clock, Medal, Users, BookOpen, Rocket } from 'lucide-react';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Bolt.New Clone',
    description: 'A full-stack SAAS application built with Next.js, React, TailwindCSS & AI, integrated with Convex.',
    imageUrl: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'React', 'TailwindCSS', 'AI', 'Convex'],
    projectUrl: 'https://bolt-clone-2.vercel.app/'
  },
  {
    id: '2',
    title: 'AI Recruiter Voice Agent',
    description: 'An innovative voice-based recruitment platform using Next.js, React, Vapi, and Supabase.',
    imageUrl: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'React', 'Vapi', 'Supabase'],
    projectUrl: 'https://airecruiter-app.vercel.app'
  },
  {
    id: '3',
    title: 'AI Logo Maker',
    description: 'Create unique logos using AI with this tool built using Next.js, React, and Hugging Face.',
    imageUrl: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'React', 'AI', 'Hugging Face'],
    projectUrl: 'https://free-ai-logo-maker.vercel.app'
  }
];

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative bg-[#0A0118] flex-grow">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-xy"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="particle"
                style={{
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`,
                  '--duration': `${3 + Math.random() * 4}s`,
                  '--delay': `${Math.random() * 2}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        <Navbar />
        
        <main className="relative">
          <Hero />
          
          {/* Program Details Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Program Details</h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Everything you need to know about our summer internship program
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Duration</h3>
                  </div>
                  <p className="text-white/80">2 months of intensive learning and hands-on experience</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Flexibility</h3>
                  </div>
                  <p className="text-white/80">Fully remote and flexible work hours</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="flex items-center mb-4">
                    <Medal className="h-6 w-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Certificate</h3>
                  </div>
                  <p className="text-white/80">Earn a recognized certificate upon completion</p>
                </div>
              </div>
            </div>
          </section>

          {/* Domains Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Available Domains</h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Choose from our diverse range of technical domains
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Web Development',
                    description: 'Learn modern web development using React, Next.js, and other cutting-edge technologies',
                    icon: <BookOpen className="h-8 w-8 text-blue-400" />
                  },
                  {
                    title: 'Machine Learning',
                    description: 'Dive into ML algorithms, neural networks, and practical applications',
                    icon: <Rocket className="h-8 w-8 text-purple-400" />
                  },
                  {
                    title: 'Data Analytics',
                    description: 'Master data analysis using Python and popular data science libraries',
                    icon: <Users className="h-8 w-8 text-pink-400" />
                  }
                ].map((domain, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <div className="flex items-center mb-4">
                      {domain.icon}
                      <h3 className="text-xl font-semibold text-white ml-3">{domain.title}</h3>
                    </div>
                    <p className="text-white/80">{domain.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Projects Built With Our Tools</h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Explore the innovative projects our interns have created using AI tools and coding skills
                  learned during the program.
                </p>
              </div>
              <ProjectsShowcase projects={projectsData} />
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in Touch</h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Have questions about our internship program? We're here to help. Reach out to us and we'll get back to you soon.
                </p>
              </div>
              <ContactForm />
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join our summer internship program and transform your career with hands-on experience in AI and modern development tools.
              </p>
              <a 
                href="mailto:info@trueshipcareers.in"
                className="inline-block bg-white/10 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Apply Now
              </a>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default LandingPage;