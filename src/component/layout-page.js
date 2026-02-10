import React, { useState } from "react";
import { Phone, Mail, Linkedin, Github, Menu, X } from "lucide-react";
import { School, BookOpen, Monitor, GraduationCap } from 'lucide-react';
import myprofile from "../assets/myProfile.png";
import ProjectCard from "./project-cards";
import { HashLink } from "react-router-hash-link";
import ThemeToggle from "./theme-toggle";
import "../styles/navbar.css";

function Layoutpage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formError, setFormError] = useState("");

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess(false);
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill in all required fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormSuccess(false), 2000);
    }, 2000);
  };

  const educationData = [
    {
      title: "10th Grade",
      subtitle: "SNSS Kota, 2016",
      icon: <School size={28} />,
      description: "Completed secondary education with focus on science and mathematics"
    },
    {
      title: "12th Grade",
      subtitle: "MGSS Kota, 2018",
      icon: <BookOpen size={28} />,
      description: "Higher secondary education in Science stream"
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "MIMT Kota, 2021",
      icon: <Monitor size={28} />,
      description: "Fundamentals of computer science and application development"
    },
    {
      title: "Master of Computer Applications (MCA)",
      subtitle: "JECRC University Jaipur, 2024",
      icon: <GraduationCap size={28} />,
      description: "Advanced studies in software development and engineering"
    },
  ];

  return (
    <div className="min-h-screen bg-bg font-montserrat transition-colors duration-300">

      {/* Navbar */}
      <nav className="sticky top-0 w-full max-w-6xl mx-auto flex justify-between items-center py-2 px-4 md:px-6 lg:px-8 relative z-50 text-text backdrop-blur-md"
        style={{ background: 'rgba(var(--bg-color-rgb), 0.9)', borderBottom: '1px solid var(--border-color)' }}>
        {/* Desktop Menu - Left Side */}
        <ul className="hidden md:flex space-x-6 md:space-x-10 text-sm font-semibold tracking-wide">
          <li>
            <HashLink smooth to="#home" className="transition-all nav-underline hover:text-accent">
              HOME
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#about" className="transition-all nav-underline hover:text-accent">
              ABOUT
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#education" className="transition-all nav-underline hover:text-accent">
              EDUCATION
            </HashLink>
          </li>

        </ul>

        {/* Mobile Menu Button - Left Side */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors hover:bg-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo - Center */}
        <div className="w-12 h-12 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            style={{ background: 'linear-gradient(135deg, var(--accent-color), var(--accent-hover))' }}>
            <span className="text-xl font-bold text-white">G</span>
          </div>
        </div>

        {/* Desktop Menu - Right Side */}
        <ul className="hidden md:flex space-x-6 md:space-x-10 items-center text-sm font-semibold tracking-wide">
          <li>
            <HashLink smooth to="#skills" className="transition-all nav-underline hover:text-accent">
              SKILLS
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#work" className="transition-all nav-underline hover:text-accent">
              WORK
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#contact" className="transition-all nav-underline hover:text-accent">
              CONTACT
            </HashLink>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu - Right Side (Theme Toggle) */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`mobile-menu-sidebar fixed top-0 right-0 w-64 z-50 md:hidden transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{
          height: '50vh',
          maxHeight: '500px',
          background: 'var(--card-bg)',
          borderLeft: '1px solid var(--border-color)',
          borderBottomLeftRadius: '1.5rem',
          boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.2)',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors hover:bg-primary text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col space-y-2 px-6 pt-4 text-white">
          <li>
            <HashLink
              smooth
              to="#home"
              className="block py-3 px-4 rounded-lg transition-all hover:bg-primary hover:text-accent font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#about"
              className="block py-3 px-4 rounded-lg transition-all hover:bg-primary hover:text-accent font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#education"
              className="block py-3 px-4 rounded-lg transition-all hover:bg-primary hover:text-accent font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              EDUCATION
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#skills"
              className="block py-3 px-4 rounded-lg transition-all hover:bg-primary hover:text-accent font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              SKILLS
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#work"
              className="block py-3 px-4 rounded-lg transition-all hover:bg-primary hover:text-accent font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              WORK
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#contact"
              className="block py-3 px-4 rounded-lg transition-all hover:bg-primary hover:text-accent font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </HashLink>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12" id="home">
        <div className="flex-1 flex flex-col gap-4">
          <div className="inline-block">
            <span className="text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full inline-block mb-2"
              style={{
                background: 'var(--accent-glow)',
                color: 'var(--accent-color)',
                border: '1px solid var(--accent-color)'
              }}>
              👋 Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{
              background: 'linear-gradient(135deg, var(--text-color-primary) 0%, var(--accent-color) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
            Software Developer
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
            Gaurav Jain
          </h2>
          <div className="flex items-center gap-2 text-lg font-medium opacity-80" style={{ color: 'var(--text-color-secondary)' }}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Based in Jaipur, India
          </div>
          <p className="text-base md:text-lg leading-relaxed max-w-lg opacity-90" style={{ color: 'var(--text-color-secondary)' }}>
            Passionate about creating beautiful, functional, and user-friendly applications.
            Specializing in full-stack development with modern technologies.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="mailto:jaingau01@gmail.com"
              className="btn btn-lg btn-secondary flex items-center gap-2 group"
            >
              <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
              Hire Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn btn-lg btn-primary flex items-center gap-2 group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl opacity-75 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl"
              style={{ background: 'linear-gradient(135deg, var(--accent-color), var(--accent-hover))' }}>
            </div>
            <img
              src={myprofile}
              alt="Gaurav Jain"
              className="relative w-[240px] h-[320px] md:w-[280px] md:h-[380px] rounded-3xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
              style={{ border: '4px solid var(--accent-color)' }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-20" id="about">
        <div className="card p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl opacity-60 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl"
                style={{ background: 'linear-gradient(135deg, var(--accent-color), var(--accent-hover))' }}>
              </div>
              <img
                src={myprofile}
                alt="Gaurav Jain"
                className="relative w-[200px] h-[280px] md:w-[240px] md:h-[340px] rounded-3xl object-cover shadow-xl"
                style={{ border: '3px solid var(--accent-color)' }}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-6">
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase mb-2 inline-block"
                style={{ color: 'var(--accent-color)' }}>
                Get to know me
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4">About Me</h2>
            </div>
            <p className="text-justify leading-relaxed text-base md:text-lg"
              style={{ color: 'var(--text-color-secondary)' }}>
              I am a <span className="font-semibold text-accent">Software Developer</span> with over one year of experience in Front-End Development
              and a growing proficiency in Full Stack Development. I'm eager to learn, improve,
              and take on new challenges. I am looking for an opportunity where I can apply my
              skills, gain valuable experience, and work on meaningful projects that contribute
              to both my personal growth and the success of the company.
            </p>
            <p className="text-justify leading-relaxed text-base md:text-lg"
              style={{ color: 'var(--text-color-secondary)' }}>
              In addition to my front-end and full stack expertise, I can help you build a wide range of software
              solutions, including <span className="font-semibold text-accent">web applications</span>, <span className="font-semibold text-accent">desktop applications</span>, <span className="font-semibold text-accent">websites</span>, and <span className="font-semibold text-accent">mobile applications</span>.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#contact" className="btn btn-md btn-primary">
                Let's Connect
              </a>
              <a href="#work" className="btn btn-md btn-secondary">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-6 py-20" id="education">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase inline-block mb-2"
            style={{ color: 'var(--accent-color)' }}>
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-accent">Education</h2>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="card p-6 md:p-8 hover:shadow-glow transition-all duration-300 group cursor-pointer"
              style={{
                borderLeft: '4px solid var(--accent-color)',
              }}
            >
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'var(--accent-glow)',
                      border: '2px solid var(--accent-color)',
                      color: 'var(--accent-color)' // This colors the icon
                    }}
                  >
                    {edu.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-accent mb-2 group-hover:translate-x-1 transition-transform">
                    {edu.title}
                  </h3>
                  <p className="font-semibold mb-2" style={{ color: 'var(--text-color-primary)' }}>
                    {edu.subtitle}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-color-secondary)' }}>
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-20" id="skills">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase inline-block mb-2"
            style={{ color: 'var(--accent-color)' }}>
            Technologies I Work With
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-accent">My Skills</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {[
            { name: "JavaScript", icon: "javascript/javascript-original.svg", color: "#eab308" },
            { name: "React", icon: "react/react-original.svg", color: "#38bdf8" },
            { name: "React Native", icon: "react/react-original.svg", color: "#61dafb" },
            { name: "Node.js", icon: "nodejs/nodejs-original.svg", color: "#22c55e" },
            { name: "HTML", icon: "html5/html5-original.svg", color: "#f97316" },
            { name: "CSS", icon: "css3/css3-original.svg", color: "#38bdf8" },
            { name: "MySQL", icon: "mysql/mysql-original.svg", color: "#0ea5e9" },
            { name: "Git & Github", icon: "git/git-original.svg", color: "#f97316" },
            { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg", color: "#06b6d4" },
            { name: "MongoDB", icon: "mongodb/mongodb-original.svg", color: "#47adb5" },
            { name: "Postman", icon: "postman/postman-original.svg", color: "#ff6c37" },
            { name: "Next.js", icon: "nextjs/nextjs-original.svg", color: "#6a6666ff" },
            { name: "Firebase", icon: "firebase/firebase-original.svg", color: "#f59e0b" },
            { name: "Docker", icon: "docker/docker-original.svg", color: "#2496ed" },
            { name: "GitHub Actions", icon: "githubactions/githubactions-original.svg", color: "#2088ff" },

          ].map((skill, index) => (
            <div
              key={index}
              className="skill-card group/skill"
              style={{
                borderColor: skill.color,
                boxShadow: `0 0 20px 2px ${skill.color}40`,
              }}
            >
              <div className="relative">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                  alt={skill.name}
                  className="transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-6"
                />
              </div>
              <span className="transition-all duration-300 group-hover/skill:scale-105">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-20" id="work">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase inline-block mb-2"
            style={{ color: 'var(--accent-color)' }}>
            Portfolio Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-accent">Projects</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <ProjectCard
            title="ReviveMoto"
            description="A platform to buy and sell old bikes with secure transactions."
            techStack={["React", "Tailwind CSS", "Node.js", "MongoDB"]}
            image="data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3' y='5' width='18' height='12' rx='2' fill='%23a78bfa'/%3E%3Crect x='1' y='17' width='22' height='2' rx='1' fill='%236366f1'/%3E%3Crect x='7' y='9' width='10' height='2' rx='1' fill='%23fff'/%3E%3Crect x='7' y='13' width='6' height='2' rx='1' fill='%23fff'/%3E%3C/svg%3E"
            liveUrl="https://revivemoto.example.com"
            githubUrl="https://github.com/gaurav-jain01/revivemoto"
          />
          <ProjectCard
            title="Arduino Compiler"
            description="A desktop app for compiling and uploading Arduino code easily."
            techStack={["Electron", "React", "C++", "SerialPort"]}
            image="data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3' y='5' width='18' height='12' rx='2' fill='%23a78bfa'/%3E%3Crect x='1' y='17' width='22' height='2' rx='1' fill='%236366f1'/%3E%3Crect x='7' y='9' width='10' height='2' rx='1' fill='%23fff'/%3E%3Crect x='7' y='13' width='6' height='2' rx='1' fill='%23fff'/%3E%3C/svg%3E"
            githubUrl="https://github.com/gaurav-jain01/arduino-compiler"
          />
          <ProjectCard
            title="College Sneek"
            description="Helps students find and compare colleges quickly."
            techStack={["React", "Express.js", "MongoDB", "REST API"]}
            image="data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3' y='5' width='18' height='12' rx='2' fill='%23a78bfa'/%3E%3Crect x='1' y='17' width='22' height='2' rx='1' fill='%236366f1'/%3E%3Crect x='7' y='9' width='10' height='2' rx='1' fill='%23fff'/%3E%3Crect x='7' y='13' width='6' height='2' rx='1' fill='%23fff'/%3E%3C/svg%3E"
            liveUrl="https://collegesneek.example.com"
            githubUrl="https://github.com/gaurav-jain01/college-sneek"
          />
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer className="w-full mt-20 py-16" style={{ background: 'var(--bg-secondary)' }} id="contact">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase inline-block mb-2"
              style={{ color: 'var(--accent-color)' }}>
              Let's Talk
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-accent">Get in Touch</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-between">
            {/* Left: Contact Info */}
            <div className="flex-1 footer-card flex flex-col justify-between min-w-[280px] max-w-[440px]">
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-color-primary)' }}>
                  Let's Connect
                </h3>
                <p className="mb-8" style={{ color: 'var(--text-color-secondary)', lineHeight: '1.7' }}>
                  I'm very approachable and would love to speak to you. Feel free to call,
                  send me an email, or follow me on social media.
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-auto">
                <a href="tel:+916376860629" className="flex items-center gap-4 group cursor-pointer transition-transform hover:translate-x-2">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-color)' }}>
                    <Phone className="h-5 w-5 text-accent transition-transform group-hover:scale-110" />
                  </span>
                  <span className="font-medium" style={{ color: 'var(--text-color-primary)' }}>+91 6376860629</span>
                </a>
                <a href="mailto:jaingau01@gmail.com" className="flex items-center gap-4 group cursor-pointer transition-transform hover:translate-x-2">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-color)' }}>
                    <Mail className="h-5 w-5 text-accent transition-transform group-hover:scale-110" />
                  </span>
                  <span className="font-medium" style={{ color: 'var(--text-color-primary)' }}>jaingau01@gmail.com</span>
                </a>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/gaurav-jain-a61a21203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                    style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-color)' }}
                  >
                    <Linkedin size={20} className="text-accent" />
                  </a>
                  <a
                    href="https://github.com/gaurav-jain01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                    style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-color)' }}
                  >
                    <Github size={20} className="text-accent" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <form
              className="flex-1 footer-card flex flex-col justify-between max-w-lg"
              onSubmit={handleFormSubmit}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-color-primary)' }}>
                  Send Me a Message
                </h3>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your Name"
                  className="input mb-4 w-full"
                  disabled={formLoading}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Your Email Address"
                  className="input mb-4 w-full"
                  disabled={formLoading}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your Message"
                  className="input h-28 resize-none mb-4 w-full"
                  disabled={formLoading}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary w-full mt-2"
                disabled={formLoading}
              >
                {formLoading ? "Sending..." : "Send Message"}
              </button>
              {formError && (
                <div className="text-red-400 text-center mt-4 text-sm font-medium px-4 py-2 rounded-lg"
                  style={{ background: 'rgba(239, 68, 68, 0.1)' }}>
                  {formError}
                </div>
              )}
              {formSuccess && (
                <div className="text-green-400 text-center mt-4 text-sm font-medium px-4 py-2 rounded-lg"
                  style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
                  Message sent successfully! ✓
                </div>
              )}
            </form>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 text-center border-t" style={{ borderColor: 'var(--border-color)' }}>
            <p className="text-sm" style={{ color: 'var(--text-color-muted)' }}>
              © 2024 Gaurav Jain. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layoutpage;
