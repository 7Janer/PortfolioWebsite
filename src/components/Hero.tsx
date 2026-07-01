import { motion } from 'framer-motion';
import { portfolioData } from '../data/resumeData';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
            {portfolioData.header.name}
          </h1>
          <h2 className="text-xl md:text-3xl text-primary font-medium mb-8">
            {portfolioData.header.title}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {portfolioData.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-8 py-3 rounded-full bg-primary hover:bg-blue-600 text-white font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              View Projects
            </button>
            <button className="px-8 py-3 rounded-full glass-panel hover:bg-white/10 text-white font-medium transition-all">
              Resume
            </button>
          </div>

          <div className="flex justify-center gap-6 text-gray-400">
             <a href="#" className="hover:text-primary transition-colors text-2xl"><FaGithub /></a>
             <a href="#" className="hover:text-primary transition-colors text-2xl"><FaLinkedin /></a>
             <a href="#" className="hover:text-primary transition-colors text-2xl"><FaCode /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};