import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl shadow mb-8 mt-8">
      <div className="flex-1">
        <div className="mb-2 text-lg text-blue-600 font-semibold">Hello!</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          I'm <span className="text-blue-600 underline">Nguyen Toan Thang</span>
          ,<br />
          Business Analyst & Software Engineer Enthusiast
        </h1>
        <p className="text-gray-700 mb-6 max-w-xl">
          Passionate about leveraging technology and data to solve real-world
          business problems and drive strategic growth.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
          <a
            href="https://linkedin.com/in/toanthang045/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0 relative">
        <div className="absolute w-48 h-48 bg-blue-200 rounded-full -z-10 top-4 left-4 blur-xl"></div>
        <img
          src="/personal_image.jpeg"
          alt="Nguyen Toan Thang"
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-300 shadow-lg z-10"
        />
      </div>
    </section>
  );
}
