import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome Back</h1>
            <p className="text-gray-600">
              Log in to access your internship dashboard and continue your learning journey.
            </p>
          </div>
          
          <LoginForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;