'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 'lebanon',
    title: 'Data Analysis',
    issuer: 'Lebanon Technical Training College',
    date: 'October - November 2025',
    type: 'pdf',
    filename: 'SIMON EKIPETOT LOCHONGA.pdf',
    description: 'Comprehensive training in data analysis using Advanced Excel, Power BI, and SQL. Covered data analytics fundamentals, advanced formulas, data cleaning, visualization, and dashboard development.',
  },
  {
    id: 'sonek',
    title: 'Quantitative Data Analysis',
    issuer: 'Sonek Data School',
    date: '2022 - 2023',
    type: 'pdf',
    filename: 'DATA ANALYSIS CERT.pdf',
    description: 'Comprehensive training in quantitative data analysis using statistical software and advanced Excel techniques. Areas covered include SPSS, STATA, Advanced Excel, and data cleaning.',
  },
  {
    id: 'aqskills',
    title: 'Microsoft PowerBI for Business Intelligence & Data Analytics',
    issuer: 'AQSKILLS',
    date: 'July - September 2025',
    type: 'image',
    filename: 'WhatsApp Image 2025-12-08 at 1.35.57 PM.jpeg',
    description: 'Professional certification in PowerBI for business intelligence and data analytics.',
  },
  {
    id: 'digital-regency',
    title: 'Data Science Course',
    issuer: 'Digital Regency',
    date: 'August 2025 - Present',
    type: 'image',
    filename: 'WhatsApp Image 2025-12-08 at 1.36.39 PM.jpeg',
    description: 'Ongoing comprehensive data science course covering Python, SQL, data visualization, and predictive modeling.',
  },
  {
    id: 'documents',
    title: 'Professional Certificates & Documents',
    issuer: 'Multiple Institutions',
    date: '2019 - 2025',
    type: 'pdf',
    filename: 'SIMON_EKIPETOT_DOCUMENTS_CLEAN.pdf',
    description: 'Comprehensive collection of professional certificates and training documents from various institutions, demonstrating continuous professional development in data analysis and technology',
  },
];

export default function Certificates() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation activePage="certificates" />
      <main className="pt-32 px-4 pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Certificates</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Professional certifications and training achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gradient">{cert.title}</h3>
                    <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
                <a
                  href={`/certificates/${encodeURIComponent(cert.filename)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm font-semibold group/link"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
