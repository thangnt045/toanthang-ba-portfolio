import React from "react";

export default function Artifacts() {
  return (
    <section className="p-8 bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">
        Artifacts & Deliverables
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Business Requirements Document (BRD)</li>
        <li>Software Requirements Specification (SRS)</li>
        <li>UX Design (Figma)</li>
        <li className="text-gray-500">
          Sample documents/screenshots can be added here.
        </li>
      </ul>
    </section>
  );
}
