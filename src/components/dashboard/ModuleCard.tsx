import React from 'react';
import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { Module } from '../../types';
import Card from '../common/Card';

interface ModuleCardProps {
  module: Module;
  onClick: (moduleId: string) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick }) => {
  const statusIcons = {
    'locked': <Lock className="h-5 w-5 text-gray-400" />,
    'in-progress': <PlayCircle className="h-5 w-5 text-blue-500" />,
    'completed': <CheckCircle className="h-5 w-5 text-green-500" />
  };
  
  const statusBadgeColors = {
    'locked': 'bg-gray-100 text-gray-600',
    'in-progress': 'bg-blue-100 text-blue-800',
    'completed': 'bg-green-100 text-green-800'
  };
  
  const statusLabels = {
    'locked': 'Locked',
    'in-progress': 'In Progress',
    'completed': 'Completed'
  };
  
  // Calculate progress percentage for the module
  const completedLessons = module.lessons.filter(lesson => lesson.completed).length;
  const totalLessons = module.lessons.length;
  const progressPercentage = totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100);
  
  return (
    <Card 
      className={`h-full transition-all duration-300 cursor-pointer hover:shadow-lg ${
        module.status === 'locked' ? 'opacity-70 pointer-events-none' : 'hover:translate-y-[-4px]'
      }`}
      onClick={() => module.status !== 'locked' && onClick(module.id)}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadgeColors[module.status]}`}>
            {statusIcons[module.status]}
            <span className="ml-1">{statusLabels[module.status]}</span>
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{module.description}</p>
        
        {module.status !== 'locked' && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-700">{progressPercentage}% Complete</span>
              <span className="text-xs font-medium text-gray-500">{completedLessons}/{totalLessons} Lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ModuleCard;