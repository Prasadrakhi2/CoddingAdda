import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { motion} from 'framer-motion';

import { Code2, Github, Linkedin, Twitter} from 'lucide-react';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Learning from './pages/Learning';
import Problems from './pages/Problems';
import Questions from './pages/Questions';
// @ts-ignore: Implicit any type for the Ide module
import Ide from '../../Ide/src/Ide';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <Router>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Code2 className="w-8 h-8 text-blue-500" />
              <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Coding Adda
              </Link>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Problems', path: '/problem' },
                { name: 'Learning', path: '/learning' },
                { name: 'Gaming', path: '/gaming' }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.button 
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            ><a href="/login">Login</a>
              
            </motion.button>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/problem" element={<Problems />} />
        <Route path="/problem/Question" element={<Questions/>} />
        {/* <div className='mt-52'></div> */}
        <Route path="/ide" element={<Ide/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/dashboard" element={<Navigate to="/" replace />} /> */}
        
      </Routes>
       {/* Footer */}
              <footer className="bg-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-6 py-12">
                  <motion.div 
                    className="grid md:grid-cols-4 gap-8"
                    variants={staggerContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={fadeInUpVariants}>
                      <div className="flex items-center space-x-2 mb-6">
                        <Code2 className="w-6 h-6 text-blue-500" />
                        <span className="text-xl font-bold">Coding Adda</span>
                      </div>
                      <p className="text-gray-400">
                        Empowering developers worldwide to achieve their coding dreams.
                      </p>
                    </motion.div>
                    
                    {['Quick Links', 'Community', 'Resources'].map((section) => (
                      <motion.div key={section} variants={fadeInUpVariants}>
                        <h3 className="font-semibold mb-4">{section}</h3>
                        <ul className="space-y-2">
                          {['Link 1', 'Link 2', 'Link 3'].map((link) => (
                            <li key={link}>
                              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-400">© 2024 Coding Adda. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                      {[Twitter, Github, Linkedin].map((Icon, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </footer>
    </Router>
  );
}

export default App;