'use client';

import { ArrowLeft, FileText, Download, Eye, GraduationCap, Briefcase, Award, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-warm-gradient particle-bg">
      <Navigation activePage="cv" />

      <section className="pt-32 pb-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>

          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
              </div>
            </div>
            <h1 className="section-title">Curriculum Vitae</h1>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-3 sm:mt-4" />
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mt-4 sm:mt-6 px-2">
              Download or view my complete CV to learn more about my experience, skills, and qualifications
            </p>
          </div>

          {/* CV Card */}
          <div className="card-float max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              {/* CV Icon/Preview */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50">
                    <FileText className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* CV Info and Actions */}
              <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 w-full">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient mb-2 sm:mb-3">
                    Simon Ekipetot Lochonga
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-2">
                    Data Analyst & Quality Assurance Officer
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>Updated: November 2025</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>Lodwar, Kenya</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                  <a
                    href="/SIMON_EKIPETOT_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    <span>View CV in Browser</span>
                  </a>
                  <a
                    href="/SIMON_EKIPETOT_CV.pdf"
                    download="SIMON_EKIPETOT_CV.pdf"
                    className="btn-secondary group flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    <span>Download CV</span>
                  </a>
                </div>

                {/* Quick Info */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-blue-500/20">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>PDF Format</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>Full Qualifications</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    <span>Work Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>Certifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Contact Info */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-gradient">Contact</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <a href="mailto:lochongasimon@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>lochongasimon@gmail.com</span>
                </a>
                <a href="tel:0705137509" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>0705137509</span>
                </a>
              </div>
            </div>

            {/* Key Skills */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-gradient">Key Skills</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex flex-wrap gap-2">
                  {['PowerBI', 'SQL', 'Python', 'Excel', 'Data Analysis'].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-xs text-blue-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-gradient">Experience</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <p className="font-semibold text-blue-400">2+ Years</p>
                  <p className="text-xs text-gray-400">Professional Experience</p>
                </div>
                <div>
                  <p className="font-semibold text-cyan-400">Data Analyst</p>
                  <p className="text-xs text-gray-400">Current Position</p>
                </div>
              </div>
            </div>
          </div>

          {/* Note Section */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto px-4">
              For the most up-to-date information about my experience and qualifications, 
              please download or view the complete CV document above.
            </p>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}


