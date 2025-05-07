import React from "react";

export default function Projects() {
  return (
    <section className="p-8 bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Projects</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-400 pl-4">
          <h3 className="font-semibold">
            FutureLens{" "}
            <span className="text-xs text-gray-500">
              (Full-Stack Developer, Flutter, Team size: 4)
            </span>
          </h3>
          <p>
            Built a Flutter app using Decision Tree Regressor to predict student
            outcomes. Features intuitive UI and clear documentation.
          </p>
        </div>
        <div className="border-l-4 border-green-400 pl-4">
          <h3 className="font-semibold">
            UniConnect{" "}
            <span className="text-xs text-gray-500">
              (Project Manager, React, Team size: 3)
            </span>
          </h3>
          <p>
            Developed a React-based event platform for university use, enabling
            student registration and faculty event management. Used Scrum-based
            delivery and a lightweight JSON backend.
          </p>
        </div>
      </div>
    </section>
  );
}
