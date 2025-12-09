'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { Download, Eye, FileText, Mail, Phone, MapPin, Calendar } from 'lucide-react';

export default function CV() {
  const cvUrl = '/SIMON_EKIPETOT_CV.pdf';
  const cvFileName = 'SIMON_EKIPETOT_CV.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation activePage="cv" />
      <main className="pt-32 px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-10 h-10 text-teal-400" />
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">Curriculum Vitae</h1>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              View or download my complete professional resume
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-8 flex-wrap"
          >
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              View CV
            </a>
            <button
              onClick={handleDownload}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card mb-8"
          >
            <div className="aspect-[8.5/11] w-full bg-gray-900 rounded-lg overflow-hidden border border-teal-500/20">
              <iframe
                src={`${cvUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full"
                title="Simon Ekipetot CV"
              />
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="card text-center">
              <Mail className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a href="mailto:lochongasimon@gmail.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                lochongasimon@gmail.com
              </a>
            </div>
            <div className="card text-center">
              <Phone className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">Phone</p>
              <a href="tel:0705137509" className="text-teal-400 hover:text-teal-300 transition-colors">
                0705137509
              </a>
            </div>
            <div className="card text-center">
              <MapPin className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">Location</p>
              <p className="text-gray-300">Lodwar, Kenya</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

