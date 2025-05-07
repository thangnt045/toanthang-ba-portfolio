import React from "react";

export default function Skills() {
  return (
    <section className="p-8 bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">
        Skills & Tools
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          SDLC, software requirement analysis, BRD, SRS, UX design (Figma),
          Flutter, React, JSON, Decision Tree Regressor
        </li>
        <li>
          <span className="font-semibold">Certificates:</span>
          <ul className="list-disc pl-6 mt-2">
            <li>Design User Experiences with Figma (in progress)</li>
            <li>
              Business Process Modeling & Requirement Elicitation (March 2025)
            </li>
            <li>IBM Data Analyst Certification (August 2024, Grade: 88.6%)</li>
            <li>
              MOS - Associate 365 Apps (Word, Excel, PowerPoint) (September
              2024)
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
