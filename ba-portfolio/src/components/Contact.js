import React from "react";

export default function Contact() {
  return (
    <section className="p-8 bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Contact</h2>
      <div className="space-y-2">
        <p>
          Email:{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:toanthang.forwork@gmail.com"
          >
            toanthang.forwork@gmail.com
          </a>
        </p>
        <p>Phone: 0707 548 574</p>
        <p>Location: District 7, Ho Chi Minh City</p>
        <p>
          LinkedIn:{" "}
          <a
            className="text-blue-600 underline"
            href="https://linkedin.com/in/toanthang045/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/toanthang045/
          </a>
        </p>
      </div>
    </section>
  );
}
