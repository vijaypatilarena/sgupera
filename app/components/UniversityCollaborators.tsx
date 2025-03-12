"use client";

import { motion } from "framer-motion";

const UNIVERSITIES = [
  { name: "MIT", logo: "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Harvard", logo: "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Stanford", logo: "https://images.unsplash.com/photo-1605292356140-b8ad2edccb63?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Oxford", logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Cambridge", logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=200&h=200" },
  // Add more universities to reach 20
].concat(Array(15).fill(null).map((_, i) => ({
  name: `University ${i + 6}`,
  logo: `https://images.unsplash.com/photo-${1580000000000 + i}?auto=format&fit=crop&q=80&w=200&h=200`
})));

export default function UniversityCollaborators() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Esteemed Member Universities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {UNIVERSITIES.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square relative group"
            >
              <div className="absolute inset-0 bg-accent rounded-lg overflow-hidden">
                <img
                  src={university.logo}
                  alt={university.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">{university.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}