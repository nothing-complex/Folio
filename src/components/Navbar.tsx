import React from 'react';
import { motion } from 'framer-motion';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Film } from 'lucide-react';

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-black/50 backdrop-blur-md"
    >
      <div className="container mx-auto px-4">
        <NavigationMenu.Root className="relative flex items-center justify-between py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Film className="w-8 h-8 text-sand" />
            <span className="text-xl font-bold">CINEMATIC</span>
          </motion.div>

          <NavigationMenu.List className="flex space-x-8">
            {['Work', 'About', 'Process', 'Contact'].map((item) => (
              <NavigationMenu.Item key={item}>
                <NavigationMenu.Link className="text-cream/80 hover:text-cream transition-colors relative group cursor-pointer">
                  {item}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sand group-hover:w-full transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </motion.header>
  );
}

export default Navbar;
