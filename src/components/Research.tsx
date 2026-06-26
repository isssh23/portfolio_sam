"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FlaskConical, Award } from "lucide-react";

const researchExperience = [
  {
    label: "Undergraduate Thesis Research, CUET",
    period: "2024 – 2025",
    supervisors: "Dr. Rahma Bintey Mufiz Mukta & Md. Shafiul Alam Forhad",
    title:
      "A Blockchain-Enabled Process Adaptation Framework for E-Waste Resource Recovery",
    description:
      "Used smart contracts and dynamic process adaptation to optimize e-waste resource recovery, ensuring transparency, automation, and sustainability.",
    note: "Accepted and presented at the 9th Symposium on Distributed Ledger Technology (SDLT 2025), Melbourne, Australia. To be published in Springer's CCIS.",
  },
  {
    label: "Ongoing Research, CUET",
    period: "2026 – Present",
    supervisors: "Dr. Rahma Bintey Mufiz Mukta",
    title: "Attack Scenarios in Cross-Chain Blockchain Interactions",
    description:
      "Conducting a comprehensive survey and taxonomy of security vulnerabilities and attack patterns in cross-chain communication protocols.",
    note: "Under preparation for journal submission.",
  },
];

const publications = [
  {
    title:
      "A Blockchain-Enabled Process Adaptation Framework for E-Waste Resource Recovery",
    url: "https://link.springer.com/chapter/10.1007/978-981-95-9230-2_1",
    venue: "SDLT 2025",
    venueDetail:
      "9th Symposium on Distributed Ledger Technology, Melbourne, Australia",
    authors: "I. Samiha, R. Mukta, Md. S. A. Forhad",
    publisher: "Springer CCIS",
  },
  {
    title:
      "Blockchain-Based Solutions for E-Waste Management: A Review of Opportunities and Challenges",
    url: "https://ieeexplore.ieee.org/document/10985377",
    venue: "IATMSI 2025",
    venueDetail:
      "IEEE Int'l Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation, Gwalior, India",
    authors: "I. Samiha et al.",
  },
  {
    title:
      "Multi-Blockchain Backup & Restore System with Zero-Knowledge Proofs (ZKPs)",
    url: "https://ieeexplore.ieee.org/document/11160331",
    venue: "NCIM 2025",
    venueDetail:
      "IEEE 2nd Int'l Conference on Next-Generation Computing, IoT, and Machine Learning",
    authors: "I. Samiha et al.",
  },
  {
    title:
      "A Hybrid Deep Learning Approach for Dialect-Specific Sentiment Analysis of Bangla Regional Linguistics",
    url: "https://ieeexplore.ieee.org/document/11160009",
    venue: "NCIM 2025",
    venueDetail:
      "IEEE 2nd Int'l Conference on Next-Generation Computing, IoT, and Machine Learning",
    authors: "I. Samiha et al.",
  },
  {
    title:
      "AI-Based Image Classification and Conservation of Endangered Bird Species in Bangladesh",
    venue: "AICSET 2025",
    venueDetail:
      "Int'l Conference on AI and Cognitive Science for Emerging Technologies, Marrakech, Morocco",
    authors: "I. Samiha et al.",
    status: "In Press",
  },
  {
    title:
      "Venture: A Mosquito Disease Prevention Assistant Smartphone Application with Disease Symptom Checking, Specialist Support, Awareness Features",
    url: "https://ieeexplore.ieee.org/abstract/document/11295605",
    venue: "IEEE",
    venueDetail: "IEEE Conference",
    authors: "I. Samiha et al.",
  },
  {
    title:
      "A Feasibility Study of Hybrid Hydrokinetic and Solar Power Generation at Bandarban Hill Tracts for Off-Grid Communities",
    url: "https://ieeexplore.ieee.org/abstract/document/11013980",
    venue: "ECCE 2025",
    venueDetail:
      "4th Int'l Conference on Electrical, Computer and Communication Engineering",
    authors: "I. Samiha et al.",
  },
];

const awards = [
  {
    title: "Blockchain Olympiad Bangladesh (BCOLBD) 2024",
    date: "September 2024",
    detail: "Finalist among 250+ teams in a national blockchain competition.",
  },
  {
    title: "IEEE CUET Student Branch — FACE THE CASE 2.0",
    date: "2024",
    detail: "Finalist in an IEEE-organised case competition at CUET.",
  },
];

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-container bg-purple-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Research & Publications</h2>

        <div className="max-w-5xl mx-auto space-y-10">

          {/* Research Experience */}
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <FlaskConical size={22} className="text-purple-600" />
              Research Experience
            </h3>
            <div className="space-y-4">
              {researchExperience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <span className="font-bold text-purple-900">{item.label}</span>
                    <span className="text-sm text-gray-500">{item.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    Supervised by {item.supervisors}
                  </p>
                  <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-gray-700 text-sm mb-2">{item.description}</p>
                  <p className="text-sm text-purple-700 italic">{item.note}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <BookOpen size={22} className="text-purple-600" />
              Conference Papers
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="card"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      {pub.url ? (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-purple-900 hover:text-purple-600 hover:underline transition-colors duration-200 mb-1 block"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <p className="font-bold text-purple-900 mb-1">{pub.title}</p>
                      )}
                      <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                      <p className="text-sm text-purple-700">
                        <span className="font-semibold">{pub.venue}</span> — {pub.venueDetail}
                      </p>
                      {pub.publisher && (
                        <p className="text-sm text-gray-600 mt-1">
                          {pub.publisher}
                        </p>
                      )}
                      {pub.status && (
                        <span className="inline-block mt-1 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                          {pub.status}
                        </span>
                      )}
                      {pub.doi && (
                        <p className="text-xs text-gray-500 mt-1">
                          DOI: {pub.doi}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card bg-gradient-to-br from-purple-50 to-white"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Award className="text-purple-600" size={26} />
              <h3 className="text-xl font-bold text-purple-900">
                Achievements & Awards
              </h3>
            </div>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <div key={index} className="flex justify-between items-start flex-wrap gap-1">
                  <div>
                    <p className="font-semibold text-gray-800">{award.title}</p>
                    <p className="text-sm text-gray-600">{award.detail}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{award.date}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
