'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Award, GraduationCap, FileText, Image as ImageIcon, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import Image from 'next/image';

export default function Certificates() {
  const certificates = [
    {
      id: 'lebanon-training',
      title: 'Data Analysis Using Advanced Excel and Power BI',
      issuer: 'Lebanon Technical Training College',
      date: 'November 21, 2025',
      type: 'pdf',
      filename: 'SIMON EKIPETOT LOCHONGA.pdf',
      description: 'Professional course in data analysis covering Excel, Power BI, and SQL',
      topics: [
        'Introduction to Data Analytics and Excel Basics',
        'Advanced Excel Formulas, Logical and Lookup Functions',
        'Data Cleaning and Transformation Using Excel and Power Query',
        'PivotTables, PivotCharts, Slicers, and Timelines',
        'Advanced Data Visualization and Dynamic Charts in Excel',
        'Statistical Analysis in Excel',
        'Power BI Fundamentals and Data Source Integration',
        'Data Modeling and Transformation in Power BI',
        'Introduction to SQL for Data Analysis',
        'Advanced SQL Techniques and Power BI Integration',
        'DAX Formulas, Measures, and Report Creation in Power BI',
        'Dashboard Design, Report Deployment, and Project Presentation'
      ],
      certificateNumber: 'LTTC SN:AAE2025092'
    },
    {
      id: 'data-analysis-cert',
      title: 'Quantitative Data Analysis',
      issuer: 'Sonek Data School',
      date: '2022 - 2023',
      type: 'pdf',
      filename: 'DATA ANALYSIS CERT.pdf',
      description: 'Comprehensive training program in quantitative data analysis covering statistical software applications, advanced Excel techniques, and data interpretation methodologies',
      topics: [
        'SPSS for Statistical Analysis and Data Processing',
        'STATA for Advanced Statistical Modeling',
        'Advanced Excel Functions and Formulas',
        'Data Cleaning, Preparation, and Validation',
        'Statistical Testing and Hypothesis Testing',
        'Data Interpretation, Reporting, and Visualization',
        'Quantitative Research Methods',
        'Survey Data Analysis'
      ]
    },
    {
      id: 'documents',
      title: 'Professional Certificates & Documents',
      issuer: 'Multiple Institutions',
      date: '2019 - 2025',
      type: 'pdf',
      filename: 'SIMON EKIPETOT DOCUMENTS (1).pdf',
      description: 'Comprehensive collection of professional certificates and training documents from various institutions, demonstrating continuous professional development in data analysis and technology',
      topics: [
        'Microsoft PowerBI for Business Intelligence & Data Analytics - AQSKILLS (Jul-Sept 2025)',
        'Data Science Course - Digital Regency (Aug 2025 - Present)',
        'Certificate in Computer Applications - Kenya Institute of Management (2019-2020)',
        'Additional professional development and training certificates',
        'Academic and professional credentials'
      ]
    },
    {
      id: 'cert-image-1',
      title: 'Microsoft PowerBI Certification',
      issuer: 'AQSKILLS',
      date: 'July - September 2025',
      type: 'image',
      filename: 'WhatsApp Image 2025-12-08 at 1.35.57 PM.jpeg',
      description: 'Microsoft PowerBI for Business Intelligence & Data Analytics certification covering dashboard design, data modeling, and advanced analytics',
      topics: [
        'PowerBI Fundamentals',
        'Data Source Integration',
        'Data Modeling and Transformation',
        'DAX Formulas and Measures',
        'Dashboard Design and Deployment',
        'Report Creation and Presentation'
      ]
    },
    {
      id: 'cert-image-2',
      title: 'Data Science Course Certificate',
      issuer: 'Digital Regency',
      date: 'August 2025 - Present',
      type: 'image',
      filename: 'WhatsApp Image 2025-12-08 at 1.36.39 PM.jpeg',
      description: 'Data Science course covering Python, SQL, data visualization, and predictive modeling for advanced data analysis',
      topics: [
        'Python Programming for Data Science',
        'SQL for Data Analysis',
        'Data Visualization Techniques',
        'Predictive Modeling',
        'Machine Learning Fundamentals',
        'Statistical Analysis Methods'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-warm-gradient particle-bg">
      <Navigation activePage="certificates" />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div>
                <Award className="w-12 h-12 text-blue-400" />
              </div>
              <h2 className="section-title">Certificates & Credentials</h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4" />
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
              Professional certifications and training credentials demonstrating expertise in data analysis, 
              business intelligence, and data science.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="card transform-3d group h-full flex flex-col"
              >
                {/* Certificate Header */}
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 rounded-2xl mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      {cert.type === 'pdf' ? (
                        <FileText className="w-10 h-10 text-white" />
                      ) : (
                        <ImageIcon className="w-10 h-10 text-white" />
                      )}
                      <Award className="w-8 h-8 text-white/80" />
                    </div>
                    <h3 className="text-xl font-black text-white uppercase leading-tight mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-white/90 text-sm font-semibold">{cert.issuer}</p>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <GraduationCap className="w-4 h-4 text-blue-400" />
                      <span>{cert.date}</span>
                      {cert.certificateNumber && (
                        <>
                          <span className="text-gray-600">•</span>
                          <span className="text-xs">{cert.certificateNumber}</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  {/* Topics List (for detailed certificates) */}
                  {cert.topics.length > 0 && (
                    <div className="mb-4 flex-1">
                      <h4 className="text-blue-400 font-bold text-sm mb-2 uppercase tracking-wide">
                        Areas Covered:
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-400">
                        {cert.topics.slice(0, 5).map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                        {cert.topics.length > 5 && (
                          <li className="text-blue-400 font-semibold">
                            +{cert.topics.length - 5} more topics
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Certificate Preview/Download */}
                  <div className="mt-auto pt-4 border-t border-blue-500/20">
                    {cert.type === 'image' ? (
                      <div className="relative w-full h-48 bg-slate-800 rounded-lg overflow-hidden mb-3">
                        <Image
                          src={`/certificates/${encodeURIComponent(cert.filename)}`}
                          alt={cert.title}
                          fill
                          className="object-contain"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-32 bg-slate-800 rounded-lg mb-3">
                        <FileText className="w-16 h-16 text-blue-400/30" />
                      </div>
                    )}
                    <a
                      href={`/certificates/${encodeURIComponent(cert.filename)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full flex items-center justify-center gap-2 text-sm"
                    >
                      {cert.type === 'image' ? 'View Full Image' : 'View Certificate'}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: 'Total Certificates', value: certificates.length.toString() },
              { icon: GraduationCap, label: 'Training Programs', value: '5+' },
              { icon: FileText, label: 'PDF Certificates', value: certificates.filter(c => c.type === 'pdf').length.toString() },
              { icon: ImageIcon, label: 'Image Certificates', value: certificates.filter(c => c.type === 'image').length.toString() },
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


