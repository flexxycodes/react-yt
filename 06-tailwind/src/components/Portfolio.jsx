import React from "react";

export default function Portfolio() { return ( <div className="min-h-screen bg-gray-900 text-white"> {/* Navbar */} <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50"> <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"> <h1 className="text-xl font-bold">Mahfuz</h1> <div className="space-x-6 hidden md:block"> <a href="#about" className="hover:text-blue-400">About</a> <a href="#projects" className="hover:text-blue-400">Projects</a> <a href="#skills" className="hover:text-blue-400">Skills</a> <a href="#contact" className="hover:text-blue-400">Contact</a> </div> </div> </nav>

{/* Hero Section */}
  <section className="pt-28 pb-20 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Student Web Developer
    </h2>
    <p className="text-gray-400 max-w-xl mx-auto">
      I build clean, responsive websites and web apps using the MERN stack.
      Passionate about learning, building, and solving real problems.
    </p>
  </section>

  {/* About */}
  <section id="about" className="max-w-6xl mx-auto px-6 py-16">
    <h3 className="text-3xl font-semibold mb-6">About Me</h3>
    <p className="text-gray-300 leading-relaxed">
      I'm a CBSE student and an aspiring full-stack web developer. I enjoy
      working with JavaScript, React, and backend technologies. I use AI
      tools smartly to speed up development while fully understanding the
      code I write.
    </p>
  </section>

  {/* Skills */}
  <section id="skills" className="bg-gray-800 py-16">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-semibold mb-8">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          "HTML",
          "CSS / Tailwind",
          "JavaScript",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Git & GitHub",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-gray-900 rounded-xl p-4 text-center shadow"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Projects */}
  <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
    <h3 className="text-3xl font-semibold mb-8">Projects</h3>
    <div className="grid md:grid-cols-3 gap-6">
      {[1, 2, 3].map((p) => (
        <div
          key={p}
          className="bg-gray-800 rounded-xl p-6 shadow hover:scale-105 transition"
        >
          <h4 className="text-xl font-semibold mb-2">Project {p}</h4>
          <p className="text-gray-400 mb-4">
            Short description of the project, what it does and which
            technologies were used.
          </p>
          <a href="#" className="text-blue-400 hover:underline">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="bg-gray-800 py-16">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-semibold mb-6">Contact</h3>
      <p className="text-gray-400 mb-4">
        Looking for a simple website or a student-friendly developer?
      </p>
      <p className="text-gray-300">Email: yourname@email.com</p>
    </div>
  </section>

  {/* Footer */}
  <footer className="text-center py-6 text-gray-500">
    © {new Date().getFullYear()} Mahfuz. All rights reserved.
  </footer>
</div>

); }