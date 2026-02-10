"use client";

import { useState } from "react";
import Link from "next/link";

type Section =
  | "welcome"
  | "academic"
  | "work"
  | "projects"
  | "publications"
  | "hobbies";

export default function Home() {
  const [section, setSection] = useState<Section>("welcome");

  const renderContent = () => {
    switch (section) {
      case "academic":
        return (
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-semibold">Academic Experience</h2>
            <p><b>MSc Computer Science</b> — Universität Paderborn (2025)</p>
            <p><b>BSc Computer Science & Engineering</b> — AIUB (2018)</p>
          </div>
        );

      case "work":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">
              Working Experience
            </h2>

            <div>
              <p className="text-center font-semibold">
                Assistant Manager — McDonald's Germany
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Quality control and compliance monitoring</li>
                <li>Shift planning and inventory tracking</li>
                <li>Workflow efficiency and data accuracy</li>
              </ul>
            </div>

            <div>
              <p className="text-center font-semibold">
                Software Engineer — data edge
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Developed ASP.NET banking applications</li>
                <li>Resolved production defects</li>
                <li>Maintained relational DB servers</li>
              </ul>
            </div>

            <div>
              <p className="text-center font-semibold">
                Teaching Assistant — AIUB
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Led DBMS labs</li>
                <li>Mentored SQL & database design</li>
              </ul>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p>Knowledge Graph Verbalization</p>
            <p>Enhancing Blockchain Efficiency via Median Rule</p>
            <p>Emotion Detection from Speech Signals</p>
          </div>
        );

      case "publications":
        return (
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-semibold">Publications</h2>

            <div>
              <p className="font-semibold">
                Emotion detection from speech signals using voting mechanism on classified frames
              </p>
              <a
                href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rSkW-MkAAAAJ&citation_for_view=rSkW-MkAAAAJ:d1gkVwhDpl0C"
                target="_blank"
                className="text-blue-400 underline"
              >
                View Publication
              </a>
            </div>

            <div>
              <p className="font-semibold">
                A constructive review on pedestrian action detection, recognition and prediction
              </p>
              <a
                href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rSkW-MkAAAAJ&citation_for_view=rSkW-MkAAAAJ:2osOgNQ5qMEC"
                target="_blank"
                className="text-blue-400 underline"
              >
                View Publication
              </a>
            </div>
          </div>
        );

      case "hobbies":
        return (
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-semibold">Hobbies</h2>
            <p>Earn • Travel • Cricket</p>
          </div>
        );

      default:
        return (
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-semibold">
              Md Jannatul Baki Showmik
            </h2>
            <p>
              Software Engineer with MSc in Computer Science experienced in
              backend systems, SQL, and development.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* LOGIN — ABSOLUTE RIGHT (Guaranteed) */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="flex justify-end p-6 pointer-events-auto">
          <Link
            href="/login"
            className="px-4 py-2 bg-white text-black rounded-lg font-semibold shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>

      {/* HEADER */}
      <div className="border-b border-slate-700 py-5">
        <h1
          onClick={() => setSection("welcome")}
          className="text-3xl font-semibold text-center cursor-pointer"
        >
          Welcome to Example
        </h1>
      </div>

      {/* BODY */}
      <div className="flex">

        {/* SIDEBAR */}
        <div className="w-64 border-r border-slate-700 p-4 space-y-2">
          <Side label="Academic Exp" onClick={() => setSection("academic")} />
          <Side label="Working Exp" onClick={() => setSection("work")} />
          <Side label="Projects" onClick={() => setSection("projects")} />
          <Side label="Publications" onClick={() => setSection("publications")} />
          <Side label="Hobbies" onClick={() => setSection("hobbies")} />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex-1 min-h-[calc(100vh-120px)] flex items-center justify-center p-8">
          <div className="max-w-2xl w-full bg-slate-800 rounded-xl p-8 shadow-xl">
            {renderContent()}
          </div>
        </div>

      </div>
    </div>
  );
}

function Side({ label, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
    >
      {label}
    </button>
  );
}
