"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1)); // Remove '#' from href
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const sectionId = href.substring(1);
    setActiveSection(sectionId);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-700">
            Ishraq Samiha
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {/* Active background with smooth transition */}
                  {isActive && (
                    <span className="absolute inset-0 bg-purple-600 rounded-lg transition-all duration-300 -z-10"></span>
                  )}
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-purple-700 z-50"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-purple-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
