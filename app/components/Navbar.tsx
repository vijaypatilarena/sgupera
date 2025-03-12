"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-40 border-b"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">SGU PERA PREMIER</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            {/* <Link href="#sports" className="hover:text-primary transition-colors">Sports</Link> */}
            <Link href="#sports" className="hover:text-primary transition-colors">Register</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}