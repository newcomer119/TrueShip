import React, { useState } from 'react';
import { Upload, Check, X } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

const ProjectSubmission: React.FC = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFiles(prev => [...prev, ...fileArray]);
    }
  };
  
  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Here you would typically upload the files and project details
    // For demonstration purposes, we're just simulating a delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Reset form after submission
      setProjectTitle('');
      setProjectDesc('');
      setProjectUrl('');
      setFiles([]);
    }, 2000);
  };
  
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">Submit Your Project</h3>
      
      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
          <div className="flex">
            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
            <div>
              <h4 className="text-green-800 font-medium mb-1">Project submitted successfully!</h4>
              <p className="text-green-700 text-sm">
                Your project has been submitted for review. You'll receive feedback within 48 hours.
              </p>
              <Button 
                variant="outline"
                size="sm"
                onClick={() => setSubmitted(false)}
                className="mt-3"
              >
                Submit Another Project
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="project-title" className="block text-sm font-medium text-gray-700 mb-1">
              Project Title *
            </label>
            <input
              type="text"
              id="project-title"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., AI-Powered Task Manager"
              required
            />
          </div>
          
          <div>
            <label htmlFor="project-desc" className="block text-sm font-medium text-gray-700 mb-1">
              Project Description *
            </label>
            <textarea
              id="project-desc"
              value={projectDesc}
              onChange={(e) => setProjectDesc(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your project, the problem it solves, and technologies used..."
              required
            />
          </div>
          
          <div>
            <label htmlFor="project-url" className="block text-sm font-medium text-gray-700 mb-1">
              Project URL (if deployed)
            </label>
            <input
              type="url"
              id="project-url"
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://your-project-url.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Screenshots or Documents
            </label>
            
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, PDF up to 10MB each
                </p>
              </div>
            </div>
            
            {files.length > 0 && (
              <ul className="mt-3 divide-y divide-gray-200 border border-gray-200 rounded-md">
                {files.map((file, index) => (
                  <li key={index} className="flex items-center justify-between py-2 px-3 text-sm">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                      </svg>
                      <span className="truncate">{file.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <Button 
            type="submit" 
            variant="primary" 
            disabled={submitting || !projectTitle || !projectDesc}
            className="mt-6"
          >
            {submitting ? 'Submitting...' : 'Submit Project for Review'}
          </Button>
        </form>
      )}
    </Card>
  );
};

export default ProjectSubmission;