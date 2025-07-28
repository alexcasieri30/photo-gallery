'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

type Props = {
  text: string;
};

export const AnimatedText = ({ text }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // animate every time it enters
    threshold: 0.8, // visible when 50% of component is in view
  });

  const letters = text.split('');

  return (
    <motion.div ref={ref} className="overflow-hidden text-3xl font-bold td-underline" whileHover={{
        scale: 1.1, color: '#2563eb'
    }}>
      <AnimatePresence>
        {inView &&
          letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="inline-block"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
      </AnimatePresence>
    </motion.div>
  );
};
