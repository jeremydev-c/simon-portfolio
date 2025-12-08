'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Work() {
  const projects = [
    {
      id: 1,
      title: 'Brand Identity Project',
      category: 'Branding',
      description: 'Complete visual identity transformation for a leading company.',
    },
    {
      id: 2,
      title: 'Digital Platform Design',
      category: 'UI/UX',
      description: 'User-centered design for a revolutionary digital platform.',
    },
    {
      id: 3,
      title: 'Creative Campaign',
      category: 'Marketing',
      description: 'Multi-channel creative campaign with exceptional results.',
    },
  ];

  return (
    <div className="min-h-screen bg-warm-gradient particle-bg">
      <Navigation activePage="work" />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-16">
            <h2 className="section-title">My Work</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
              A collection of projects that showcase creativity, technical expertise, and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="card group cursor-pointer"
              >
                <div className="w-full h-48 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-500 mb-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-colors flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-white opacity-50 group-hover:opacity-75 transition-opacity" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Link
                  href={`/work/${project.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-cyan-400 transition-colors"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

