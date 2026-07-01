import { motion } from 'framer-motion';
import { portfolioData } from './data/resumeData';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope, FaGraduationCap, FaBriefcase, FaTrophy, FaLayerGroup } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function App() {
  return (
    <div className="min-h-screen relative bg-[#030712] text-slate-100 selection:bg-purple-500/20 antialiased overflow-x-hidden">
      
      {/* Background Micro-Interaction Lights */}
      <div className="absolute top-10 left-5 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-[600px] right-5 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Fixed Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#030712]/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-sm font-bold tracking-widest text-white hover:opacity-80 transition-opacity">
            RISHAV<span className="text-blue-500">.</span>ENGINEERING
          </a>
          <div className="hidden md:flex gap-8 text-xs tracking-wider uppercase font-semibold text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          </div>
        </div>
      </nav>

      {/* Main Structural Layout */}
      <main className="max-w-5xl mx-auto px-6 pt-36 pb-24 space-y-32">
        
        {/* Section 1: Hero Pitch Dashboard */}
        <section className="space-y-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-400 font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Actively Seeking SDE & AI/ML Internships
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gradient">
              {portfolioData.header.name}
            </h1>
            <p className="text-lg md:text-2xl font-medium tracking-tight text-slate-300">
              {portfolioData.header.title}
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl font-normal"
          >
            {portfolioData.summary}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold tracking-wider uppercase shadow-lg shadow-blue-600/10 transition-all">
              Explore Implementations
            </a>
            <a href={`mailto:${portfolioData.header.email}`} className="px-6 py-3 glass-card hover:bg-white/5 text-slate-200 rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2">
              <FaEnvelope /> Get In Touch
            </a>
          </motion.div>
        </section>

        {/* Section 2: Education Timeline */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <FaGraduationCap className="text-lg text-purple-400" />
            <h2 className="text-xl font-bold tracking-tight uppercase text-slate-400 font-mono">Academic Foundation</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {portfolioData.education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-xl p-6 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-xs font-mono text-purple-400 font-semibold">{edu.duration}</div>
                  <h3 className="font-bold text-slate-100 text-base leading-tight">{edu.degree}</h3>
                  <p className="text-slate-400 text-sm">{edu.institution}</p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex px-2.5 py-0.5 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded text-xs font-bold font-mono">
                    {edu.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Skills Inventory */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <FaLayerGroup className="text-lg text-blue-400" />
            <h2 className="text-xl font-bold tracking-tight uppercase text-slate-400 font-mono">Capabilities Inventory</h2>
          </div>
          <div className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
            {Object.entries(portfolioData.skills).map(([category, items], idx) => (
              <div key={idx} className="space-y-2.5">
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                  {category.replace(/([A-Z])/g, ' $1')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1.5 bg-white/[0.01] border border-white/5 rounded-md text-xs font-medium text-slate-300 hover:border-blue-500/20 hover:text-white transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Production Systems */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <FaCode className="text-lg text-emerald-400" />
            <h2 className="text-xl font-bold tracking-tight uppercase text-slate-400 font-mono">Production Systems</h2>
          </div>
          <div className="grid gap-6">
            {portfolioData.projects.map((proj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-6 md:p-8 space-y-6 hover:border-emerald-500/20 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                  <div className="flex gap-3 text-slate-500 text-sm pt-1">
                    <FaGithub className="hover:text-white cursor-pointer transition-colors" />
                    <FaArrowUpRightFromSquare className="hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono font-bold px-2.5 py-0.5 bg-emerald-500/5 text-emerald-400 border border-emerald-500/10 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5: Engineering Records */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <FaBriefcase className="text-lg text-amber-400" />
            <h2 className="text-xl font-bold tracking-tight uppercase text-slate-400 font-mono">Engineering Records</h2>
          </div>
          <div className="space-y-4">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-100">{exp.role}</h3>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 font-semibold bg-amber-400/5 px-2.5 py-1 border border-amber-400/10 rounded-md w-max">
                    {exp.org}
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-slate-400">
                  {exp.details.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-amber-500/50 mt-1.5 flex-shrink-0 text-[10px]">■</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Credentials Ledger */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <FaTrophy className="text-lg text-rose-400" />
            <h2 className="text-xl font-bold tracking-tight uppercase text-slate-400 font-mono">Credentials & Honors</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {portfolioData.achievements.map((ach, idx) => (
              <div key={idx} className="glass-card rounded-xl p-5 flex items-start gap-3.5">
                <span className="text-rose-500/60 mt-0.5 text-xs">◆</span>
                <span className="text-sm text-slate-300 font-medium leading-relaxed">{ach}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Micro Footer Panel */}
      <footer className="border-t border-white/5 py-12 text-center text-[11px] tracking-widest uppercase text-slate-600 font-mono">
        SYSTEM STABLE // {new Date().getFullYear()} // KUMAR RISHAV
      </footer>
    </div>
  );
}