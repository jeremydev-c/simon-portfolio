'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-warm-gradient particle-bg">
      <Navigation activePage="contact" />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-16">
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
              Have a project in mind? I'd love to hear from you. Let's start a conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-2xl font-bold text-gradient mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-emerald-500/20 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-emerald-500/20 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-emerald-500/20 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-emerald-500/20 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-100 resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                  <Send className="w-4 h-4 ml-2 inline" />
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="text-2xl font-bold text-gradient mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a href="mailto:lochongasimon@gmail.com" className="flex items-start gap-4 group">
                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                      <Mail className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-1">Email</h4>
                      <p className="text-gray-400 group-hover:text-emerald-400 transition-colors">
                        lochongasimon@gmail.com
                      </p>
                    </div>
                  </a>
                  <a href="tel:0705137509" className="flex items-start gap-4 group">
                    <div className="p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                      <Phone className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-1">Phone</h4>
                      <p className="text-gray-400 group-hover:text-amber-400 transition-colors">
                        0705137509
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-1">Location</h4>
                      <p className="text-gray-400">
                        Lodwar, Kenya
                        <br />
                        Available for remote work and travel
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-gradient mb-4">Connect on Social</h3>
                <div className="flex gap-4">
                  <a href="#" className="p-4 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg transition-colors">
                    <Linkedin className="w-6 h-6 text-emerald-400" />
                  </a>
                  <a href="#" className="p-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg transition-colors">
                    <Github className="w-6 h-6 text-amber-400" />
                  </a>
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



