'use client';

import { motion } from 'framer-motion';
import { Database, BarChart3, TrendingUp, Award, Zap, Code, Mail, Phone, MapPin, ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        aria-label="Hero section"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <p className="text-sm md:text-base text-teal-400 uppercase tracking-widest font-semibold">
                  Data Analyst & Quality Assurance
                </p>
              </motion.div>

              {/* Name - Split across two lines */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              >
                <span className="block text-gradient">SIMON</span>
                <span className="block text-gradient">EKIPETOT</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-light"
              >
                Transforming Data Into<br />Actionable Insights
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-400 mb-8 leading-relaxed"
              >
                Innovative and analytical Data Analyst, Quality Assurance and Data Scientist with over 2 years of experience in data management, analysis, and program performance monitoring. Skilled in PowerBI, SQL, Python, and Excel.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4 flex-wrap mb-12"
              >
                <Link href="/work" className="btn-primary">
                  Explore Work
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-2xl shadow-teal-500/20">
                <Image
                  src="/simon-photo.jpeg"
                  alt="Simon Ekipetot"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 relative"
          >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">2+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Quality</div>
              </div>
              <div className="text-center relative">
                <div className="absolute -left-4 top-0 text-xs text-gray-500 uppercase tracking-widest hidden md:block" style={{ writingMode: 'vertical-rl' }}>
                  Scroll
                </div>
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Tools</div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="section px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
            <p className="text-xl text-gray-400">Professional Journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Current Role */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-gradient mb-6">Current Role</h3>
              <h4 className="text-xl font-semibold text-teal-400 mb-2">Data Analyst & Programme Quality Assurance Officer</h4>
              <p className="text-gray-400 text-sm mb-4">Mary's Meals Kenya | June 2024 - Present</p>
              <p className="text-gray-300 leading-relaxed">
                Designing and maintaining digital data systems, building automated PowerBI dashboards, and ensuring high-quality data for evidence-based decision-making.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-gradient mb-6">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-teal-400 mb-1">BSc. Mathematics & Statistics</h4>
                  <p className="text-gray-400 text-sm">University of Nairobi | 2017-2021</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-teal-400 mb-1">Data Science Course</h4>
                  <p className="text-gray-400 text-sm">Digital Regency | Aug 2025 - Present</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="section px-4 bg-gradient-to-b from-transparent to-[#0a0e27]/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Core Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-8 h-8 text-teal-400" />
                <h3 className="text-2xl font-bold text-gradient">Data Analysis & Visualization</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Expert in data cleaning, validation, extraction, and automation. Skilled in building automated PowerBI dashboards that transform raw data into actionable insights for program performance monitoring.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-teal-400" />
                <h3 className="text-2xl font-bold text-gradient">Data Systems & Tools</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Experienced in managing digital data collection tools (KOBO, ODK, SurveyCTO) and developing secure data systems with validation rules, access controls, and audit checks.
              </p>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            {['PowerBI', 'SQL', 'Python', 'Excel', 'Data Quality'].map((tech, index) => (
              <span
                key={tech}
                className="px-6 py-3 bg-teal-500/20 text-teal-400 rounded-lg text-lg font-semibold border border-teal-500/30"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="section px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Key Achievements</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'PowerBI Dashboards',
                description: 'Developed real-time dashboards visualizing program KPIs and data trends',
                icon: BarChart3,
              },
              {
                title: 'Data Validation Framework',
                description: 'Created standardized data-cleaning and reconciliation systems improving accuracy',
                icon: Award,
              },
              {
                title: 'Automation',
                description: 'Designed Python scripts and Excel macros reducing manual reporting time by 40%',
                icon: Zap,
              },
              {
                title: 'Data Protection',
                description: 'Strengthened data protection and confidentiality measures across digital systems',
                icon: Shield,
              },
            ].map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-teal-400 mb-2">{achievement.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section px-4 bg-gradient-to-b from-transparent to-[#0a0e27]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center card"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Create<br />Something Legendary?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Have a data project in mind? Let's transform your data into actionable insights. Whether it's dashboard development, data analysis, or system automation—let's start a conversation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-teal-400" />
                <a href="mailto:lochongasimon@gmail.com" className="hover:text-teal-400 transition-colors">
                  lochongasimon@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-teal-400" />
                <a href="tel:0705137509" className="hover:text-teal-400 transition-colors">
                  0705137509
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span>Lodwar, Kenya</span>
              </div>
            </div>

            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
