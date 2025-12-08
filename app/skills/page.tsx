'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Database, Code, BarChart3, TrendingUp, Brain, Server, 
  Palette, Users, Target, Lightbulb, Zap, Rocket, 
  Layers, Globe, Sparkles 
} from 'lucide-react';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  const skillCategories = [
    {
      id: 'bi-analytics',
      title: "BI & Analytics",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "PowerBI", level: 95, description: "Building automated dashboards and KPI monitoring systems" },
        { name: "Excel PowerQuery", level: 90, description: "Advanced data manipulation and transformation" },
        { name: "Data Visualization", level: 92, description: "Transforming raw data into actionable insights" },
        { name: "KPI Monitoring", level: 88, description: "Real-time performance tracking and reporting" },
        { name: "Trend Analysis", level: 85, description: "Identifying patterns and forecasting trends" },
      ]
    },
    {
      id: 'programming',
      title: "Programming & Scripting",
      icon: Code,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Python", level: 85, description: "Data automation, scripting, and analysis" },
        { name: "SQL", level: 90, description: "Database queries, data extraction, and manipulation" },
        { name: "R", level: 75, description: "Statistical analysis and data science" },
        { name: "Excel Macros", level: 88, description: "Automation reducing manual work by 40%" },
      ]
    },
    {
      id: 'data-collection',
      title: "Data Collection Tools",
      icon: Database,
      color: "from-blue-600 to-cyan-500",
      skills: [
        { name: "KOBO Toolbox", level: 95, description: "Form design, logic setup, and data collection" },
        { name: "ODK (OpenDataKit)", level: 92, description: "Digital data collection and management" },
        { name: "SurveyCTO", level: 90, description: "Secure data collection and validation" },
        { name: "CommCare", level: 70, description: "Mobile data collection platform" },
      ]
    },
    {
      id: 'data-management',
      title: "Data Management",
      icon: Server,
      color: "from-cyan-600 to-blue-500",
      skills: [
        { name: "Data Cleaning", level: 95, description: "Ensuring accuracy and consistency across systems" },
        { name: "Data Validation", level: 93, description: "Identifying irregularities and quality issues" },
        { name: "Data Extraction", level: 90, description: "Efficient data retrieval and merging" },
        { name: "Form Design & Logic", level: 88, description: "Creating secure digital data systems" },
        { name: "Data Governance", level: 85, description: "Privacy-by-design principles and compliance" },
      ]
    },
    {
      id: 'statistical',
      title: "Statistical Analysis",
      icon: Brain,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "SPSS", level: 85, description: "Statistical analysis and data processing" },
        { name: "STATA", level: 80, description: "Advanced statistical modeling" },
        { name: "Advanced Excel", level: 95, description: "Complex formulas, pivot tables, and analysis" },
        { name: "Predictive Modeling", level: 75, description: "Data science and forecasting" },
      ]
    },
    {
      id: 'quality-assurance',
      title: "Quality Assurance",
      icon: Target,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Data Quality Control", level: 95, description: "Ensuring high-quality data systems" },
        { name: "Privacy & Compliance", level: 92, description: "Data protection and ethical handling" },
        { name: "Risk Management", level: 88, description: "Identifying and mitigating data risks" },
        { name: "MEL Support", level: 90, description: "Monitoring, Evaluation, and Learning systems" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-warm-gradient particle-bg" ref={containerRef}>
      <Navigation activePage="skills" />

      {/* Hero Section - Unique Layout */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Asymmetric Header */}
          <div className="grid lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <Sparkles className="w-10 h-10 text-blue-400" />
                </div>
                <span className="text-sm text-blue-400 uppercase tracking-widest font-bold">
                  Technical Expertise
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient leading-tight">
                SKILLS
                <br />
                <span className="text-5xl md:text-7xl">PORTFOLIO</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Comprehensive expertise in data analysis, BI tools, programming, and data collection systems— 
                  delivering exceptional results through technical mastery and innovation
              </p>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                style={{ rotate, scale }}
                className="relative w-64 h-64"
              >
                <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full shape-diamond glow-orange" />
                <div className="absolute inset-4 border-4 border-cyan-500/30 rounded-full shape-hexagon" />
                <div className="absolute inset-8 border-4 border-blue-500/20 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Database className="w-16 h-16 text-blue-400" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Unique Skills Grid - Asymmetric Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={category.id}
                  onMouseEnter={() => setHoveredSkill(category.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`transform-3d ${isEven ? 'card-tilt' : 'card-float'} ${
                    hoveredSkill === category.id ? 'scale-105' : ''
                  }`}
                  style={{
                    transform: hoveredSkill === category.id 
                      ? 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-10px) scale(1.05)' 
                      : undefined
                  }}
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl mb-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills List with Progress Bars */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-200 font-semibold text-sm uppercase tracking-wide">
                            {skill.name}
                          </span>
                          <span className="text-blue-400 font-bold text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-bar-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                        {hoveredSkill === category.id && (
                          <p className="text-xs text-gray-400 mt-2">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  {hoveredSkill === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Stats Section */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Zap, label: 'Expert Skills', value: '25+' },
              { icon: Rocket, label: 'Years Experience', value: '2+' },
              { icon: Layers, label: 'Tools Mastered', value: '15+' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="card text-center group"
              >
                <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-black text-gradient mb-2">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

