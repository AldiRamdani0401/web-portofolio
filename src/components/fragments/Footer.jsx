import { createSignal, onCleanup } from "solid-js";

import {
  FaBrandsLinkedin,
  FaBrandsSquareGithub,
  FaBrandsSquareGitlab,
} from "solid-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "solid-icons/ai";

import Notification from "./Notification";
import {
  logoGitHub,
  logoSolidJS,
  logoTailwind,
  logoVercel,
} from "../../assets/logos";
import { gilbert, rizal } from "../../assets/footer";

const date = new Date();
const thisYear = date.getFullYear();

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Footer = () => {
  const handleScroll = () => {
    const content = document.getElementById("content");
    const elements = content.querySelectorAll("section");

    // Get the middle of the viewport
    const viewportTarget = window.innerHeight / 2;

    let sectionFound = false;

    elements.forEach((element, i) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      if (element.id === "#") {
        if (elementTop < viewportTarget && elementBottom > viewportTarget) {
          sectionFound = true;
        }
      } else if (
        elementTop < viewportTarget &&
        elementBottom > viewportTarget &&
        !sectionFound
      ) {
      }
    });
  };

  window.addEventListener("DOMContentLoaded", () =>
    setTimeout(() => {
      // Attach scroll event listener
      let mainElement = document.getElementsByTagName("main");
      mainElement = mainElement[0];
      mainElement.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on component unmount
      onCleanup(() => mainElement.removeEventListener("scroll", handleScroll));
    }, 5000)
  );

  return (
    <footer id="footer" className="mt-[80%] xl:mt-[30%] flex flex-col lg:flex-col gap-4 justify-between bg-zinc-900 px-4 xl:px-8 py-8 w-full text-slate-200 font-light">
      {/* === CONTAINER 1 === */}
      <div className="flex flex-row flex-wrap justify-between gap-3">
        {/* === Back To Hero === */}
        <button
          onClick={() => scrollToSection("hero")}
          className="group self-start cursor-pointer text-lg lg:text-2xl text-white font-bold text-nowrap"
        >
          My Portfolio{" "}
          <span className="group-hover:animate-pulse group-hover:delay-1000">
            🚀
          </span>
        </button>
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-0 w-full xl:w-1/2 px-0 xl:px-10">
          {/* === Navigation === */}
          <div className="flex flex-col text-slate-300 justify-start gap-1 w-full xl:w-1/4">
            {/* Label */}
            <h3 className="font-medium text-center w-full xl:w-fit pr-2 border-b-2 border-slate-400">
              Navigation
            </h3>
            {/* Naviagation Contents */}
            <div className="flex flex-row flex-wrap justify-center xl:flex-col gap-2 xl:gap-1">
              {/* About Me */}
              <button
                onClick={() => scrollToSection("about-me")}
                className="text-nowrap text-sm text-left hover:font-medium"
              >
                About Me
              </button>
              {/* Expertise */}
              <button
                onClick={() => scrollToSection("my-expertise")}
                className="text-nowrap text-sm text-left hover:font-medium"
              >
                My Expertise
              </button>
              {/* Experience */}
              <button
                onClick={() => scrollToSection("my-experience")}
                className="text-nowrap text-sm text-left hover:font-medium"
              >
                My Experience
              </button>
              {/* Projects */}
              <button
                onClick={() => scrollToSection("projects")}
                className="text-nowrap text-sm text-left hover:font-medium"
              >
                My Projects
              </button>
            </div>
          </div>
          {/* === end of Navigation === */}
          {/* === Others === */}
          <div className="flex flex-col text-slate-300 justify-start gap-1 w-full xl:w-1/4">
            <h3 className="font-medium text-center w-full xl:w-fit pr-2 border-b-2 border-slate-400">
              Others
            </h3>
            <div className="flex flex-row xl:flex-col justify-center gap-1">
              {/* Blog */}
              <button
                onClick={() => scrollToSection("about-me")}
                className="text-nowrap text-sm text-left hover:font-medium"
              >
                My Blog
              </button>
            </div>
          </div>
          {/* === end of Others === */}
          {/* === Contact === */}
          <div className="flex flex-col gap-1">
            <h3 className="font-medium w-full border-b-2 border-slate-300">
              Contact
            </h3>
            {/* Phone */}
            <div className="flex flex-row gap-1">
              <AiOutlinePhone />
              <spa className="text-sm items-center">+6285891361804</spa>
            </div>
            {/* Email */}
            <div className="flex flex-row gap-1 items-center">
              <AiOutlineMail />
              <span className="text-sm"> ramdanialdi889@gmail.com</span>
            </div>
          </div>
          {/* === end of Contact === */}
        </div>
        {/* === Social Media === */}
        <div className="flex flex-col mx-auto xl:mx-0 gap-1">
          <h3 className="font-medium text-center w-full xl:w-fit border-b-2 border-slate-300">
            Social Media
          </h3>
          <div className="flex flex-row gap-2">
            {/* === LinkedIn === */}
            <a
              href="https://www.linkedin.com/in/aldi-ramdani"
              title="LinkeIn Aldi Ramdani"
            >
              <FaBrandsLinkedin size={25} />
            </a>
            {/* === Github === */}
            <a
              href="https://github.com/AldiRamdani0401"
              title="GitHub Aldi Ramdani"
            >
              <FaBrandsSquareGithub size={25} />
            </a>
            {/* === Gitlab === */}
            <a
              href="https://gitlab.com/ramdanialdi889"
              title="GitLab Aldi Ramdani"
            >
              <FaBrandsSquareGitlab size={25} />
            </a>
          </div>
        </div>
        {/* === end of Social Media === */}
      </div>
      {/* === end of CONTAINER 1 === */}
      {/* === CONTAINER 2 === */}
      <div className="flex flex-row justify-between">
        {/* === Special Thanks === */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-slate-200">Special Thanks :</h3>
          <div className="flex flex-row gap-2">
            {/* === SOLID JS === */}
            <a
              href="https://www.solidjs.com"
              className="flex items-center h-8 w-8 p-1 overflow-hidden bg-white rounded-full"
              title="Solid JS"
            >
              <img src={logoSolidJS} alt="solid js" />
            </a>
            {/* === TAILWIND === */}
            <a
              href="https://tailwindcss.com"
              className="flex items-center h-8 w-8 p-1 overflow-hidden bg-white rounded-full"
            >
              <img src={logoTailwind} alt="tailwind css" title="tailwind css" />
            </a>
            {/* === GITHUB === */}
            <a
              href="https://github.com"
              className="flex items-center h-8 w-8 overflow-hidden bg-white rounded-full"
            >
              <img src={logoGitHub} alt="github" title="github" />
            </a>
            {/* === VERCEL === */}
            <a
              href="https://vercel.com"
              className="flex h-8 w-8 p-1 overflow-hidden bg-white rounded-full"
              title="vercel"
            >
              <img src={logoVercel} alt="vercel" />
            </a>
          </div>
        </div>
        {/* === end of Special Thanks === */}
        {/* === Patners === */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-slate-200">Patners :</h3>
          <div className="flex flex-row gap-2">
            {/* ===  GILBERT HUTAPEA === */}
            <a
              href="https://berthutapea.vercel.app"
              className="flex items-center h-8 w-8 overflow-hidden bg-white rounded-full"
              title="Gilbert Hutapea"
            >
              <img src={gilbert} alt="Gilbert Hutapea" />
            </a>
            {/* ===  Muhammad Rizal === */}
            <a
              href="https://react-protofolio-moohzhal.vercel.app"
              className="flex items-center h-8 w-8 overflow-hidden bg-white rounded-full"
              title="Muhammad Rizal"
            >
              <img src={rizal} alt="Muhammad Rizal" />
            </a>
          </div>
        </div>
        {/* === end of Patners === */}
      </div>
      {/* === end of CONTAINER 2 === */}
      <div className="py-[1.5px] bg-zinc-700" />
      <div className="flex flex-col xl:flex-row justify-between text-center text-sm">
        <span>&copy; Copyright All Rights Reserved {thisYear}</span>
        <div className="flex flex-row gap-2 justify-center">
          <span className="text-slate-200">Developed By</span>
          <span className="text-indigo-300 font-semibold xl:font-normal">
            Aldi Ramdani
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
