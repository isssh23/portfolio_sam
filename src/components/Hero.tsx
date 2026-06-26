"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-50 to-white pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left — About Me */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base text-gray-600 leading-relaxed">
              I am a{" "}
              <span className="text-purple-600 font-semibold">
                Lecturer in the Department of Computer Science and Engineering
                at East Delta University, Bangladesh
              </span>
              , and an{" "}
              <span className="text-purple-600 font-semibold">
                M.Sc. student in Computer Science and Engineering
              </span>{" "}
              at Chittagong University of Engineering and Technology (CUET). My
              research interests include{" "}
              <span className="text-purple-600 font-semibold">
                blockchain, cybersecurity, artificial intelligence, LLM
                security, software supply chain security, and cross-chain bridge
                security
              </span>
              , with a focus on building secure, privacy-preserving, and
              trustworthy intelligent systems.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              I have published research in{" "}
              <span className="text-purple-600 font-semibold">
                IEEE conferences and Springer proceedings
              </span>{" "}
              on topics including blockchain, AI, and deep learning. Alongside
              teaching and mentoring students, I am committed to conducting
              impactful research that addresses real-world challenges.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              I am actively seeking{" "}
              <span className="text-purple-600 font-semibold">
                collaborative research opportunities and fully funded Ph.D.
                positions
              </span>{" "}
              in blockchain, cybersecurity, AI, LLM security, software supply
              chain security, and cross-chain security.
            </p>
          </motion.div>

          {/* Right — Profile picture on top, hero content below */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-full p-1.5">
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-100 via-purple-50 to-white overflow-hidden shadow-2xl">
                      <Image
                        src="/images/profile.png"
                        alt="Ishraq Samiha"
                        fill
                        sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                        className="object-cover scale-100"
                        style={{ objectPosition: "center center" }}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Text */}
            <div className="text-center space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-purple-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ishraq Samiha
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-purple-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Lecturer | Researcher | Developer
              </motion.p>

              <motion.p
                className="text-base text-gray-600 max-w-sm mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Passionate about Blockchain, Artificial Intelligence, and Deep
                Learning. Committed to making a positive impact through research
                and education.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="#contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link
                  href="#research"
                  className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-md inline-block text-center"
                >
                  View Research
                </Link>
                <a
                  href="/cv/Ishraq_Samiha_CV.pdf"
                  download="Ishraq_Samiha_CV.pdf"
                  className="bg-purple-100 text-purple-700 px-6 py-3 rounded-full font-medium border-2 border-purple-300 hover:bg-purple-200 transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </motion.div>
            </div>

          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <Link href="#experience" className="inline-block animate-bounce">
            <ArrowDown className="text-purple-600" size={32} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
