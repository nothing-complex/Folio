import React from 'react';
import { motion } from 'framer-motion';
import { Film, Play, Camera } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { Hero } from './components/Hero';

const projects = [
  {
    title: "Urban Rhythms",
    category: "Short Film",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
    description: "A visual exploration of city life after dark"
  },
  {
    title: "Nature's Whisper",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?auto=format&fit=crop&q=80",
    description: "Environmental documentary showcasing Earth's hidden wonders"
  },
  {
    title: "Ethereal Dreams",
    category: "Music Video",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80",
    description: "Experimental music video featuring abstract visuals"
  }
];

export function App() {
  return (
    <div className="bg-black text-cream min-h-screen">
      <Navbar />
      <Hero />
      
      <section className="container mx-auto px-4 py-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Featured Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      <footer className="bg-wine/20 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Film className="w-6 h-6" />
              <Camera className="w-6 h-6" />
              <Play className="w-6 h-6" />
            </div>
            <p className="text-cream/80">&copy; 2024 Cinematic Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;