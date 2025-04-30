// components/ProjectShowcase.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ProjectShowcase({ projects, styling }) {
    const [selectedProject, setSelectedProject] = useState(null);
  
    return (
      <section className={`py-12 px-4 h-screen md:px-12 ${styling}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          My Projects
        </h2>
  
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-30 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-zinc-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-2 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
  
        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-zinc-900 rounded-xl max-w-2xl w-full p-6 relative shadow-lg"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-3 text-zinc-500 hover:text-zinc-800 dark:hover:text-white text-xl"
                >
                  &times;
                </button>
  
                <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
  
                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {selectedProject.gallery?.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt={`${selectedProject.title} - ${i}`}
                      className="w-full h-32 object-cover rounded-md"
                    />
                  ))}
                </div>
  
                <p className="text-gray-700 dark:text-zinc-300 mb-4">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
  
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                >
                  Visit Project
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  }