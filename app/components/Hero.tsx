"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              border: '2px solid currentColor',
              borderRadius: Math.random() > 0.5 ? '50%' : '0%'
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              scale: [1, Math.random() + 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-background to-accent pt-16 overflow-hidden">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            PERA PREMIER
            <br />
            SPORTS CHAMPIONSHIP 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Hosted by Sanjay Ghodawat University
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>7th to 9th April 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Sanjay Ghodawat University</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>₹5 Lakh+ Prize Pool</span>
            </div>
          </div>
          {/* <Button size="lg" className="text-lg px-8">
            Register Now
          </Button> */}
        </motion.div>
      </div>
    </div>
  );
}