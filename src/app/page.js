import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Accordion from "./Accordion.jsx";
import ProjectMarquee from "./ProjectMarquee.jsx";
import AboutMarquee from "./AboutMarquee.jsx";
import ShootingText from "./ShootingText.jsx";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-black w-full z-20 fixed top-0">
        <div className="flex flex-wrap items-center justify-between w-full p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/logo.png" width={55} height={55} alt="DARE-JMI Logo" />
            <span className="self-center text-2xl text-heading font-semibold whitespace-nowrap text-white">
              DARE-JMI
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="text-white text-xl font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* NAVBAR ends */}
      {/* HERO section */}
      <div className="relative h-dvh w-full flex items-center justify-center bg-black overflow-hidden">
        <object
          type="image/svg+xml"
          data="/DARE-anim.svg"
          className="w-full h-auto z-0"
        >
          Your browser does not support SVGs
        </object>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <div className="bg-[#1b333b]/10 backdrop-blur flex flex-col justify-center items-center rounded-xl p-2">
            <ShootingText text="LEARN, BUILD, REPEAT" className="text-6xl" type="chars"/>
              <ShootingText text="The premier Drone and Robotics Electrical Workshop for future
              engineers." className="text-2xl" type="words"/>
          </div>
          <button className="text-white text-2xl rounded-lg pointer-events-auto z-100 bg-[#3529e3] pt-2 pb-2 pr-4 pl-4 mt-10 transition-all ease-in-out delay-100 hover:bg-[#131313] hover:pt-3 hover:pb-3 hover:pr-5 hover:pl-5 hover:cursor-pointer">
            Join Now <HiArrowRight className="inline" />
          </button>
        </div>
      </div>
      {/* HERO SECTION ends */}
      {/* PROJECT section */}
      <ProjectMarquee />
      {/* PROJECT section ends */}
      {/* About us section */}
      <div className="w-full h-[700] flex flex-row justify-between mt-50" id="about">
        <div className="w-1/2 text-center flex flex-col items-center">
          <ShootingText text="About Us" className="text-6xl" type="chars"/>
          <div className="text-justify w-4/5 mt-20 text-lg">
            <p className="text-white font-sans tracking-wide">
              DARES is an intensive, high-velocity technical incubator where the
              abstract complexity of control theory meets the tangible precision
              of electrical engineering through hands-on, hardware-first
              execution.
            </p>

            <p className="text-white font-sans tracking-wide mt-10">
              As a specialized workshop environment, we move beyond traditional
              lectures to focus on the relentless iterative loop of rapid
              prototyping—empowering participants to master the full stack of
              autonomous systems, from the intricate soldering of
              high-performance PCBs to the deployment of advanced
              Physics-Informed Neural Networks on edge-optimized hardware.
            </p>

            <p className="text-white font-sans tracking-wide mt-10">
              Our space is designed for builders who want to bridge the gap
              between academic theory and industrial-standard application,
              providing the tools and collaborative energy necessary to design,
              assemble, and test the next generation of UAVs and robotic
              platforms. Whether we are refining NMPC algorithms or quantizing
              models for real-time edge AI, the DARES workshop is defined by
              technical excellence, a culture of "build-to-learn," and the
              mission to engineer the autonomous future from the ground up.
            </p>
          </div>
        </div>

        <AboutMarquee />
      </div>
      {/* about section ends */}
      {/* faq section */}
      <div className="w-full h-[500] flex flex-row items-center justify-center mt-15" id="faqs">
        <div className="w-1/2 text-start tracking-wide">
          <ShootingText text="FAQs." className="text-6xl" type="chars"/>
          <p className="text-white text-xl mt-5 w-3/4 tracking-wide">
            Answered all frequently asked questions, Still confused? feel free
            to contact us.
          </p>
          <button className="text-white text-2xl rounded-lg pointer-events-auto z-100 bg-[#3529e3] pt-2 pb-2 pr-4 pl-4 mt-10 transition-all ease-in-out delay-100 hover:bg-[#131313] hover:pt-3 hover:pb-3 hover:pr-5 hover:pl-5 hover:cursor-pointer">
            Contact Us
          </button>
        </div>
        {/* accordion starts here */}
        <div className="max-w-xl">
          <Accordion />
        </div>
        {/* accordion ends here */}
      </div>
      {/* faq section ends */}
      {/* contact section */}
      <div className="flex flex-row justify-around mt-40" id="contact">
        <div className="w-1/2 flex flex-col items-center">
          <ShootingText text="Contact Us" className="text-6xl" type="chars"/>
          <form className="mt-15 flex flex-col gap-8 w-[400]">
            <div className="flex flex-col gap-2">
              <label className="text-[#00E5FF]">Name</label>
              <input
                className="p-2 bg-[#1c1c1c] rounded-xl w-full block outline-cyan-400 text-lg text-[#646464]"
                type="text"
                placeholder="Jane Smith"
                required
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#00E5FF]">Email</label>
              <input
                className="p-2 bg-[#1c1c1c] rounded-xl w-full block outline-cyan-400 text-lg text-[#646464]"
                type="email"
                placeholder="jane@smith.com"
                required
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#00E5FF]">How can we help?</label>
              <textarea
                className="p-2 bg-[#1c1c1c] rounded-xl w-full block outline-cyan-400 text-lg text-[#646464] h-20"
                placeholder="I would like to..."
                required
              ></textarea>
            </div>

            <button className="w-full bg-[#00E5FF] rounded-lg p-2 hover:bg-[#646464] transition-all delay-150 ease-in-out" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/2 text-white flex flex-col">
          <p className="text-3xl"><span className="text-[#00E5FF]">Empowering </span>future engineers with affordable industry level workshops - all from scratch!</p>
          <div className="mt-10 text-xl">
            <p className="mb-3"><span className="text-[#00E5FF] text-2xl"><MdEmail className="inline mr-5"/></span>support@dare.org</p>
            <p><span  className="text-[#00E5FF] text-2xl"><FaPhoneAlt className="inline mr-5"/></span>(+91) 9345786490</p>
          </div>

          <div className="mt-10 flex flex-row gap-2 text-2xl">
            <FaInstagram className="text-[#00E5FF] hover:cursor-pointer"/>
            <FaLinkedinIn className="text-[#00E5FF] hover:cursor-pointer"/>
          </div>
        </div>
      </div>
      {/* contact section ends */}
      {/* footer section*/}
      <div className="mt-20 text-center border-t-[1] border-[#646464]/50 text-xl text-[#646464]">
        <p className="pt-5 pb-5">Made with ❤️ by Tech Team, DARE-JMI</p>
      </div>
      {/* footer ends */}
    </>
  );
}
