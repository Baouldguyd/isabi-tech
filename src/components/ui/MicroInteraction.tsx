"use client";

import { motion } from 'framer-motion';
import React from 'react';

interface MicroInteractionProps {
  children: React.ReactNode;
  className?: string;
  whileHover?: any;
  whileTap?: any;
  animate?: any;
  initial?: any;
  transition?: any;
}

const MicroInteraction: React.FC<MicroInteractionProps> = ({
  children,
  className = '',
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  animate,
  initial,
  transition = { type: "spring", stiffness: 400, damping: 17 }
}) => {
  return (
    <motion.div
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      animate={animate}
      initial={initial}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default MicroInteraction;