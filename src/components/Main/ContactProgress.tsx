"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ContactProgressProps {
  currentStep: number;
  totalSteps: number;
}

const ContactProgress: React.FC<ContactProgressProps> = ({ currentStep, totalSteps }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatedProgress = (currentStep / totalSteps) * 100;
    setProgress(calculatedProgress);
  }, [currentStep, totalSteps]);

  const steps = [
    { id: 1, label: "Contact Info" },
    { id: 2, label: "Project Details" },
    { id: 3, label: "Budget" },
    { id: 4, label: "Message" }
  ];

  return (
    <div className="mb-10">
      <div className="flex justify-between mb-4">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                step.id <= currentStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
              initial={false}
              animate={{
                scale: step.id === currentStep ? 1.2 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {step.id}
            </motion.div>
            <span className="text-sm text-center w-20">
              {step.label}
            </span>
          </div>
        ))}
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      
      <div className="text-center mt-4 text-gray-600">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
};

export default ContactProgress;