import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in software development and business leadership.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in cloud architecture and modern web technologies.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative director with a passion for user-centered design.'
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer specializing in React and Node.js.'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for perfection in every line of code and every client interaction.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success journey.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex problems.'
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: 'Transparency',
      description: 'We maintain open communication and honest reporting throughout every project.'
    }
  ];

  const achievements = [
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '500+', label: 'Successful Projects' },
    { number: '50+', label: 'Industry Awards' },
    { number: '24/7', label: 'Support Availability' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              About <span className="text-blue-600">Dheen Tech Solutions</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of developers, designers, and innovators committed to 
              transforming businesses through cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Founded in 2019, Dheen Tech Solutions began as a small team of passionate developers 
                with a vision to help businesses harness the power of technology. What started 
                in a small office has grown into a thriving company serving clients worldwide.
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Today, we're proud to have delivered over 500 successful projects, from simple 
                web applications to complex enterprise solutions. Our commitment to quality, 
                innovation, and client satisfaction has made us a trusted partner for businesses 
                of all sizes.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Office environment"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <Target className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-600">
                To empower businesses with innovative software solutions that drive growth, 
                efficiency, and competitive advantage. We believe technology should be an 
                enabler, not a barrier to success.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <Eye className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-4 text-lg text-gray-600">
                To be the leading software development partner that businesses trust for 
                their most critical technology initiatives. We envision a future where 
                every business can leverage technology to reach its full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      
    </div>
  );
};

export default About;