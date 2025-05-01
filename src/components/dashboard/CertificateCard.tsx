import React from 'react';
import { Download, Award } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

interface CertificateCardProps {
  isEligible: boolean;
  userName: string;
  onDownload: () => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ 
  isEligible, 
  userName,
  onDownload 
}) => {
  return (
    <Card elevation="high" className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="flex flex-col items-center text-center">
        <Award className="h-12 w-12 text-blue-600 mb-4" />
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Internship Certificate
        </h3>
        
        {isEligible ? (
          <>
            <p className="text-gray-600 mb-6">
              Congratulations! You've completed all requirements for your 
              AI Product Development internship certificate.
            </p>
            
            <div className="w-full max-w-xs border border-blue-200 rounded-lg bg-white p-4 mb-6">
              <div className="border-b border-gray-200 pb-2 mb-3">
                <p className="text-sm font-medium text-gray-500">Certificate for:</p>
                <p className="font-semibold text-gray-800">{userName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status:</p>
                <p className="text-green-600 font-medium">Ready to download</p>
              </div>
            </div>
            
            <Button 
              variant="primary" 
              onClick={onDownload}
              className="flex items-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Certificate
            </Button>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Complete all the modules and submit your final project to 
              receive your internship certificate.
            </p>
            
            <div className="w-full max-w-xs border border-blue-200 rounded-lg bg-white p-4 mb-6">
              <div className="border-b border-gray-200 pb-2 mb-3">
                <p className="text-sm font-medium text-gray-500">Certificate for:</p>
                <p className="font-semibold text-gray-800">{userName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status:</p>
                <p className="text-orange-600 font-medium">Not yet eligible</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              disabled
              className="flex items-center cursor-not-allowed opacity-60"
            >
              <Download className="h-4 w-4 mr-2" />
              Certificate Unavailable
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};

export default CertificateCard;