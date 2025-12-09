'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { BarChart3, Code, Database, TrendingUp, Shield, Award } from 'lucide-react';

const skillCategories = [
  {
    title: 'BI & Analytics',
    icon: BarChart3,
    skills: [
      { name: 'PowerBI', level: 95 },
      { name: 'Excel PowerQuery', level: 90 },
      { name: 'Data Visualization', level: 92 },
      { name: 'KPI Monitoring', level: 88 },
      { name: 'Trend Analysis', level: 85 },
    ],
  },
  {
    title: 'Programming & Scripting',
    icon: Code,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 90 },
      { name: 'R', level: 75 },
      { name: 'Excel Macros', level: 88 },
    ],
  },
  {
    title: 'Data Collection Tools',
    icon: Database,
    skills: [
      { name: 'KOBO Toolbox', level: 95 },
      { name: 'ODK (OpenDataKit)', level: 92 },
      { name: 'SurveyCTO', level: 90 },
      { name: 'CommCare', level: 70 },
    ],
  },
  {
    title: 'Data Management',
    icon: Database,
    skills: [
      { name: 'Data Cleaning', level: 95 },
      { name: 'Data Validation', level: 93 },
      { name: 'Data Extraction', level: 90 },
      { name: 'Form Design & Logic', level: 88 },
      { name: 'Data Governance', level: 85 },
    ],
  },
  {
    title: 'Statistical Analysis',
    icon: TrendingUp,
    skills: [
      { name: 'SPSS', level: 85 },
      { name: 'STATA', level: 80 },
      { name: 'Advanced Excel', level: 95 },
      { name: 'Predictive Modeling', level: 75 },
    ],
  },
  {
    title: 'Quality Assurance',
    icon: Shield,
    skills: [
      { name: 'Data Quality Control', level: 95 },
      { name: 'Privacy & Compliance', level: 92 },
      { name: 'Risk Management', level: 88 },
      { name: 'MEL Support', level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation activePage="skills" />
      <main className="pt-32 px-4 pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Technical Expertise</h1>
            <p className="text-xl text-gray-400 mb-2">SKILLS PORTFOLIO</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive expertise in data analysis, BI tools, programming, and data collection systems— delivering exceptional results through technical mastery and innovation
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <h2 className="text-xl font-bold text-gradient">{category.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-200 font-medium">{skill.name}</span>
                          <span className="text-teal-400 text-sm font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                            className="bg-gradient-to-r from-teal-500 to-cyan-400 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="card text-center">
              <Award className="w-10 h-10 text-teal-400 mx-auto mb-3" />
              <div className="text-4xl font-bold text-teal-400 mb-2">25+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Expert Skills</div>
            </div>
            <div className="card text-center">
              <TrendingUp className="w-10 h-10 text-teal-400 mx-auto mb-3" />
              <div className="text-4xl font-bold text-teal-400 mb-2">2+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="card text-center">
              <Code className="w-10 h-10 text-teal-400 mx-auto mb-3" />
              <div className="text-4xl font-bold text-teal-400 mb-2">15+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Tools Mastered</div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
