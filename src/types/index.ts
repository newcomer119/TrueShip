export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  paymentComplete: boolean;
  registrationDate: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  status: 'locked' | 'in-progress' | 'completed';
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}