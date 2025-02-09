import { createEffect, createSignal, onCleanup } from "solid-js";
import { languageMap } from "../../../../store/language";
import { cv } from "../../../../assets/files";
import Masking from "../../../elements/Masking";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const MobileSideMenu = (props) => {
  const [activeSection, setActiveSection] = createSignal(null);
  const clickMenu = () => {
    props.hidden(true);
  };

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
          setActiveSection(null);
          sectionFound = true;
        }
      } else if (
        elementTop < viewportTarget &&
        elementBottom > viewportTarget &&
        !sectionFound
      ) {
        setActiveSection(i);
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
    <div className="flex lg:hidden flex-col py-0 gap-2 w-full top-0 relative">
      {/* === Masking === */}
      <Masking variant={"dark"} />
      {/* === end of Masking === */}
      {/* === Wrapper : Close Button & List Menu ===*/}
      <div className="absolute bg-zinc-950 flex flex-col justify-between w-[75%] md:w-[32%] self-end h-screen py-6 z-20">
        <div className="flex flex-col gap-5">
          {/* === Close Button === */}
          <button
            type="button"
            className="text-red-400 font-bold px-2 w-fit"
            onClick={() => {
              props.hidden(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="2em"
              height="2em"
            >
              <path
                fill="currentColor"
                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
              ></path>
            </svg>
          </button>
          {/* === List Menu === */}
          <div className="flex flex-col gap-5 py-2 text-base">
            {/* Back To Top */}
            <button
              onClick={() => {
                scrollToSection("hero");
                clickMenu();
              }}
              class={`hover:font-bold hover:text-lg hover:text-indigo-500 hover:bg-black cursor-pointer px-4 ${
                activeSection() === 1 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex  gap-2">
                <span>Back To Top</span>
              </div>
            </button>
            {/* About Me */}
            <button
              onClick={() => {
                scrollToSection("about-me");
                clickMenu();
              }}
              class={`hover:font-bold hover:text-lg hover:text-indigo-500 hover:bg-black cursor-pointer px-4 ${
                activeSection() === 1 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex  gap-2">
                <span>{languageMap().menu[0]}</span>
              </div>
            </button>
            {/* My Expertise */}
            <button
              onClick={() => {
                scrollToSection("my-expertise");
                clickMenu();
              }}
              class={`hover:font-bold hover:text-lg hover:text-indigo-500 hover:bg-black cursor-pointer px-4 ${
                activeSection() === 2 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex  gap-2">
                <span>{languageMap().menu[1]}</span>
              </div>
            </button>
            {/* My Experience */}
            <button
              onClick={() => {
                scrollToSection("my-experience");
                clickMenu();
              }}
              class={`hover:font-bold hover:text-lg hover:text-indigo-500 hover:bg-black cursor-pointer px-4 ${
                activeSection() === 3 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex  gap-2">
                <span>{languageMap().menu[2]}</span>
              </div>
            </button>
            {/* Projects */}
            <button
              onClick={() => {
                scrollToSection("projects");
                clickMenu();
              }}
              class={`hover:font-bold hover:text-lg hover:text-indigo-500 hover:bg-black cursor-pointer px-4 ${
                activeSection() === 4 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex  gap-2">
                <span>{languageMap().menu[3]}</span>
              </div>
            </button>
            {/* Blog */}
            <button
              onClick={() => {
                scrollToSection("projects");
                clickMenu();
              }}
              class={`hover:font-bold hover:text-lg hover:text-indigo-500 hover:bg-black cursor-pointer px-4 ${
                activeSection() === 4 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex  gap-2">
                <span>{languageMap().menu[4]}</span>
              </div>
            </button>
            {/* Download Resume */}
            <div class="flex h-fit">
              <a
                href={cv}
                download
                className="flex flex-row gap-2 items-center border-2 border-indigo-500 text-indigo-100 hover:bg-indigo-900 text-xl lg:text-lg px-2 mx-3 py-1 rounded-md text-nowrap"
              >
                {languageMap().menu[5]}
              </a>
            </div>
          </div>
        </div>
        {/* === Footer === */}
        <div className="flex flex-col text-sm px-2">
          <h1 className="text-white">
            &copy 2025 Copyright, Aldi Ramdani
          </h1>
          <h1 className="text-white ml-4">All Rights Reserved</h1>
        </div>
      </div>
      {/* === end of Wrapper : Close Button & List Menu ===*/}
    </div>
  );
};

export default MobileSideMenu;
