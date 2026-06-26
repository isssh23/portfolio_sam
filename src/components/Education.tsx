"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "MSc in Computer Science and Engineering",
    institution: "Chittagong University of Engineering and Technology",
    period: "July 2025 – Present",
    location: "Chittagong, Bangladesh",
    icon: GraduationCap,
  },
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "Chittagong University of Engineering and Technology",
    period: "February 2020 – June 2025",
    location: "Chittagong, Bangladesh",
    grade: "CGPA: 3.72 / 4.00",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Chittagong College",
    period: "2019",
    location: "Chittagong, Bangladesh",
    grade: "GPA: 5.00 / 5.00",
    icon: Award,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "St. Scholastica's Girls' High School, Chittagong",
    period: "2017",
    location: "Chittagong, Bangladesh",
    grade: "GPA: 5.00 / 5.00",
    icon: Award,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Education</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <edu.icon className="text-purple-600" size={24} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-purple-700 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div>
                      <p className="text-gray-600">{edu.period}</p>
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                    </div>
                    {edu.grade && (
                      <p className="text-purple-600 font-semibold">{edu.grade}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
