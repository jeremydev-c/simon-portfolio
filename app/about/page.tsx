'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import { GraduationCap, Briefcase, Award, CheckCircle2, Target, Users, Shield } from 'lucide-react';

export default function About() {
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
            {/* Profile Photo - Round and at the top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-2xl shadow-teal-500/20">
                <Image
                  src="/simon-photo.jpeg"
                  alt="Simon Ekipetot"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">About Me</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Learn more about my background, experience, and expertise
            </p>
          </motion.div>

          {/* Professional Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="card max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Professional Profile</h2>
              <p className="text-gray-300 leading-relaxed">
                Innovative and analytical Data Analyst, Quality Assurance and Data Scientist with over 2 years of experience in data management, data analysis, and program performance monitoring. Skilled in data cleaning, validation, extraction, and automation using PowerBI, SQL, Python, and Excel. Experienced in managing digital data collection tools (KOBO, ODK, SurveyCTO) and developing dashboards that transform raw data into actionable insights. Strong background supporting Monitoring, Evaluation, and Learning (MEL) teams to ensure high-quality data systems and evidence-based decision-making.
              </p>
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-teal-400" />
              <h2 className="text-4xl font-bold text-gradient">Professional Experience</h2>
            </div>
            <div className="space-y-6">
              {/* Data Analyst */}
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-teal-400 mb-1">Data Analyst</h3>
                    <p className="text-gray-300 font-semibold mb-1">Programme Quality Assurance Officer</p>
                    <p className="text-gray-400 text-sm">Mary's Meals Kenya</p>
                  </div>
                  <span className="text-teal-400 text-sm font-medium mt-2 md:mt-0">June 2024 - November 2025</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Design and maintain digital data systems and validation templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Build automated PowerBI dashboards tracking KPIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Extract, clean, and validate large datasets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Implement secure data systems with privacy controls</span>
                  </li>
                </ul>
              </div>

              {/* Intern */}
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-teal-400 mb-1">Programme Quality Assurance Intern</h3>
                    <p className="text-gray-400 text-sm">Mary's Meals Kenya</p>
                  </div>
                  <span className="text-teal-400 text-sm font-medium mt-2 md:mt-0">Nov 2023 - June 2024</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Supported compliance with data protection SOPs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Conducted data validation and risk identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Designed secure Excel and PowerBI templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Used Salesforce CRM for data quality control</span>
                  </li>
                </ul>
              </div>

              {/* Research Assistant */}
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-teal-400 mb-1">Research Assistant</h3>
                    <p className="text-gray-300 font-semibold mb-1">Data Enumerator</p>
                    <p className="text-gray-400 text-sm">Save the Children - Kenya</p>
                  </div>
                  <span className="text-teal-400 text-sm font-medium mt-2 md:mt-0">Dec 2021 - Aug 2022</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Supported community-based data collection using KOBO and ODK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Cleaned and validated datasets ensuring completeness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Assisted in verification of MEL indicators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>Ensured respondent confidentiality and secure data handling</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-teal-400" />
              <h2 className="text-4xl font-bold text-gradient">Education</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold text-teal-400 mb-2">BSc. Mathematics & Statistics</h3>
                <p className="text-gray-300 mb-1">University of Nairobi</p>
                <p className="text-gray-400 text-sm">2017 - 2021</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Data Science Course</h3>
                <p className="text-gray-300 mb-1">Digital Regency</p>
                <p className="text-gray-400 text-sm mb-2">Aug 2025 - Present</p>
                <p className="text-gray-300 text-sm">Python, SQL, Data Visualization, Predictive Modelling</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Data Analysis Training</h3>
                <p className="text-gray-300 mb-1">Lebanon Technical Training College</p>
                <p className="text-gray-400 text-sm mb-2">Oct - Nov 2025</p>
                <p className="text-gray-300 text-sm">Advanced Excel, PowerBI, SQL</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Microsoft PowerBI for BI & Analytics</h3>
                <p className="text-gray-300 mb-1">AQSKILLS</p>
                <p className="text-gray-400 text-sm">Jul - Sept 2025</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Quantitative Data Analysis</h3>
                <p className="text-gray-300 mb-1">Sonek Data School</p>
                <p className="text-gray-400 text-sm mb-2">2022 - 2023</p>
                <p className="text-gray-300 text-sm">SPSS, STATA, Advanced Excel</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Certificate in Computer Applications</h3>
                <p className="text-gray-300 mb-1">Kenya Institute of Management (KIM)</p>
                <p className="text-gray-400 text-sm">2019 - 2020</p>
              </div>
            </div>
          </motion.div>

          {/* Personal Attributes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-teal-400" />
              <h2 className="text-4xl font-bold text-gradient">Personal Attributes</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card text-center">
                <Target className="w-10 h-10 text-teal-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-200 mb-2">Analytical & Data-Driven</h3>
              </div>
              <div className="card text-center">
                <Shield className="w-10 h-10 text-teal-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-200 mb-2">High Integrity & Confidentiality</h3>
              </div>
              <div className="card text-center">
                <Users className="w-10 h-10 text-teal-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-200 mb-2">Strong Communicator</h3>
              </div>
              <div className="card text-center">
                <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-200 mb-2">Detail-Oriented</h3>
              </div>
            </div>
            <div className="mt-6 card">
              <p className="text-gray-300 leading-relaxed">
                Excellent trainer with capacity to build data literacy within teams. Strong understanding of compliance and regulatory frameworks.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
