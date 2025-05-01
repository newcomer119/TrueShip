import React from 'react';
import { Project } from '../types';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/landing/Hero';
import ProjectsShowcase from '../components/landing/ProjectsShowcase';
import ContactForm from '../components/contact/ContactForm';

// Sample project data
const projectsData: Project[] = [
  {
    id: '1',
    title: 'AI Writing Assistant',
    description: 'A web app that helps users improve their writing using AI-powered suggestions and edits.',
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['AI', 'Web App', 'Bolt.new']
  },
  {
    id: '2',
    title: 'Smart Task Scheduler',
    description: 'An automated scheduler that optimizes daily tasks using machine learning algorithms.',
    imageUrl: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Machine Learning', 'Productivity', 'React']
  },
  {
    id: '3',
    title: 'Voice-Controlled Dashboard',
    description: 'A dashboard that can be controlled using voice commands for hands-free operation.',
    imageUrl: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Voice AI', 'Dashboard', 'Lovable']
  }
];

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative bg-[#0A0118] flex-grow">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-xy"></div>
        
        {/* Floating particles */}
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
          
          {/* Testimonials Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Interns Say</h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Hear from our past interns about their experience learning and building with our program
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    name: "Rahul Singh",
                    role: "Software Engineer",
                    quote: "This internship gave me practical skills in AI product development that I couldn't get elsewhere. The hands-on approach was incredibly valuable."
                  },
                  {
                    name: "Ananya Patel",
                    role: "Product Designer",
                    quote: "Learning how to use AI tools like Bolt.new transformed the way I approach product design. I can now prototype and iterate much faster."
                  },
                  {
                    name: "Vikram Kumar",
                    role: "CS Student",
                    quote: "The internship provided the perfect blend of theory and practice. I built my first fully functional AI product and included it in my portfolio."
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                        <span className="text-blue-400 font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{testimonial.name}</h4>
                        <p className="text-white/60 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-white/80">{testimonial.quote}</p>
                  </div>
                ))}
              </div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build the Future?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join our AI product development internship and transform your skills. 
                Limited spots available for the upcoming cohort.
              </p>
              <a 
                href="/register" 
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