import React, { useState } from 'react';
import Button from '../components/Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="text-green-600 text-5xl mb-4"> Success!</div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Thank you for contacting us!
            </h3>
            <p className="text-green-700 mb-6">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button onClick={resetForm} variant="primary">
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white via-white to-kamora-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-kamora-dark mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-kamora-dark mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-kamora-dark mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-kamora-orange focus:border-kamora-orange transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 font-medium">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-kamora-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-kamora-orange focus:border-kamora-orange transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 font-medium">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-kamora-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-kamora-orange focus:border-kamora-orange transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 font-medium">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-kamora-orange to-kamora-red text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-kamora-cream to-orange-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-kamora-dark mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-kamora-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Email</p>
                    <p className="text-gray-900 font-medium">goldensunfield@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-kamora-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Phone</p>
                    <p className="text-gray-900 font-medium">+63 966 544 3985</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-kamora-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Address</p>
                    <p className="text-gray-900 font-medium">4031 Gen T. De Leon, Valenzuela City, Philippines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-kamora-orange/10 to-kamora-red/10 rounded-2xl p-8 shadow-lg border-2 border-kamora-orange/20">
              <h3 className="text-2xl font-bold text-kamora-dark mb-4">Business Hours</h3>
              <div className="space-y-3 text-gray-700 font-medium">
                <p className="flex justify-between">
                  <span>Monday to Saturday</span>
                  <span className="font-bold text-kamora-orange">8:00 AM - 8:00 PM</span>
                </p>
              </div>
            </div>

            {/* Location Map Card - Portrait */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-kamora-orange h-80">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8889888888887!2d121.27478!3d14.757083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3398d6a5a5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2s4031%20Gen%20T.%20De%20Leon%2C%20Valenzuela%20City%2C%20Philippines!5e0!3m2!1sen!2sph!4v1234567890"
                title="Kamora Restaurant Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
