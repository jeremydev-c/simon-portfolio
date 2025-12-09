'use client';

import { motion } from 'framer-motion';
import { Database, Sparkles, Zap } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-amber-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 sm:space-y-10 md:space-y-12 px-4">
        {/* Logo/Icon Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-emerald-600 to-amber-600 p-3 sm:p-4 md:p-5 flex items-center justify-center shadow-2xl shadow-emerald-500/50">
              <Database className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />
            </div>
          </motion.div>
          
          {/* Pulsing Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-emerald-500/30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Text Content */}
        <div className="text-center space-y-4 sm:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient"
          >
            SIMON EKIPETOT
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 uppercase tracking-widest"
          >
            Data Analyst & Quality Assurance
          </motion.p>
        </div>

        {/* Loading Bar */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="w-full h-1 sm:h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          
          {/* Loading Dots */}
          <div className="flex justify-center gap-2 sm:gap-3">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-500"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-xs sm:text-sm md:text-base text-gray-500 uppercase tracking-wider"
        >
          Loading Portfolio...
        </motion.p>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${(i * 16.66) % 100}%`,
                top: `${20 + (i * 15) % 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              {i % 3 === 0 ? (
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-400/30" />
              ) : i % 3 === 1 ? (
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400/30" />
              ) : (
                <Database className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-400/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            ⚡
          </motion.span>
          <span>Preparing your experience</span>
        </motion.div>
      </div>
    </div>
  );
}




