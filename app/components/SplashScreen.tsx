"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={finishLoading}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center"
        >
          <Image
            src="/sgulogo.png"
            alt="SGU Logo"
            width={200} // Set fixed width
            height={200} // Set fixed height
            className="object-contain"
            priority
          />
        </motion.div>
        {/* <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold text-primary mb-4"
        >
          नमो नमः
        </motion.h1> */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold text-primary mb-4"
        >
          || वसुधैव कुटुम्बकम् ||
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-semibold tracking-[0.3em]"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-primary"
          >
            S
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-primary"
          >
            G
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-primary"
          >
            U
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
