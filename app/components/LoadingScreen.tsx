'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, BarChart3, TrendingUp, Code } from 'lucide-react';

const loadingMessages = [
  'Processing data streams...',
  'Analyzing datasets...',
  'Building dashboards...',
  'Visualizing insights...',
  'Validating data quality...',
  'Deploying solutions...',
];

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [dataPoints, setDataPoints] = useState<Array<{ left: string; top: string }>>([]);

  useEffect(() => {
    setMounted(true);
    // Generate data points only on client
    setDataPoints(
      Array.from({ length: 12 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Rotate messages every 1.5 seconds
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);

    // Hide loading screen after 4 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(loadingTimeout);
    };
  }, [mounted]);

  if (!mounted || !isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] flex items-center justify-center"
        >
          {/* Animated Tech Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 via-cyan-900/20 to-teal-900/20"></div>
            
            {/* Circuit Pattern Lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"
                style={{
                  top: `${(i + 1) * 12.5}%`,
                  left: '-100%',
                }}
                animate={{
                  left: ['-100%', '200%'],
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Floating Data Points */}
            {mounted && dataPoints.map((point, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-teal-400 rounded-full"
                style={{
                  left: point.left,
                  top: point.top,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + (i % 3) * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: (i % 4) * 0.25,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Icon Container with Rotation */}
            <motion.div
              className="mb-8 flex justify-center"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-teal-500 to-cyan-500 p-8 rounded-full shadow-2xl">
                  <Database className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
            >
              Simon Ekipetot
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Data Analyst & Quality Assurance
            </motion.p>

            {/* Loading Message */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-teal-400 text-sm md:text-base font-medium mb-8 min-h-[24px]"
              >
                {loadingMessages[currentMessage]}
              </motion.p>
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="w-64 md:w-80 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4, ease: 'easeInOut' }}
              />
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { icon: Code, delay: 0, x: '10%', y: '20%' },
                { icon: TrendingUp, delay: 0.5, x: '85%', y: '30%' },
                { icon: BarChart3, delay: 1, x: '15%', y: '70%' },
                { icon: Database, delay: 1.5, x: '80%', y: '75%' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: item.x,
                      top: item.y,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: 'easeInOut',
                    }}
                  >
                    <Icon className="w-8 h-8 text-teal-400/30" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


