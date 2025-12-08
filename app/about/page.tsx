'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Award, GraduationCap, Briefcase, Target, Database, Shield, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function About() {
  return (
    <div className="min-h-screen bg-warm-gradient particle-bg">
      <Navigation activePage="about" />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4" />
            
            {/* Profile Photo */}
            <div className="flex justify-center mt-8 mb-8">
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl scale-150" />
                
                {/* Main Image Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl">
                  <Image
                    src="/simon-photo.jpeg"
                    alt="Simon Ekipetot"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 256px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Professional Profile */}
          <div className="card-float mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gradient uppercase">Professional Profile</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Innovative and analytical Data Analyst, Quality Assurance and Data Scientist with over 2 years of 
              experience in data management, data analysis, and program performance monitoring. Skilled in data 
              cleaning, validation, extraction, and automation using PowerBI, SQL, Python, and Excel. 
              Experienced in managing digital data collection tools (KOBO, ODK, SurveyCTO) and developing 
              dashboards that transform raw data into actionable insights. Strong background supporting 
              Monitoring, Evaluation, and Learning (MEL) teams to ensure high-quality data systems and 
              evidence-based decision-making.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <div className="card-tilt">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gradient uppercase">Professional Experience</h3>
              </div>
              <div className="space-y-6">
                {/* Current Role */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-blue-400 font-semibold">June 2024 - Present</span>
                  </div>
                  <h4 className="text-xl font-bold text-gradient mb-1">Data Analyst</h4>
                  <p className="text-cyan-400 font-semibold mb-2">Programme Quality Assurance Officer</p>
                  <p className="text-gray-400 text-sm mb-2">Mary's Meals Kenya</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Design and maintain digital data systems and validation templates</li>
                    <li>Build automated PowerBI dashboards tracking KPIs</li>
                    <li>Extract, clean, and validate large datasets</li>
                    <li>Implement secure data systems with privacy controls</li>
                  </ul>
                </div>

                {/* Previous Role 1 */}
                <div className="border-l-4 border-cyan-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-cyan-400 font-semibold">Nov 2023 - June 2024</span>
                  </div>
                  <h4 className="text-xl font-bold text-gradient mb-1">Programme Quality Assurance Intern</h4>
                  <p className="text-gray-400 text-sm mb-2">Mary's Meals Kenya</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Supported compliance with data protection SOPs</li>
                    <li>Conducted data validation and risk identification</li>
                    <li>Designed secure Excel and PowerBI templates</li>
                    <li>Used Salesforce CRM for data quality control</li>
                  </ul>
                </div>

                {/* Previous Role 2 */}
                <div className="border-l-4 border-blue-500/50 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400 font-semibold">Dec 2021 - Aug 2022</span>
                  </div>
                  <h4 className="text-xl font-bold text-gradient mb-1">Research Assistant</h4>
                  <p className="text-cyan-400 font-semibold mb-2">Data Enumerator</p>
                  <p className="text-gray-400 text-sm mb-2">Save the Children - Kenya</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Supported community-based data collection using KOBO and ODK</li>
                    <li>Cleaned and validated datasets ensuring completeness</li>
                    <li>Assisted in verification of MEL indicators</li>
                    <li>Ensured respondent confidentiality and secure data handling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education & Attributes */}
            <div className="space-y-6">
              {/* Education */}
              <div className="card-float">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gradient uppercase">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-bold mb-1">BSc. Mathematics & Statistics</h4>
                    <p className="text-gray-300 text-sm">University of Nairobi</p>
                    <p className="text-gray-400 text-xs">2017 - 2021</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-bold mb-1">Data Science Course</h4>
                    <p className="text-gray-300 text-sm">Digital Regency</p>
                    <p className="text-gray-400 text-xs">Aug 2025 - Present</p>
                    <p className="text-gray-300 text-xs mt-1">Python, SQL, Data Visualization, Predictive Modelling</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-bold mb-1">Data Analysis Training</h4>
                    <p className="text-gray-300 text-sm">Lebanon Technical Training College</p>
                    <p className="text-gray-400 text-xs">Oct - Nov 2025</p>
                    <p className="text-gray-300 text-xs mt-1">Advanced Excel, PowerBI, SQL</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-bold mb-1">Microsoft PowerBI for BI & Analytics</h4>
                    <p className="text-gray-300 text-sm">AQSKILLS</p>
                    <p className="text-gray-400 text-xs">Jul - Sept 2025</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-bold mb-1">Quantitative Data Analysis</h4>
                    <p className="text-gray-300 text-sm">Sonek Data School</p>
                    <p className="text-gray-400 text-xs">2022 - 2023</p>
                    <p className="text-gray-300 text-xs mt-1">SPSS, STATA, Advanced Excel</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-bold mb-1">Certificate in Computer Applications</h4>
                    <p className="text-gray-300 text-sm">Kenya Institute of Management (KIM)</p>
                    <p className="text-gray-400 text-xs">2019 - 2020</p>
                  </div>
                </div>
              </div>

              {/* Personal Attributes */}
              <div className="card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gradient uppercase">Personal Attributes</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Database, text: 'Analytical & Data-Driven' },
                    { icon: Shield, text: 'High Integrity & Confidentiality' },
                    { icon: Users, text: 'Strong Communicator' },
                    { icon: Award, text: 'Detail-Oriented' },
                  ].map((attr, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg"
                    >
                      <attr.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{attr.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-blue-500/20">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Excellent trainer with capacity to build data literacy within teams. Strong understanding 
                    of compliance and regulatory frameworks. Upholds confidentiality and ethical data use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

