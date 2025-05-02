import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../common/Button';
import Card from '../common/Card';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (form.current) {
        await emailjs.sendForm(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          form.current,
          'YOUR_PUBLIC_KEY'
        );
        setSubmitted(true);
        if (form.current) {
          form.current.reset();
        }
      }
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-md w-full mx-auto p-6 bg-white/10 backdrop-blur-sm border border-white/20">
      {submitted ? (
        <div className="text-center">
          <div className="text-green-400 mb-4">
            Thank you for your message! We'll get back to you soon.
          </div>
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="domain" className="block text-sm font-medium text-white/90 mb-1">
              Preferred Domain
            </label>
            <select
              name="domain"
              required
              className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            >
              <option value="">Select a domain</option>
              <option value="Web Development">Web Development</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Data Analytics">Data Analytics using Python</option>
              <option value="AI Workflow">AI Workflow Automation</option>
              <option value="AI Tools">AI Tools</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50"
              placeholder="Your message or questions..."
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm">{error}</div>
          )}

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </Card>
  );
};

export default ContactForm;