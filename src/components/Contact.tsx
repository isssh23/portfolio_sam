"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, GraduationCap } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ishraqsamiha2000@gmail.com",
    href: "mailto:ishraqsamiha2000@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1795-927580",
    href: "tel:+8801795927580",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ishraq-samiha",
    href: "https://linkedin.com/in/ishraq-samiha",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/isssh23",
    href: "https://github.com/isssh23",
  },
  {
    icon: GraduationCap,
    label: "Google Scholar",
    value: "Google Scholar Profile",
    href: "https://scholar.google.com/citations?view_op=search_authors&mauthors=ishraq+samiha&hl=en&oi=ao",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chittagong, Bangladesh",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="section-container bg-gradient-to-br from-purple-100 via-purple-50 to-white"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Get in Touch</h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card text-center mb-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm always open to discussing research collaborations, teaching
              opportunities, or innovative projects in blockchain, AI, and deep
              learning. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="card hover:scale-105 transition-transform duration-300 block"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <contact.icon className="text-purple-600" size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-600 mb-1">
                          {contact.label}
                        </p>
                        <p className="text-purple-900 font-semibold break-all">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="card">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <contact.icon className="text-purple-600" size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-600 mb-1">
                          {contact.label}
                        </p>
                        <p className="text-purple-900 font-semibold">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
