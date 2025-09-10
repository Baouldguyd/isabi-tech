import { motion, MotionProps } from 'framer-motion';

interface MicroInteractionProps extends Omit<MotionProps, 'children'> {
  children: React.ReactNode;
  className?: string;
}

 const MicroInteraction: React.FC<MicroInteractionProps> = ({
  children,
  className = '',
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  animate,
  initial,
  transition = { type: "spring", stiffness: 400, damping: 17 },
  ...rest
}) => {
  return (
    <motion.div
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      animate={animate}
      initial={initial}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MicroInteraction;