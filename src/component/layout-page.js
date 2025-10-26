// import react from "react";
// import { Link } from "react-router-dom";
import React, { useState } from "react";
import {Phone, Mail} from "lucide-react"
import myprofile from "../assets/myProfile.png"
import ProjectCard from "./project-cards";
import { HashLink } from 'react-router-hash-link';
import ThemeToggle from './theme-toggle'
import WaterSlider from './WaterSlider';
import { Linkedin, Github } from 'lucide-react';

// import {FloatingOrb} from "@/components/floating-orb"

function Layoutpage(){
    const [formLoading, setFormLoading] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formError, setFormError] = useState('');

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        return /^\S+@\S+\.\S+$/.test(email);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormError('');
        setFormSuccess(false);
        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormError('Please fill in all fields.');
            return;
        }
        if (!validateEmail(formData.email)) {
            setFormError('Please enter a valid email address.');
            return;
        }
        setFormLoading(true);
        setTimeout(() => {
            setFormLoading(false);
            setFormSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setFormSuccess(false), 2000);
        }, 2000);
    };
    return(
    <div className="min-h-screen bg-bg font-montserrat">
        <WaterSlider />
        {/* Navbar */}
        <nav className="w-full max-w-7xl mx-auto flex flex-wrap justify-between items-center py-6 px-4 md:px-8 lg:px-12 xl:px-0 relative z-10 text-text">
            <ul className="flex space-x-8 md:space-x-16">
                <li>
                    <HashLink smooth to="#home" className="transition-colors nav-underline">HOME</HashLink>
                </li>
                <li>
                    <HashLink smooth to="#about" className="transition-colors nav-underline">ABOUT</HashLink>
                </li>
                <li>
                    <HashLink smooth to="#education" className="transition-colors nav-underline">EDUCATION</HashLink>
                </li>
                <li>
                    <HashLink smooth to="#skills" className="transition-colors nav-underline">SKILLS</HashLink>
                </li>
            </ul>
            <div className="w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">G</span>
                </div>
            </div>
            <ul className="flex space-x-8 md:space-x-16">
                <li>
                    <HashLink smooth to="#work" className="transition-colors nav-underline">WORK</HashLink>
                </li>
                <li>
                    <HashLink smooth to="#contact" className="transition-colors nav-underline">CONTACT</HashLink>
                </li>
                <li>
                    <ThemeToggle/>
                </li>
            </ul>
        </nav>

        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-10" id="home">
            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-4xl md:text-6xl font-bold text-text leading-tight">Software Developer</h1>
                <h1 className="text-3xl md:text-5xl font-bold text-accent">Gaurav Jain</h1>
                <h1 className="text-xl md:text-2xl font-semibold text-text">Based in Jaipur</h1>
                <div className="flex gap-4 mt-8">
                    <a
                        href="mailto:jaingau01@gmail.com"
                        className="flex flex-row justify-center items-center px-8 py-3 gap-2 bg-gray-500 hover:bg-gray-700 text-white rounded-full font-bold"
                    >
                        Hire Me
                    </a>
                    <button
                        className="flex flex-row justify-center items-center px-8 py-3 gap-2 bg-accent hover:bg-purple-700 text-white rounded-full font-bold"
                    >
                       <a
                        href="/resume.pdf"
                        download
                        className="flex flex-row justify-center items-center px-8 py-3 gap-2 bg-accent hover:bg-purple-700 text-white rounded-full font-bold"
                        >
                        Download Now
                        </a>
                    </button>
                </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
                <img src={myprofile} alt="myProfile" className="w-[260px] h-[360px] md:w-[300px] md:h-[420px] border-b-8 border-accent rounded-3xl object-cover shadow-lg" />
            </div>
        </section>

        {/* About Section */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row gap-12 items-center justify-center min-h-screen" id="about">
            <div className="flex-shrink-0">
                <img src={myprofile} alt="myProfile" className="w-[220px] h-[320px] md:w-[260px] md:h-[380px] border-b-8 border-accent rounded-3xl object-cover shadow-md" />
            </div>
            <div className="flex-1 rounded-3xl flex flex-col items-start justify-center text-text px-0 md:px-6 gap-16 mt-0">
                <h1 className="text-5xl font-bold text-accent">About Me</h1>
                <p className="text-justify leading-relaxed text-lg md:text-2xl">
                I am a Software Developer with over one year of experience in Front-End Development and a growing proficiency in Full Stack Development. I'm eager to learn, improve, and take on new challenges. I am looking for an opportunity where I can apply my skills, gain valuable experience, and work on meaningful projects that contribute to both my personal growth and the success of the company. In addition to my front-end and full stack expertise, I can help you build a wide range of software solutions, including web applications, desktop applications, websites, and mobile applications.
                </p>
            </div>
        </section>
{/* education section */}
        <section className="w-full max-w-5xl mx-auto px-4 md:px-8 py-24" id="education">
            <h2 className="text-4xl font-extrabold text-accent mb-16 text-center">Education</h2>
            <ol className="relative border-l-8 border-accent/40 ml-8">
                <li className="mb-20 ml-8">
                    <span className="absolute -left-7 flex items-center justify-center w-14 h-14 bg-accent rounded-full ring-8 ring-bg text-white text-2xl font-extrabold"></span>
                    <div className="pl-8">
                        <h3 className="text-2xl font-bold text-accent mb-2">10th Grade</h3>
                        <p className="text-text text-lg">SNSS Kota, 2016</p>
                    </div>
                </li>
                <li className="mb-20 ml-8">
                    <span className="absolute -left-7 flex items-center justify-center w-14 h-14 bg-accent rounded-full ring-8 ring-bg text-white text-2xl font-extrabold"></span>
                    <div className="pl-8">
                        <h3 className="text-2xl font-bold text-accent mb-2">12th Grade</h3>
                        <p className="text-text text-lg">MGSS Kota, 2018</p>
                    </div>
                </li>
                <li className="mb-20 ml-8">
                    <span className="absolute -left-7 flex items-center justify-center w-14 h-14 bg-accent rounded-full ring-8 ring-bg text-white text-2xl font-extrabold"></span>
                    <div className="pl-8">
                        <h3 className="text-2xl font-bold text-accent mb-2">Bachelor of Computer Applications (BCA)</h3>
                        <p className="text-text text-lg">MIMT Kota, 2021</p>
                    </div>
                </li>
                <li className="ml-8">
                    <span className="absolute -left-7 flex items-center justify-center w-14 h-14 bg-accent rounded-full ring-8 ring-bg text-white text-2xl font-extrabold"></span>
                    <div className="pl-8">
                        <h3 className="text-2xl font-bold text-accent mb-2">Master of Computer Applications (MCA)</h3>
                        <p className="text-text text-lg">JECRC University Jaipur, 2024</p>
                    </div>
                </li>
            </ol>
        </section>

        {/* Skills Section */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16" id="skills">
            <h2 className="text-4xl font-extrabold text-accent mb-16 text-center">My Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
                {/* Java */}
                <div className="flex flex-col items-center bg-transparent border-2 border-[#e11d48] rounded-3xl p-8 min-w-[160px] min-h-[160px] shadow-lg" style={{boxShadow: '0 0 24px 4px #e11d48'}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-16 h-16 mb-4" />
                    <span className="text-lg font-semibold text-text">Java</span>
                </div>
                {/* JavaScript */}
                <div className="flex flex-col items-center bg-transparent border-2 border-[#eab308] rounded-3xl p-8 min-w-[160px] min-h-[160px] shadow-lg" style={{boxShadow: '0 0 24px 4px #eab308'}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 h-16 mb-4" />
                    <span className="text-lg font-semibold text-text">JavaScript</span>
                </div>
                {/* React */}
                <div className="flex flex-col items-center bg-transparent border-2 border-[#38bdf8] rounded-3xl p-8 min-w-[160px] min-h-[160px] shadow-lg" style={{boxShadow: '0 0 24px 4px #38bdf8'}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-16 h-16 mb-4" />
                    <span className="text-lg font-semibold text-text">React</span>
                </div>
                {/* Node.js */}
                <div className="flex flex-col items-center bg-transparent border-2 border-[#22c55e] rounded-3xl p-8 min-w-[160px] min-h-[160px] shadow-lg" style={{boxShadow: '0 0 24px 4px #22c55e'}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-16 h-16 mb-4" />
                    <span className="text-lg font-semibold text-text">Node.js</span>
                </div>
                {/* HTML */}
                <div className="flex flex-col items-center bg-transparent border-2 border-[#f97316] rounded-3xl p-8 min-w-[160px] min-h-[160px] shadow-lg" style={{boxShadow: '0 0 24px 4px #f97316'}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-16 h-16 mb-4" />
                    <span className="text-lg font-semibold text-text">HTML</span>
                </div>
                {/* CSS */}
                <div className="flex flex-col items-center bg-transparent border-2 border-[#38bdf8] rounded-3xl p-8 min-w-[160px] min-h-[160px] shadow-lg" style={{boxShadow: '0 0 24px 4px #38bdf8'}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-16 h-16 mb-4" />
                    <span className="text-lg font-semibold text-text">CSS</span>
                </div>
                {/* MySQL */}
                <div className="flex flex-col items-center bg-transparent border-2 border-[#0ea5e9] rounded-3xl p-8 min-w-[160px] min-h-[160px] shadow-lg" style={{boxShadow: '0 0 24px 4px #0ea5e9'}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-16 h-16 mb-4" />
                    <span className="text-lg font-semibold text-text">MySql</span>
                </div>
                {/* Git & Github */}
                <div className="flex flex-col items-center bg-transparent border-2 border-[#f97316] rounded-3xl p-8 min-w-[160px] min-h-[160px] shadow-lg" style={{boxShadow: '0 0 24px 4px #f97316'}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git & Github" className="w-16 h-16 mb-4" />
                    <span className="text-lg font-semibold text-text">Git & Github</span>
                </div>
            </div>
        </section>

        {/* Project cards */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 min-h-screen justify-center items-center" id="work">
            <h2 className="text-4xl font-extrabold text-accent mb-16 text-center">Projects</h2>
            <div className="flex flex-wrap justify-center gap-24">
                <ProjectCard 
                    title="ReviveMoto" 
                    description="A platform to buy and sell old bikes with secure transactions." 
                    techStack={["React", "Tailwind CSS", "Node.js", "MongoDB"]} 
                    image="data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3' y='5' width='18' height='12' rx='2' fill='%23a78bfa'/%3E%3Crect x='1' y='17' width='22' height='2' rx='1' fill='%236366f1'/%3E%3Crect x='7' y='9' width='10' height='2' rx='1' fill='%23fff'/%3E%3Crect x='7' y='13' width='6' height='2' rx='1' fill='%23fff'/%3E%3C/svg%3E"
                />
                <ProjectCard 
                    title="Adruino Compiler" 
                    description="A desktop app for compiling and uploading Arduino code easily." 
                    techStack={["Electron", "React", "C++", "SerialPort"]} 
                    image="data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3' y='5' width='18' height='12' rx='2' fill='%23a78bfa'/%3E%3Crect x='1' y='17' width='22' height='2' rx='1' fill='%236366f1'/%3E%3Crect x='7' y='9' width='10' height='2' rx='1' fill='%23fff'/%3E%3Crect x='7' y='13' width='6' height='2' rx='1' fill='%23fff'/%3E%3C/svg%3E"
                />
                <ProjectCard 
                    title="College Sneek" 
                    description="Helps students find and compare colleges quickly." 
                    techStack={["React", "Express.js", "MongoDB", "REST API"]} 
                    image="data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3' y='5' width='18' height='12' rx='2' fill='%23a78bfa'/%3E%3Crect x='1' y='17' width='22' height='2' rx='1' fill='%236366f1'/%3E%3Crect x='7' y='9' width='10' height='2' rx='1' fill='%23fff'/%3E%3Crect x='7' y='13' width='6' height='2' rx='1' fill='%23fff'/%3E%3C/svg%3E"
                />
            </div>
        </section>

        {/* Footer with Get in Touch */}
        <footer className="w-full bg-primary py-4 mt-0">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-stretch justify-between px-4 md:px-8">
                {/* Left: Contact Info */}
                <div className="flex-1 flex flex-col justify-between bg-[--primary-color] rounded-3xl p-8 min-w-[260px] max-w-[420px]">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Get in touch</h2>
                        <p className="text-white/90 mb-8">I'm very approachable and would love to speak to you. Feel free to call, send me an email. Follow me on social media or simply complete the enquiry form.</p>
                    </div>
                    <div className="flex flex-col gap-6 mt-auto">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10">
                                <Phone className="h-6 w-6 text-white" />
                            </span>
                            <span className="text-white text-lg">+91 63768606029</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10">
                                <Mail className="h-6 w-6 text-white" />
                            </span>
                            <span className="text-white text-lg">jaingau01@gmail.com</span>
                        </div>
                        <div className="flex gap-6 mt-6">
                            <a href="https://www.linkedin.com/in/gaurav-jain-a61a21203/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent text-3xl transition-colors">
                                <Linkedin size={32} />
                            </a>
                            <a href="https://github.com/gaurav-jain01" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent text-3xl transition-colors">
                                <Github size={32} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Right: Contact Form */}
                <form className="flex-1 flex flex-col justify-between bg-[--primary-color] rounded-3xl p-8 ml-0 md:ml-8 max-w-xl" onSubmit={handleFormSubmit}>
                    <h2 className="text-2xl font-bold text-white mb-4">Send me a message</h2>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Name"
                        className="bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-lg outline-none mb-4"
                        disabled={formLoading}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="Email Address"
                        className="bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-lg outline-none mb-4"
                        disabled={formLoading}
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Your message"
                        className="bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-lg h-[120px] resize-none outline-none mb-4"
                        disabled={formLoading}
                    ></textarea>
                    <button
                        type="submit"
                        className="mt-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={formLoading}
                    >
                        {formLoading ? 'Sending...' : 'Send message'}
                    </button>
                    {formError && (
                        <div className="text-red-400 text-center mt-4 font-semibold">{formError}</div>
                    )}
                    {formSuccess && (
                        <div className="text-green-400 text-center mt-4 font-semibold">Message sent!</div>
                    )}
                </form>
            </div>
        </footer>
    </div>
    );
}
export default Layoutpage;


