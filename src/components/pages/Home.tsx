import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock, Zap, Shield, Headphones } from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' },
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Fast Development',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Secure Solutions',
      description: 'Enterprise-grade security for all our applications'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Expert Team',
      description: 'Skilled developers with years of industry experience'
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your technical needs'
    }
  ];

  const technologies = [
  'Node.js', 'Python', 'Java', 'Flutter', 'AWS','laravel','php'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-bungee"> {/* font-bungee சேர்க்கப்பட்டது */}
    <span className="text-blue-600">Dheen Tech Solution</span>
  </h1>
  <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto font-bungee"> {/* font-bungee சேர்க்கப்பட்டது */}
    We transform your ideas into powerful software solutions that drive growth,
    efficiency, and success. From web applications to mobile apps, we've got you covered.
  </p>
</div>

        </div>  
      </section> 

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="mt-2 text-sm lg:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Choose Dheen Tech Solutions?
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                With over 5 years of experience in software development, we've helped hundreds of 
                businesses transform their operations through innovative technology solutions.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Proven track record of successful project delivery',
                  'Cutting-edge technologies and best practices',
                  'Transparent communication throughout development',
                  'Post-launch support and maintenance'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What Makes Us Different
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We combine technical expertise with business understanding to deliver exceptional results.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Technologies We Master
            </h2>
            <p className="mt-4 text-lg text-white">
              We stay current with the latest technologies to deliver cutting-edge solutions.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 bg-orange-500 rounded-lg hover:bg-white-600 transition-colors duration-200"
              >
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Let's discuss your requirements and bring your vision to life.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
              

            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;