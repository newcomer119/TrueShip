import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import PaymentComponent from '../components/payment/PaymentPage';

const PaymentPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Registration</h1>
            <p className="text-gray-600">
              Make a payment to secure your spot in our AI product development internship.
            </p>
          </div>
          
          <PaymentComponent />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentPage;