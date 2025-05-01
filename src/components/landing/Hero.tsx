import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0118]">
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

      <div className="relative container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm">Transform your career with AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Build Your Future with
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              AI-Powered Skills
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
            Master the art of building MVPs using cutting-edge AI tools.
            Join our program to turn your ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/register">
              <Button 
                variant="primary" 
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover:scale-105" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Build MVPs with AI',
              description: 'Learn to use AI tools to rapidly prototype and build products',
              icon: '🚀'
            },
            {
              title: 'Code AI Applications',
              description: 'Develop practical coding skills for building AI applications',
              icon: '💻'
            },
            {
              title: 'Deploy Products',
              description: 'Learn how to launch and maintain your applications in production',
              icon: '🌐'
            },
            {
              title: 'Earn Certificate',
              description: 'Receive a recognized certificate upon successful completion',
              icon: '🎓'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;