import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Copy, Upload } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';

// Sample QR code URL - in a real app, this would be generated
const qrCodeUrl = "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=600";

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const upiId = "trueship@ybl";
  
  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentProof(e.target.files[0]);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically upload the payment proof and verify payment
      // For demonstration purposes, we're just simulating a delay and navigating
      setTimeout(() => {
        // Store payment confirmation in localStorage for demo purposes
        localStorage.setItem('paymentComplete', 'true');
        navigate('/login');
      }, 1500);
    } catch (error) {
      console.error('Payment confirmation error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-lg mx-auto p-4">
      <Card className="p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Complete Your Payment</h2>
          <p className="text-gray-600">
            Scan the QR code below or use the UPI ID to make your payment via PhonePe
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white p-3 rounded-lg border-2 border-gray-200 shadow-sm">
            <img 
              src={qrCodeUrl} 
              alt="Payment QR Code" 
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-sm text-gray-600 text-center mb-2">Or pay using UPI ID</p>
          <div className="flex items-center justify-center">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 font-medium text-gray-800">
                {upiId}
              </div>
              <button 
                onClick={handleCopyUPI}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
                aria-label="Copy UPI ID"
              >
                {copied ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <Copy className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-t border-b border-gray-200 py-4">
            <p className="text-sm font-medium text-gray-700 mb-4">
              Payment Instructions:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
              <li>Open PhonePe app on your phone</li>
              <li>Scan the QR code or use the UPI ID shown above</li>
              <li>Complete the payment</li>
              <li>Upload the payment screenshot (optional)</li>
              <li>Click on "Confirm Payment" button below</li>
            </ol>
          </div>
          
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Upload Payment Proof (Optional)
            </p>
            <div className="flex items-center justify-center w-full">
              <label 
                htmlFor="payment-proof" 
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-3 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-medium">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG (MAX. 2MB)</p>
                </div>
                <input 
                  id="payment-proof" 
                  ref={fileInputRef}
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>
            </div>
            {paymentProof && (
              <p className="mt-2 text-sm text-gray-600">
                Selected file: {paymentProof.name}
              </p>
            )}
          </div>
          
          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Confirm Payment'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default PaymentPage;