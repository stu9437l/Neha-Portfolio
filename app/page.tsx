"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import {
  Moon,
  Sun,
  Download,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  Send,
  ChevronDown,
  Menu,
  X,
  Code,
  Zap,
  Palette,
  Database,
  Cloud,
  Shield,
  Phone,
} from "lucide-react";
import ContactForm from "./components/ContactForm";

const Portfolio = () => {
  const [theme, setTheme] = useState("dark");
  const [activeTab, setActiveTab] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const skills = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Frontend Development",
      items: [
        { name: "Angular", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML / CSS", level: 90 },
        { name: "Dashboard & Data Visualization", level: 88 },
        { name: "Form Handling & Validation", level: 90 },
        { name: "Responsive UI Design", level: 85 },
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend, APIs & Architecture",
      items: [
        { name: ".NET (.NET 5 / 6 / 8)", level: 92 },
        { name: "C#", level: 88 },
        { name: "RESTful API Development", level: 95 },
        { name: "Clean Architecture", level: 95 },
        { name: "API Versioning", level: 90 },
        { name: "Code Refactoring & Query Optimization", level: 92 },
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Engineering Practices",
      items: [
        { name: "Identity Server (AuthN & AuthZ)", level: 92 },
        { name: "Role & Permission-based Authorization", level: 95 },
        { name: "Digital Signatures & Certificates", level: 88 },
        { name: "QR Payment Processing", level: 90 },
        { name: "Payment Gateway Integration", level: 88 },
        { name: "Git & Version Control", level: 90 },
      ],
    },
  ];

  const projects = [
    {
      title: "IPOS & Bank Portal",
      description:
        "POS device lifecycle management system with bank-side integration via IMARK for secure POS operations.",
      metrics: { performance: 97, accessibility: 99, seo: 98 },
      features: [
        "POS device deployment & configuration management",
        "Reconfiguration, support, and maintenance tracking",
        "IMARK integration for bank-side POS actions",
        "Code refactor and database query optimization",
      ],
      tags: ["React", "Next.js", "Prisma", "MySQL", "IMARK"],
      users: "Enterprise Banking Use",
      logo: "/assets/logos/ipos-logo.png", // replace with actual path
      image: "/assets/images/ipos-screenshot.png", // replace with actual path
    },
    {
      title: "ICMS – IMARK Card Management System",
      description:
        "Card issuing platform enabling banks to issue cards to cooperatives with multi-stage processing and switch integration.",
      metrics: { performance: 96, accessibility: 98, seo: 97 },
      features: [
        "Card issuance workflow for cooperatives",
        "BTRT generation and processing",
        "Integration with NEPS switch",
        "Upgraded .NET from 5 → 6 → 8",
        "System-wide refactor and query optimization",
      ],
      tags: [".NET 8", "IMARK", "Card Management", "NEPS"],
      users: "Banking & Cooperative Sector",
      logo: "/assets/logos/icms-logo.png",
      image: "/assets/images/icms-screenshot.png",
    },
    {
      title: "fewa Card Portal",
      description:
        "End-to-end card management portal for managing debit and credit cards issued by banks.",
      metrics: { performance: 98, accessibility: 100, seo: 99 },
      features: [
        "Debit & credit card lifecycle management",
        "Clean architecture with RESTful APIs",
        "Secure card operations and controls",
        "Built from scratch with full project ownership",
      ],
      tags: ["React", "Next.js", "REST API", "Clean Architecture"],
      users: "Bank Customers",
      logo: "/assets/logos/fewa-card-logo.png",
      image: "/assets/images/fewa-card-screenshot.png",
    },
    {
      title: "Fewa MMS – Merchant Management System",
      description:
        "Merchant payment system supporting real-time QR-based payments and merchant onboarding.",
      metrics: { performance: 97, accessibility: 99, seo: 98 },
      features: [
        "Real-time QR payment processing",
        "Merchant onboarding with auto-generated QR codes",
        "QR generation, scanning & validation APIs",
        "Secure transaction processing",
      ],
      tags: ["React", "Node.js", "QR Payments", "PostgreSQL"],
      users: "Merchants & Payment Partners",
      logo: "fewa-mms-logo.svg",
      image: "/projects/mms.png",
    },
    {
      title: "Fewa Merchant Portal",
      description:
        "Interactive merchant dashboard for transaction monitoring, settlements, and reporting with third-party payment integrations.",
      metrics: { performance: 98, accessibility: 100, seo: 99 },
      features: [
        "Dashboard for balance, settlements & transactions",
        "Advanced filters and search for transaction tracking",
        "Real-time financial updates",
        "Detailed payment & settlement reports",
        "Integrations with Visa, Mastercard, Fonepay & Nepalypage",
      ],
      tags: ["React", "Analytics", "Payments", "Visa", "Mastercard"],
      users: "1K+ Merchants",
      logo: "fewa-merchant-logo.svg",
      image: "/projects/mms.png",
    },
  ];

  const education = [
    {
      title: "Master’s Degree – MSc CSIT",
      institution:
        "Central Department of Computer Science and Information Technology, Tribhuvan University",
      year: "2025",
      description:
        "Advanced postgraduate program focused on software engineering, distributed systems, and modern computing paradigms.",
      highlights: [
        "Advanced software architecture & system design",
        "Research-oriented coursework",
        "Strong focus on real-world problem solving",
        "Exposure to scalable and secure systems",
      ],
      tags: ["Software Engineering", "Distributed Systems", "Research"],
      level: "Postgraduate",
    },
    {
      title: "Bachelor’s Degree – BSc CSIT",
      institution: "PadmaKanya Multiple Campus, Tribhuvan University",
      year: "2023",
      description:
        "Comprehensive undergraduate program covering core computer science foundations and practical application development.",
      highlights: [
        "Strong foundation in data structures & algorithms",
        "Web & mobile application development",
        "Database systems & operating systems",
        "Team-based academic projects",
      ],
      tags: ["Computer Science", "Web Development", "Databases"],
      level: "Undergraduate",
    },
    {
      title: "Science (+2 / ISC)",
      institution: "National Examination Board (NEB)",
      year: "2018",
      description:
        "Higher secondary education with a focus on science and analytical thinking.",
      highlights: [
        "Physics, Chemistry & Mathematics",
        "Problem-solving oriented curriculum",
        "Foundation for computer science studies",
      ],
      tags: ["Science", "Mathematics", "Physics"],
      level: "Higher Secondary",
    },
    {
      title: "School Leaving Certificate (SLC)",
      institution: "Government School",
      year: "2016",
      description:
        "Secondary level education building academic discipline and core learning skills.",
      highlights: [
        "Strong academic fundamentals",
        "Early exposure to science subjects",
        "Discipline and consistency in studies",
      ],
      tags: ["Secondary Education", "Foundations"],
      level: "School",
    },
  ];

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === "dark" ? "dark" : "light"}
        toastClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm px-4 py-2 rounded-md shadow-lg"
      />
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
        }
        
        .progress-bar {
          transition: width 1s ease-out;
        }

        .scroll-indicator {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
        {/* Header */}
        <header
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled
              ? theme === "dark"
                ? "bg-gray-900/95 backdrop-blur-lg shadow-lg"
                : "bg-white/95 backdrop-blur-lg shadow-lg"
              : "bg-transparent"
          }`}
        >
          <nav className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg shadow-lg animate-pulse">
                NC
              </div>
              <span
                className={`font-bold text-xl ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Neha Chand
              </span>
            </div>

            {/* Nav Buttons */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle (Square, no border, light colors) */}
              <button
                onClick={toggleTheme}
                className={`w-10 h-10 flex items-center justify-center rounded-md transition-all hover:scale-105 ${
                  theme === "dark"
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>

              {/* Download CV */}
              <a
                href="/Neha_Chand_CV.pdf"
                target="_blank"
                className={`w-10 h-10 flex md:hidden items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105 font-medium  ${
                  theme === "dark"
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <Download className="w-5 h-5" />
              </a>
              <a
                href="/Neha_Chand_CV.pdf"
                target="_blank"
                className="hidden md:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105 font-medium"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          {/* Background Accents */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              {/* Name */}
              <h1
                className={`text-4xl md:text-6xl font-extrabold mb-3 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Neha Chand
              </h1>

              {/* Role */}
              <h2 className="text-xl md:text-2xl font-semibold gradient-text mb-5">
                Software Developer · Angular & .NET
              </h2>

              {/* Summary */}
              <p
                className={`text-base md:text-lg leading-relaxed mb-8 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Highly motivated computer science professional with strong
                experience in
                <span className="font-semibold text-indigo-400">
                  {" "}
                  Angular{" "}
                </span>{" "}
                and
                <span className="font-semibold text-indigo-400"> .NET</span>.
                Passionate about building secure, scalable web applications in
                fintech environments and continuously learning modern
                technologies through real-world projects.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center mb-10">
                {[
                  "Angular",
                  ".NET 8",
                  "Clean Architecture",
                  "REST APIs",
                  "Identity Server",
                  "RBAC / Permissions",
                  "API Versioning",
                  "Digital Signatures",
                  "Git",
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                      theme === "dark"
                        ? "bg-gray-800 text-gray-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 justify-center mb-10">
                <a
                  href="#work"
                  className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all font-medium text-sm md:text-base"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className={`px-6 py-2 md:px-8 md:py-3 border-2 rounded-full font-medium text-sm md:text-base transition-all ${
                    theme === "dark"
                      ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Contact Me
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center mb-8">
                <a
                  href="https://github.com/nehachand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 md:p-3 rounded-full transition-all duration-300 border ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-800/40 text-gray-200 hover:bg-gray-700 hover:text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Github className="w-4 md:w-5 h-4 md:h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/neha-chand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 md:p-3 rounded-full transition-all duration-300 border ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-800/40 text-gray-200 hover:bg-gray-700 hover:text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Linkedin className="w-4 md:w-5 h-4 md:h-5" />
                </a>
              </div>

              {/* Scroll */}
              <div className="scroll-indicator">
                <ChevronDown
                  className={`w-6 md:w-8 h-6 md:h-8 mx-auto animate-bounce ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                />
                <p
                  className={`text-xs md:text-sm mt-1 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Scroll to explore
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section
          className={`py-16 ${
            theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
          }`}
        >
          <div className="container mx-auto px-4">
            <h2
              className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Technical Expertise
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl card-hover ${
                    theme === "dark" ? "bg-gray-900" : "bg-white"
                  } shadow-lg`}
                >
                  {/* Icon */}
                  <div className="text-indigo-500 mb-3 text-2xl">
                    {skill.icon}
                  </div>

                  {/* Skill Title */}
                  <h3
                    className={`text-lg font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {skill.title}
                  </h3>

                  {/* Skill Items */}
                  <div className="space-y-3">
                    {skill.items.map((item, itemIdx) => (
                      <div key={itemIdx}>
                        <div className="flex justify-between text-sm mb-1">
                          <span
                            className={
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }
                          >
                            {item.name}
                          </span>
                          <span className="text-indigo-500 font-medium">
                            {item.level}%
                          </span>
                        </div>
                        <div
                          className={`h-2 rounded-full overflow-hidden ${
                            theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="work" className="py-16 relative">
          <div className="container mx-auto px-4">
            <h2
              className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Featured Projects
            </h2>

            <div className="space-y-10 max-w-6xl mx-auto">
              {projects.map((project, idx) => {
                const bgClass =
                  theme === "dark"
                    ? "bg-gray-900 border-white/5 text-white"
                    : "bg-white border-gray-200 text-gray-900";
                const textClass =
                  theme === "dark"
                    ? "text-gray-400 text-sm"
                    : "text-gray-600 text-sm";

                return (
                  <div
                    key={idx}
                    className={`relative rounded-2xl overflow-hidden shadow-md transform transition-transform hover:-translate-y-1 hover:scale-102 duration-200 border ${bgClass}`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                    <div className="grid grid-cols-12 gap-6 p-4 md:p-6">
                      {/* LEFT – MAIN CONTENT (7/12) */}
                      <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
                        {project.logo && (
                          <div className="mb-3">
                            <img
                              src={project.logo}
                              alt={`${project.title} logo`}
                              className="h-8 w-auto object-contain"
                            />
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                          {project.title}
                        </h3>

                        <p className={textClass}>{project.description}</p>

                        <div className="px-3 py-1 mt-2 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-500">
                          {project.users}
                        </div>
                        {project.image && (
                          <div className="col-span-12 lg:col-span-5 flex md:hidden items-center justify-center mt-3">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700 max-h-48 object-cover"
                            />
                          </div>
                        )}

                        {/* Features */}
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2 text-sm">
                            Key Responsibilities & Implementation
                          </h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
                                className={`flex gap-2 items-start ${textClass}`}
                              >
                                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* RIGHT – PROJECT IMAGE (5/12) */}
                      {project.image && (
                        <div className="col-span-12 lg:col-span-5 hidden md:flex items-center justify-center">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-lg shadow-md border border-gray-200 dark:border-gray-700 max-h-48 object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Education */}
        <section
          className={`py-16 ${
            theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
          }`}
        >
          <div className="container mx-auto px-4">
            <h2
              className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Education
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl shadow-lg card-hover ${
                    theme === "dark" ? "bg-gray-900" : "bg-white"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-indigo-500">
                      {edu.year}
                    </span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        theme === "dark"
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {edu.level}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-1 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {edu.title}
                  </h3>

                  <p
                    className={`text-sm mb-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {edu.institution}
                  </p>

                  <p
                    className={`text-sm mb-4 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {edu.highlights.map((item, i) => (
                      <li
                        key={i}
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full ${
                          theme === "dark"
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-16 relative">
          {/* Background Accent */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-24 left-24 w-56 h-56 bg-indigo-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-24 right-24 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className={`text-2xl md:text-3xl font-bold mb-3 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Let’s Build Something Great Together
              </h2>
              <p
                className={`text-sm md:text-base ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Open to full-time roles, contract work, and fintech projects.
                Let’s discuss how I can add value to your team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {/* LEFT – CONTACT DETAILS */}
              <div
                className={`relative p-4 rounded-2xl shadow-md overflow-hidden ${
                  theme === "dark" ? "bg-gray-900/90" : "bg-white"
                }`}
              >
                <div className="absolute inset-0 rounded-2xl border border-indigo-500/20 pointer-events-none" />

                <h3
                  className={`text-lg font-bold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Contact Information
                </h3>

                <div className="space-y-3">
                  {/* Location */}
                  <div
                    className={`flex items-center gap-2 p-2 rounded-lg transition ${
                      theme === "dark"
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="p-1 rounded-full bg-indigo-500/15">
                      <MapPin className="w-3 h-3 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p
                        className={`font-medium ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <a
                    href="mailto:neha-chand20011@gmail.com"
                    className={`flex items-center gap-2 p-2 rounded-lg transition ${
                      theme === "dark"
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="p-1 rounded-full bg-indigo-500/15">
                      <Mail className="w-3 h-3 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="font-medium text-indigo-500">
                        neha-chand20011@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:9869913637"
                    className={`flex items-center gap-2 p-2 rounded-lg transition ${
                      theme === "dark"
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="p-1 rounded-full bg-indigo-500/15">
                      <Phone className="w-3 h-3 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="font-medium text-indigo-500">
                        +977 9869913637
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              {/* RIGHT – CONTACT FORM */}
              <ContactForm theme={theme} />
              {/* <div
              className={`relative p-4 rounded-2xl shadow-md overflow-hidden backdrop-blur-md ${
                theme === "dark" ? "bg-gray-800/80" : "bg-white"
              }`}
            >
              <div className="absolute inset-0 rounded-2xl border border-indigo-500/20 pointer-events-none" />

              <h3
                className={`text-lg font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Send a Message
              </h3>

              <div className="space-y-3 relative z-10">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-3 py-2 rounded-lg border-2 outline-none text-sm transition ${
                    theme === "dark"
                      ? "bg-gray-900 text-white border-gray-700 focus:border-indigo-500"
                      : "bg-gray-50 text-gray-900 border-gray-200 focus:border-indigo-500"
                  }`}
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-3 py-2 rounded-lg border-2 outline-none text-sm transition ${
                    theme === "dark"
                      ? "bg-gray-900 text-white border-gray-700 focus:border-indigo-500"
                      : "bg-gray-50 text-gray-900 border-gray-200 focus:border-indigo-500"
                  }`}
                />

                <textarea
                  placeholder="Your Message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-3 py-2 rounded-lg border-2 outline-none text-sm transition ${
                    theme === "dark"
                      ? "bg-gray-900 text-white border-gray-700 focus:border-indigo-500"
                      : "bg-gray-50 text-gray-900 border-gray-200 focus:border-indigo-500"
                  }`}
                />

                <button
                  onClick={handleSubmit}
                  className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-md transition flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div> */}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`py-4 border-t ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="container mx-auto px-4 text-center">
            <p
              className={`${
                theme === "dark" ? "text-gray-500" : "text-gray-600"
              } text-sm`}
            >
              © {new Date().getFullYear()} Neha Chand. Designed with ❤️
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
