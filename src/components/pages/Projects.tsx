import React from 'react';
import { ExternalLink , Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Digital Printing Management System',
      description: 'Complete printing business solution with order management, design templates, pricing calculator, customer portal, and automated billing system.',
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800', 
      technologies: [],
      category: 'Business Software'

      
    },
    {
      id: 2,
      title: 'Bakery Management & POS System',
      description: 'Comprehensive bakery solution with inventory tracking, recipe management, sales analytics, customer orders, and integrated point-of-sale system.',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: [],
      category: 'Retail Software'
    },
    {
      id: 3,
      title: 'Electrical Services Management',
      description: 'Complete electrical contractor solution with job scheduling, technician tracking, inventory management, billing, and customer service portal.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'Service Management',
      client: 'PowerTech Electricals',
      testimonial: 'Excellent system for managing our electrical services. Job tracking is now seamless.',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Catering Business Management',
      description: 'Comprehensive catering solution with event planning, menu management, staff scheduling, cost calculation, and customer booking system.',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
      category: 'Event Management',
      client: 'Royal Caterers',
      testimonial: 'Perfect for managing our catering events. Booking and menu planning made simple.',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Hospital Management System',
      description: 'Complete healthcare solution with patient records, appointment scheduling, doctor management, billing, pharmacy integration, and report generation.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Java'],
      category: 'Healthcare Software',
      client: 'City General Hospital',
      testimonial: 'Transformed our hospital operations. Patient management is now efficient and secure.',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Laboratory Information System',
      description: 'Advanced lab management with test scheduling, sample tracking, result management, report generation, and integration with hospital systems.',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      category: 'Healthcare Software',
      client: 'MediLab Diagnostics',
      testimonial: 'Excellent lab management system. Test processing and reporting is now automated.',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 7,
      title: 'E-Sevai Digital Services Portal',
      description: 'Government e-services platform with citizen registration, document verification, online applications, payment gateway, and status tracking system.',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
      category: 'Government Software',
      client: 'District Collectorate',
      testimonial: 'Digitized our citizen services completely. Online applications increased by 80%.',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'Business Software', 'Retail Software', 'Service Management', 'Event Management', 'Healthcare Software', 'Government Software'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Our <span className="text-blue-600">Projects</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects and see how we've helped 
              businesses transform their operations through innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  
                  
                  
                    
                   
                   
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Development Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We follow a proven methodology to ensure project success
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your requirements and business goals'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating detailed project roadmap and technical specifications'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Agile development with regular progress updates'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Testing, deployment, and ongoing support'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
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
            Let's discuss your requirements and create something amazing together.
          </p>
          <div className="mt-8">
            <a
              href="/requirements"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Submit Your Requirements
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;