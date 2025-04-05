import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Our advanced AI algorithms analyze resumes and match them with job requirements for accurate candidate selection.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: 'Skill Matching',
      description: 'Automatically extract and match candidate skills with job requirements to find the perfect fit.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      title: 'Unbiased Selection',
      description: 'Reduce hiring bias with objective analysis based solely on qualifications and job fit.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      content: "AI Resume Screener transformed our hiring process. We're now able to process hundreds of applications efficiently and find the best candidates faster than ever.",
      author: "Sarah Johnson",
      position: "HR Director, TechCorp",
    },
    {
      content: "As a job seeker, I appreciate the quick response time and relevant job matches. This platform helped me find my dream role in just two weeks!",
      author: "Michael Chen",
      position: "Software Engineer",
    },
    {
      content: "The AI-powered skill matching is incredibly accurate. We've seen a 40% improvement in new hire performance since implementing this system.",
      author: "David Rodriguez",
      position: "Talent Acquisition Manager",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute transform -translate-y-1/2 left-1/2 -translate-x-1/2">
            <svg width="2000" height="1500" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#e879f9" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path d="M 0 100 Q 400 150 800 100 L 800 600 L 0 600 L 0 100" fill="url(#gradient)" />
              <path d="M 0 200 Q 400 250 800 200 L 800 600 L 0 600 L 0 200" fill="url(#gradient)" opacity="0.5" />
              <path d="M 0 300 Q 400 350 800 300 L 800 600 L 0 600 L 0 300" fill="url(#gradient)" opacity="0.3" />
            </svg>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8">
          <div className="max-w-3xl backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/20">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in">
              AI-Powered Resume Screening
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl">
              Find the perfect candidates faster with our intelligent resume screening technology. Match skills, experience, and qualifications automatically.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                Get Started
              </Link>
              <Link to="/jobs" className="bg-indigo-700/40 backdrop-blur-sm text-white hover:bg-indigo-700/60 border border-white/30 font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-gradient-to-b from-white via-indigo-50/50 to-violet-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent sm:text-5xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-secondary-600 mx-auto">
              Our AI-powered platform streamlines the hiring process for both employers and job seekers.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-indigo-50">
                  <div className="bg-gradient-to-br from-indigo-100 to-violet-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">{feature.title}</h3>
                  <p className="text-secondary-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* For Employers and Job Seekers */}
      <div className="py-24 bg-gradient-to-br from-indigo-50/50 to-fuchsia-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-indigo-500/5 to-violet-500/5 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100/50">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">For Employers</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Post job listings with detailed requirements</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-powered candidate matching and ranking</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Save time with automated resume screening</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced analytics and reporting dashboards</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/register" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800">
                  Get started
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-secondary-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">For Job Seekers</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Create a profile and upload your resume</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get matched with relevant job opportunities</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Apply to positions with one click</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Track application status in real-time</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/jobs" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800">
                  Find jobs
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-gradient-to-b from-white via-indigo-50/30 to-violet-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-50">
                <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3 h-8 w-8 text-primary-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="mt-4 text-secondary-600">{testimonial.content}</p>
                <div className="mt-6">
                  <p className="font-medium text-secondary-900">{testimonial.author}</p>
                  <p className="text-secondary-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-16 sm:px-16 sm:py-20 lg:flex lg:items-center lg:justify-between backdrop-blur-sm bg-white/5">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to transform your hiring process?
                </h2>
                <p className="mt-4 text-lg text-white/90">
                  Start using our AI-powered resume screening today and find the perfect candidates faster.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-xl shadow-lg">
                  <Link to="/register" className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
