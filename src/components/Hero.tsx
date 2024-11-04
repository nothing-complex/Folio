import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-wine/20 to-black z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Capturing Stories Through
            <span className="block text-sand">Visual Poetry</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
            Award-winning cinematography crafting emotional narratives through the lens of artistic vision
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-sand text-wine px-8 py-3 rounded-full font-medium text-lg hover:bg-sand/90 transition-colors"
          >
            View Showreel
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;