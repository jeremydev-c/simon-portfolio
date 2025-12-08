'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  Sparkles, Database, Code, TrendingUp, BarChart3, Award, 
  Mail, Phone, MapPin, GraduationCap, Briefcase, Linkedin, 
  Github, ArrowRight, Zap, Rocket, Layers, ArrowDown
} from 'lucide-react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Image from 'next/image';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-warm-gradient particle-bg">
        <Navigation activePage="home" />

      {/* Hero Section - Full Screen with Parallax */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 px-2 sm:px-4">
          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left: Main Content - Takes 7 columns */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
                <div>
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400" />
                </div>
                <span className="text-xs sm:text-sm md:text-base text-blue-400 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-bold">
                  Data Analyst & Quality Assurance
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black text-gradient leading-[0.9]">
                SIMON
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">EKIPETOT</span>
              </h1>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed">
                  Transforming <span className="text-blue-400 font-bold">Data</span> Into
                  <br />
                  <span className="text-gradient font-bold">Actionable Insights</span>
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Innovative and analytical Data Analyst, Quality Assurance and Data Scientist with 
                  over 2 years of experience in data management, analysis, and program performance 
                  monitoring. Skilled in PowerBI, SQL, Python, and Excel.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href="/work" className="btn-primary group">
                  Explore Work
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </div>

              {/* Quick Stats - Horizontal */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8">
                {[
                  { icon: Award, value: '2+', label: 'Years' },
                  { icon: Zap, value: '100%', label: 'Quality' },
                  { icon: Rocket, value: '15+', label: 'Tools' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-1 sm:mb-2" />
                    <div className="text-xl sm:text-2xl font-black text-gradient">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Profile Image - Takes 5 columns with unique styling */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl scale-150" />
                
                {/* Main Image Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 sm:border-4 border-blue-500/50 shadow-2xl glow-orange">
                  <Image
                    src="/simon-photo.jpeg"
                    alt="Simon Ekipetot"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 320px"
                    unoptimized
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </section>

      {/* About Section - Diagonal Layout */}
      <section className="section-diagonal py-12 sm:py-16 md:py-24 lg:py-32 px-3 sm:px-4 md:px-6 lg:px-8 bg-slate-900/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="section-title">About Me</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Left Card - Tilted */}
            <div className="card-tilt">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gradient uppercase">Professional Journey</h3>
              </div>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="text-blue-400 font-bold mb-2 text-lg">Current Role</h4>
                  <p className="text-xl font-semibold mb-2">Data Analyst & Programme Quality Assurance Officer</p>
                  <p className="text-sm text-gray-400">Mary's Meals Kenya | June 2024 - Present</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Designing and maintaining digital data systems, building automated PowerBI dashboards, 
                    and ensuring high-quality data for evidence-based decision-making.
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-bold mb-2 text-lg flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Education
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold">BSc. Mathematics & Statistics</p>
                    <p className="text-gray-400">University of Nairobi | 2017-2021</p>
                    <p className="font-semibold mt-3">Data Science Course</p>
                    <p className="text-gray-400">Digital Regency | Aug 2025 - Present</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Floating */}
            <div className="card-float">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gradient uppercase">Core Expertise</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-cyan-400 font-bold mb-3 text-lg">Data Analysis & Visualization</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Expert in data cleaning, validation, extraction, and automation. Skilled in building 
                    automated PowerBI dashboards that transform raw data into actionable insights for 
                    program performance monitoring.
                  </p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-bold mb-3 text-lg">Data Systems & Tools</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Experienced in managing digital data collection tools (KOBO, ODK, SurveyCTO) and 
                    developing secure data systems with validation rules, access controls, and audit checks.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {['PowerBI', 'SQL', 'Python', 'Excel', 'Data Quality'].map((tag) => (
                    <span key={tag} className="px-4 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400 font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements - Unique Grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="section-title">Key Achievements</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                icon: BarChart3,
                title: 'PowerBI Dashboards',
                description: 'Developed real-time dashboards visualizing program KPIs and data trends',
                color: 'from-blue-500 to-cyan-600',
              },
              {
                icon: Database,
                title: 'Data Validation Framework',
                description: 'Created standardized data-cleaning and reconciliation systems improving accuracy',
                color: 'from-cyan-500 to-blue-600',
              },
              {
                icon: Zap,
                title: 'Automation',
                description: 'Designed Python scripts and Excel macros reducing manual reporting time by 40%',
                color: 'from-blue-600 to-cyan-500',
              },
              {
                icon: Award,
                title: 'Data Protection',
                description: 'Strengthened data protection and confidentiality measures across digital systems',
                color: 'from-cyan-600 to-blue-500',
              },
            ].map((achievement) => (
              <div
                key={achievement.title}
                className="card transform-3d group"
              >
                <div className={`bg-gradient-to-br ${achievement.color} p-6 rounded-2xl mb-4 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
                  <achievement.icon className="w-12 h-12 text-white relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-black text-gradient mb-3 uppercase">{achievement.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Unique Design */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="card-float text-center">
            <div className="inline-block mb-4 sm:mb-6">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-blue-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-4 sm:mb-6 uppercase">
              Ready to Create
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Something Legendary?</span>
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
              Have a data project in mind? Let's transform your data into actionable insights. 
              Whether it's dashboard development, data analysis, or system automation—let's start a conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a href="mailto:lochongasimon@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>lochongasimon@gmail.com</span>
              </a>
              <a href="tel:0705137509" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>0705137509</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Lodwar, Kenya</span>
              </div>
            </div>
            <Link href="/contact" className="btn-primary inline-block">
              Start a Project
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

        <ScrollToTop />
      </div>
  );
}

