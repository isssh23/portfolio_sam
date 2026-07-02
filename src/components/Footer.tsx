import { Github, Linkedin, Mail, Phone, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-purple-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ishraq Samiha</h3>
              <p className="text-purple-200">
                Lecturer & Researcher in Computer Science
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="mailto:ishraqsamiha60@gmail.com"
                className="hover:text-purple-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ishraq-samiha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/isssh23"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://scholar.google.com/citations?view_op=search_authors&mauthors=ishraq+samiha&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
                aria-label="Google Scholar"
              >
                <GraduationCap size={24} />
              </a>
              <a
                href="tel:+8801795927580"
                className="hover:text-purple-300 transition-colors"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-purple-700 text-center text-purple-200">
            <p>
              &copy; {new Date().getFullYear()} Ishraq Samiha. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
