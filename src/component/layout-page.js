// import react from "react";
// import { Link } from "react-router-dom";
import { Home, User, Briefcase, Phone, Mail} from "lucide-react"
import myprofile from "../assets/myProfile.png"
import ProjectCard from "./project-cards";
import { HashLink } from 'react-router-hash-link';
import ThemeToggle from './theme-toggle'
import { SocialIcon } from "react-social-icons";

// import {FloatingOrb} from "@/components/floating-orb"

function Layoutpage(){
    return(
    <div className="min-h-screen bg-bg overflow-hidden relative font-montserrat" id="home">
        <nav className="flex flex-wrap justify-center items-center py-6 relative z-10 text-text">
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-16">
            <li>
              <HashLink smooth to="#home" className="hover:text-purple-300 transition-colors">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#about" className="hover:text-purple-300 transition-colors">
                About me
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="w-16 h-16 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-accent from-purple-500 to-purple-700 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">G</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center text-text">
          <ul className="flex space-x-16">
            <li>
              <HashLink smooth to="#work" className="hover:text-purple-300 transition-colors">
                Work
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact" className="hover:text-purple-300 transition-colors">
                Contact
              </HashLink>
            </li>
            <li>
            <ThemeToggle/>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex flex-wrap flex-col min-h-screen ">
      {/*  */}
      <div className="flex flex-wrap flex-col gap-4 text-7xl mt-32 text-left font-bold text-text pl-4 sm:pl-8 md:pl-16 lg:pl-32 xl:pl-64">
        <h1>Front End Developer</h1>
        <h1>Gaurav Jain</h1>
        <h1>Based in Jaipur</h1>
      </div>

      <div className="flex flex-wrap flex-row gap-4 pl-4 sm:pl-8 md:pl-16 lg:pl-32 xl:pl-64 mt-8">
        <button className="flex flex-row justify-center items-center px-9 py-4 gap-2 w-[156px] h-[56px] bg-gray-500 text-white rounded-full relative font-bold">Hire Me</button>
        <button className="flex flex-row justify-center items-center px-9 py-4 gap-2 w-[215px] h-[56px] bg-accent text-white rounded-full relative font-bold">Download Now</button>        
      </div>
    </div>
  
      <div className="flex flex-wrap flex-row gap-64 items-center justify-center min-h-screen text-text" id="about">
        <div>
          <img src={myprofile} alt="myProfile" className="w-[300px] h-[480px] border-b-8 border-accent rounded-3xl"></img>
        </div>
        <div className=" w-[460px] h-[340px] rounded-3xl flex flex-col items-center justify-center text-text px-6 gap-8 mt-16">
          <h1 className=" text-2xl font-bold text-[32px]">About Me</h1>
          <p className="text-left leading-relaxed text-[20px]">
            I am a Software Developer with over one year of experience in Front-End Development. I’m eager to learn, improve, and take on new challenges. I’m looking for an opportunity where I can apply my skills, gain valuable experience, and work on meaningful projects that contribute to both my personal growth and the success of the company.
          </p>
        </div>
      </div>
      {/* Project cards */}
      <div className="flex flex-wrap flex-row gap-14 items-center justify-center min-h-screen" id="work">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
      {/*  */}
      <div className="flex flex-wrap items-center justify-center min-h-screen" id="contact">
        <div className="flex flex-wrap gap-8 w-full max-w-5xl rounded-3xl bg-[--primary-color] p-8 " >
          <div className="w-full md:w-[48%] flex flex-col justify-between pb-40 pt-8 gap-20">
            <div className="px-6 flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-white text-left">Get in touch</h1>
              <p className="text-left text-white">I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
            </div>            
            <div className="px-6 inline-block flex flex-col gap-4">
              <div className="flex gap-2 ">
                <div className="p-3 rounded-full bg-white bg-opacity-10 ">
                  <Phone className="h-5 w-5 text-white"/>
                </div>
                <p className="pt-2 text-white">+91 63768606029</p>
              </div>
              <div className="flex gap-2">
                <div className="p-3 rounded-full bg-white bg-opacity-10 ">
                  <Mail className="h-5 w-5 text-white"/>
                </div>
                <p className="pt-2 text-white">jaingau01@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[46%] flex flex-col justify-between px-8 pt-8 pb-8 gap-4">
            <h1 className="text-2xl font-bold text-white text-left">Send me a message</h1>

            <input
              type="text"
              placeholder="Name"
              className="bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 pl-4 py-3 rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 pl-4 py-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 pl-4 py-3 rounded-lg outline-none"
            />

            <textarea
              placeholder="Your message"
              className="bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 pl-4 py-3 rounded-lg h-[120px] resize-none outline-none"
            ></textarea>

            <button className="mt-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity duration-300">
              Send message
            </button>
          </div>

        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-10 py-16 bg-primary">
        <div className="flex item-center justify-center px-20">
          <ul className="flex flex-wrap flex-row text-white gap-12">
            <div className="flex flex-wrap flex-row gap-12">
              <div className="flex flex-row gap-2">
                <Home className="h-5 w-5"/>
                <HashLink smooth to="#home"><li>Home</li></HashLink>
              </div>
              <div className="flex flex-row gap-2">
                <User className="h-5 w-5"/>
                <HashLink smooth to="#about"><li>About</li></HashLink>
              </div>
            </div>
            <div className="flex flex-wrap flex-row gap-12">
              <div className="flex flex-row gap-2">
                <Briefcase className="h-5 w-5"/>
                <HashLink smooth to="#work"><li>Work</li></HashLink>
              </div>
              <div className="flex flex-row gap-2">
                <Phone className="h-5 w-5"/>
                <HashLink smooth to="#contact"><li>Contact</li></HashLink>
              </div>
            </div>
          </ul>
        </div>
        <div className="flex flex-row justify-center gap-2">
          <div className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-pink-300 transition-colors duration-300">
            <SocialIcon 
              url="https://instagram.com/gaurav_jn1" 
              style={{ height: 36, width: 36 }}
            />
          </div>
          <div className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-gray-500 transition-colors duration-300">
            <SocialIcon 
              url="https://github.com/gaurav-jain01" 
              style={{ height: 36, width: 36 }}
            />
          </div>
          <div className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-blue-300 transition-colors duration-300">
            <SocialIcon 
              url="https://linkedin.com/in/gaurav-jain-a61a21203/" 
              style={{ height: 36, width: 36 }}
            />
          </div>
        </div>
      </div>
    </div>
    );
}
export default Layoutpage;


