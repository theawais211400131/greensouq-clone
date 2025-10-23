"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/public/images (1).jpeg"
import img2 from "@/public/images (2).jpeg"
import img3 from "@/public/images.jpeg"

export default function HeroSection() {
  const plantImages = [
    { src: img1, alt: "Large indoor plant" },
    { src: img2, alt: "Orchid plant" },
    { src: img3, alt: "Monstera plant" },
  ];

  return (
    <section className="w-full bg-white px-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          // 🟩 3-column grid for large screens, adjusts on smaller devices
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {plantImages.map((plant, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={plant.src}
                alt={plant.alt}
                width={350}
                height={400}
                className="w-full h-[450px] object-cover shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
