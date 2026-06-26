"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const jobs = [
  {
    title: "Lecturer, Dept. of CSE",
    institution: "East Delta University Bangladesh",
    period: "January 2026 – Present",
    location: "Chittagong, Bangladesh",
    description:
      "Teaching Computer Graphics Lab and undergraduate mathematics courses, including Numerical Analysis, Fourier and Laplace Transforms, Complex Variables, and Vector Analysis. In addition to teaching, I grade and evaluate students' coursework and examination scripts, provide academic guidance and mentoring, and actively engage in student extracurricular and co-curricular activities to support their overall development.",
  },
  {
    title: "Lecturer, Dept. of CSIT",
    institution: "Southern University Bangladesh",
    period: "July 2025 – January 2026",
    location: "Chittagong, Bangladesh",
    description:
      "Taught Algorithm Design and Analysis, Artificial Intelligence, Compiler Design, Mobile App Development, and System Analysis and Design through both lectures and lab sessions. Beyond classroom teaching, I evaluated assignments and examination scripts, participated in academic seminars and departmental activities, and served as an anchor for several co-curricular events. I also worked closely with students in programming contests and other extracurricular initiatives, helping foster their technical skills, teamwork, and professional growth.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container bg-purple-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Work Experience</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Briefcase className="text-purple-600" size={24} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-900 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-lg text-purple-700 font-semibold mb-2">
                    {job.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-purple-900 mb-1">
                Industrial Attachment
              </h3>
              <p className="text-purple-700 font-semibold mb-3">
                Softrobotics Bangladesh Limited
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• SQL fundamentals and data management with Laragon</li>
                <li>• Laravel MVC, Eloquent ORM, and routing</li>
                <li>• ACLs and secure database design</li>
                <li>• Telemedicine platform with RBAC</li>
                <li>• Version control using Git and GitHub</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-purple-900 mb-1">
                C# and .NET Training
              </h3>
              <p className="text-purple-700 font-semibold mb-3">
                CUET Edge Course
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• C# fundamentals, OOP, and data structures</li>
                <li>• ASP.NET Web Forms and ASP.NET 6.0 with SQL Server</li>
                <li>• Authentication, Entity Framework, and Web APIs</li>
                <li>• BI tools (SSRS, RDLC)</li>
                <li>• Full-stack project with real-time data handling</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
