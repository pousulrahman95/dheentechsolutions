import React, { useState, useEffect } from 'react';
import { X, Code, Copy, Check, FileText, Folder, FolderOpen } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  content?: string;
}

const CodeViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['src', 'src/components', 'src/components/pages', 'src/components/shared']));

  // File structure with actual code content
  const fileStructure: FileNode[] = [
    {
      name: 'src',
      path: 'src',
      type: 'folder',
      children: [
        {
          name: 'App.tsx',
          path: 'src/App.tsx',
          type: 'file',
          content: `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Projects from './components/pages/Projects';
import Requirements from './components/pages/Requirements';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/requirements" element={<Requirements />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;`
        },
        {
          name: 'main.tsx',
          path: 'src/main.tsx',
          type: 'file',
          content: `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);`
        },
        {
          name: 'index.css',
          path: 'src/index.css',
          type: 'file',
          content: `@tailwind base;
@tailwind components;
@tailwind utilities;`
        },
        {
          name: 'components',
          path: 'src/components',
          type: 'folder',
          children: [
            {
              name: 'shared',
              path: 'src/components/shared',
              type: 'folder',
              children: [
                {
                  name: 'Header.tsx',
                  path: 'src/components/shared/Header.tsx',
                  type: 'file',
                  content: `// Header component with navigation and responsive design
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={\`fixed w-full top-0 z-50 transition-all duration-300 \${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }\`}>
      {/* Header content */}
    </header>
  );
};

export default Header;`
                },
                {
                  name: 'Footer.tsx',
                  path: 'src/components/shared/Footer.tsx',
                  type: 'file',
                  content: `// Footer component with company info and links
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer content */}
      </div>
    </footer>
  );
};

export default Footer;`
                }
              ]
            },
            {
              name: 'pages',
              path: 'src/components/pages',
              type: 'folder',
              children: [
                {
                  name: 'Home.tsx',
                  path: 'src/components/pages/Home.tsx',
                  type: 'file',
                  content: `// Home page with hero section, stats, and features
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock, Zap, Shield, Headphones } from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-600">DTS SOFTWARE</span>
            </h1>
            {/* Rest of component */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;`
                },
                {
                  name: 'About.tsx',
                  path: 'src/components/pages/About.tsx',
                  type: 'file',
                  content: `// About page with company story and team
import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* About content */}
    </div>
  );
};

export default About;`
                },
                {
                  name: 'Contact.tsx',
                  path: 'src/components/pages/Contact.tsx',
                  type: 'file',
                  content: `// Contact page with form and company info
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  return (
    <div className="overflow-hidden">
      {/* Contact form and info */}
    </div>
  );
};

export default Contact;`
                },
                {
                  name: 'Projects.tsx',
                  path: 'src/components/pages/Projects.tsx',
                  type: 'file',
                  content: `// Projects showcase page
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive online marketplace...',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
    },
    // More projects...
  ];

  return (
    <div className="overflow-hidden">
      {/* Projects grid */}
    </div>
  );
};

export default Projects;`
                },
                {
                  name: 'Gallery.tsx',
                  path: 'src/components/pages/Gallery.tsx',
                  type: 'file',
                  content: `// Gallery page with image showcase
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Gallery grid and lightbox */}
    </div>
  );
};

export default Gallery;`
                },
                {
                  name: 'Requirements.tsx',
                  path: 'src/components/pages/Requirements.tsx',
                  type: 'file',
                  content: `// Requirements submission form
import React, { useState } from 'react';
import { Send, Upload, FileText, Zap } from 'lucide-react';

const Requirements = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    deadline: '',
    requirements: '',
    features: [] as string[],
    additionalInfo: ''
  });

  return (
    <div className="overflow-hidden">
      {/* Requirements form */}
    </div>
  );
};

export default Requirements;`
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'package.json',
      path: 'package.json',
      type: 'file',
      content: `{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.9.1",
    "react-syntax-highlighter": "^15.5.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@types/react-syntax-highlighter": "^15.5.11",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}`
    },
    {
      name: 'tailwind.config.js',
      path: 'tailwind.config.js',
      type: 'file',
      content: `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};`
    },
    {
      name: 'vite.config.ts',
      path: 'vite.config.ts',
      type: 'file',
      content: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});`
    }
  ];

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };

  const copyToClipboard = async (content: string, fileName: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedFile(fileName);
      setTimeout(() => setCopiedFile(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const renderFileTree = (nodes: FileNode[], level = 0) => {
    return nodes.map((node) => (
      <div key={node.path} style={{ marginLeft: `${level * 20}px` }}>
        <div
          className={`flex items-center py-1 px-2 hover:bg-gray-100 cursor-pointer rounded ${
            selectedFile === node.path ? 'bg-blue-100' : ''
          }`}
          onClick={() => {
            if (node.type === 'folder') {
              toggleFolder(node.path);
            } else {
              setSelectedFile(node.path);
            }
          }}
        >
          {node.type === 'folder' ? (
            expandedFolders.has(node.path) ? (
              <FolderOpen className="h-4 w-4 mr-2 text-blue-600" />
            ) : (
              <Folder className="h-4 w-4 mr-2 text-blue-600" />
            )
          ) : (
            <FileText className="h-4 w-4 mr-2 text-gray-600" />
          )}
          <span className="text-sm">{node.name}</span>
        </div>
        {node.type === 'folder' && expandedFolders.has(node.path) && node.children && (
          <div>{renderFileTree(node.children, level + 1)}</div>
        )}
      </div>
    ));
  };

  const findFileContent = (path: string, nodes: FileNode[]): string => {
    for (const node of nodes) {
      if (node.path === path && node.content) {
        return node.content;
      }
      if (node.children) {
        const content = findFileContent(path, node.children);
        if (content) return content;
      }
    }
    return '';
  };

  const getFileExtension = (path: string) => {
    const ext = path.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'tsx':
      case 'jsx':
        return 'tsx';
      case 'ts':
        return 'typescript';
      case 'js':
        return 'javascript';
      case 'css':
        return 'css';
      case 'json':
        return 'json';
      default:
        return 'javascript';
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-40"
        title="View Source Code"
      >
        <Code className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-7xl h-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <Code className="h-5 w-5 mr-2" />
            Website Source Code
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* File Tree */}
          <div className="w-1/3 border-r bg-gray-50 overflow-y-auto p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Project Structure</h3>
            {renderFileTree(fileStructure)}
          </div>

          {/* Code Display */}
          <div className="flex-1 flex flex-col">
            {selectedFile ? (
              <>
                <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                  <span className="font-mono text-sm text-gray-700">{selectedFile}</span>
                  <button
                    onClick={() => copyToClipboard(findFileContent(selectedFile, fileStructure), selectedFile)}
                    className="flex items-center px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    {copiedFile === selectedFile ? (
                      <Check className="h-4 w-4 mr-1" />
                    ) : (
                      <Copy className="h-4 w-4 mr-1" />
                    )}
                    {copiedFile === selectedFile ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="flex-1 overflow-auto">
                  <SyntaxHighlighter
                    language={getFileExtension(selectedFile)}
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      height: '100%',
                      fontSize: '14px',
                    }}
                    showLineNumbers
                  >
                    {findFileContent(selectedFile, fileStructure)}
                  </SyntaxHighlighter>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p>Select a file from the project structure to view its code</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeViewer;