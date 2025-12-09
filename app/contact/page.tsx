'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation activePage="contact" />
      <main className="pt-32 px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Get In Touch</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Let's discuss how I can help transform your data into actionable insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gradient">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 card">
                    <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200 mb-1">Email</p>
                      <a href="mailto:lochongasimon@gmail.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                        lochongasimon@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 card">
                    <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200 mb-1">Phone</p>
                      <a href="tel:0705137509" className="text-teal-400 hover:text-teal-300 transition-colors">
                        0705137509
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 card">
                    <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200 mb-1">Location</p>
                      <p className="text-gray-300">Lodwar, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="card">
                <h3 className="text-xl font-semibold mb-6 text-gradient">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
