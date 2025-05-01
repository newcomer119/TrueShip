import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Module } from '../types';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import ModuleCard from '../components/dashboard/ModuleCard';
import ProjectSubmission from '../components/dashboard/ProjectSubmission';
import CertificateCard from '../components/dashboard/CertificateCard';
import Button from '../components/common/Button';
import { LogOut } from 'lucide-react';

// Sample module data
const modulesData: Module[] = [
  {
    id: 'module1',
    title: 'Introduction to AI Tools',
    description: 'Learn the basics of AI-powered development tools and their capabilities.',
    status: 'in-progress',
    lessons: [
      { id: 'lesson1-1', title: 'Overview of AI in Product Development', completed: true },
      { id: 'lesson1-2', title: 'Understanding AI Capabilities and Limitations', completed: true },
      { id: 'lesson1-3', title: 'Ethical Considerations in AI', completed: false },
    ]
  },
  {
    id: 'module2',
    title: 'Building with Bolt.new',
    description: 'Master the Bolt.new platform for rapid AI application development.',
    status: 'in-progress',
    lessons: [
      { id: 'lesson2-1', title: 'Getting Started with Bolt.new', completed: true },
      { id: 'lesson2-2', title: 'Creating Your First AI Application', completed: false },
      { id: 'lesson2-3', title: 'Advanced Bolt.new Techniques', completed: false },
    ]
  },
  {
    id: 'module3',
    title: 'Designing with Lovable',
    description: 'Use Lovable to design beautiful, user-friendly interfaces for your AI applications.',
    status: 'locked',
    lessons: [
      { id: 'lesson3-1', title: 'Introduction to Lovable', completed: false },
      { id: 'lesson3-2', title: 'Creating UI Components', completed: false },
      { id: 'lesson3-3', title: 'Building Complete Interfaces', completed: false },
    ]
  },
  {
    id: 'module4',
    title: 'MVP Development Process',
    description: 'Learn how to take your idea from concept to working MVP using AI tools.',
    status: 'locked',
    lessons: [
      { id: 'lesson4-1', title: 'Defining Your MVP Requirements', completed: false },
      { id: 'lesson4-2', title: 'Rapid Development Techniques', completed: false },
      { id: 'lesson4-3', title: 'Testing and Iteration', completed: false },
    ]
  },
];

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [modules] = useState<Module[]>(modulesData);
  // In a real app, you would check if the user has completed all modules
  const isEligibleForCertificate = false;
  
  // In a real app, you would get this from your auth state
  const userName = "John Doe";
  
  const handleModuleClick = (moduleId: string) => {
    console.log(`Module ${moduleId} clicked`);
    // In a real app, you would navigate to the module content
  };
  
  const handleDownloadCertificate = () => {
    console.log('Downloading certificate');
    // In a real app, you would generate and download the certificate
  };
  
  const handleLogout = () => {
    // In a real app, you would clear auth state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userName={userName} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleLogout}
            className="flex items-center"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Your Learning Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                onClick={handleModuleClick} 
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProjectSubmission />
          </div>
          
          <div>
            <CertificateCard 
              isEligible={isEligibleForCertificate}
              userName={userName}
              onDownload={handleDownloadCertificate}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;