import React, { useState } from "react";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Artifacts from "./components/Artifacts";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Contact from "./components/Contact";
import "./App.css";

const navItems = [
  { key: "home", label: "Home" },
  { key: "projects", label: "Projects" },
  { key: "about", label: "About Me" },
  { key: "artifacts", label: "Artifacts" },
  { key: "skills", label: "Skills" },
  { key: "contact", label: "Contact" },
];

function App() {
  const [section, setSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow sticky top-0 z-10 rounded-b-2xl">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          {/* Logo/Initials */}
          <div className="flex items-center gap-2 text-blue-700 font-extrabold text-2xl tracking-tight">
            <span className="bg-blue-100 rounded-full px-3 py-1">NT</span>
          </div>
          {/* Navigation */}
          <nav className="flex flex-wrap gap-2 md:gap-4 justify-center flex-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setSection(item.key)}
                className={`px-4 py-2 rounded transition font-medium ${
                  section === item.key
                    ? "text-blue-600 underline"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          {/* Contact Me Button */}
          <a
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition font-semibold"
          >
            Contact Me
          </a>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <Hero />
        <main className="max-w-3xl mx-auto">
          {section === "home" && <Home />}
          {section === "projects" && <Projects />}
          {section === "about" && <Home />}
          {section === "artifacts" && <Artifacts />}
          {section === "skills" && <Skills />}
          {section === "softskills" && <SoftSkills />}
          {section === "contact" && <Contact />}
        </main>
      </div>
    </div>
  );
}

export default App;
