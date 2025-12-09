'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { BarChart3, Database, Code, Users } from 'lucide-react';

const projects = [
  {
    title: 'PowerBI Dashboards',
    description: 'Developed real-time dashboards to visualize program KPIs and data trends.',
    tech: ['PowerBI', 'SQL', 'Excel'],
    icon: BarChart3,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Data Validation Framework',
    description: 'Created standardized data-cleaning and reconciliation systems improving accuracy.',
    tech: ['Python', 'Excel', 'SQL'],
    icon: Database,
    color: 'from-teal-500/20 to-green-500/20',
  },
  {
    title: 'Automation Scripts',
    description: 'Designed Python scripts and Excel macros that reduced manual reporting time by 40%.',
    tech: ['Python', 'Excel', 'VBA'],
    icon: Code,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'MEL Collaboration',
    description: 'Supported monthly and annual data reviews and training sessions for field teams.',
    tech: ['KOBO', 'ODK', 'SurveyCTO'],
    icon: Users,
    color: 'from-orange-500/20 to-red-500/20',
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation />
      <main className="pt-32 px-4 pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Work & Projects</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Key projects and achievements in data analysis and quality assurance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group hover:scale-[1.02] transition-transform"
                >
                  <div className={`bg-gradient-to-br ${project.color} p-6 rounded-lg -m-6 mb-6 flex items-center gap-4`}>
                    <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
