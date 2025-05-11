'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useLoadingIndicator } from '../hooks';

export function LoadingIndicator() {
  const { isLoading, progress } = useLoadingIndicator();
  const controls = useAnimation();

  useEffect(() => {
    if (isLoading) {
      controls.start({
        scaleX: progress / 100,
        transition: { duration: 0.3, ease: 'easeOut' },
      });
    } else {
      controls.start({
        scaleX: 1,
        transition: { duration: 0.2, ease: 'easeOut' },
      });
    }
  }, [isLoading, progress, controls]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 z-[999] h-1.5 w-full overflow-hidden"
          initial={{ y: -4, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -4, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="from-primary-500 to-primary-800 absolute inset-0 origin-left bg-gradient-to-r"
            animate={controls}
            initial={{ scaleX: 0 }}
          >
            <motion.div
              className="via-primary-100/25 absolute inset-0 bg-gradient-to-r from-transparent to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
