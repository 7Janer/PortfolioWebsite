import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const Card = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`glass-panel rounded-2xl p-6 hover:border-primary/50 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
};