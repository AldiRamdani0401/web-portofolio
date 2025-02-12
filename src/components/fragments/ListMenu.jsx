import { createEffect, createSignal, onCleanup } from "solid-js";
import { languageMap } from "../../store/language";
import { cv } from "../../assets/files";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const ListMenu = (props) => {
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
    <>
      {/*=== DESKTOP === */}
      <div
        className="
        hidden lg:flex flex-row justify-center align-middle py-0 gap-2 w-full top-0 relative
        bg-gray-950"
      >
        <div className="flex flex-col justify-center w-full h-16 pt-0 bg-black lg:bg-gray-950">
          <div className="flex flex-row gap-5 justify-center text-base">
            {/* === About Me === */}
            <button
              onClick={() => {
                scrollToSection("about-me");
                clickMenu();
              }}
              class={`hover:font-bold hover:text-lg cursor-pointer text-nowrap ${
                activeSection() === 1 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex justify-center align-middle gap-2">
                <span>{languageMap().menu[0]}</span>
              </div>
            </button>
            {/* === enf of About Me === */}
            {/* My Expertise */}
            <button
              onClick={() => {
                scrollToSection("my-expertise");
                clickMenu();
              }}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 2 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex justify-center align-middle gap-2">
                <span>{languageMap().menu[1]}</span>
              </div>
            </button>
            {/* My Experience */}
            <button
              onClick={() => {
                scrollToSection("my-experience");
                clickMenu();
              }}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 3 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex justify-center align-middle gap-2">
                <span>{languageMap().menu[2]}</span>
              </div>
            </button>
            {/* Projects */}
            <button
              onClick={() => {
                scrollToSection("projects");
                clickMenu();
              }}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 4 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex justify-center align-middle gap-2">
                <span>{languageMap().menu[3]}</span>
              </div>
            </button>
            {/* Blog */}
            {/* <button
              onClick={() => {
                scrollToSection("projects");
                clickMenu();
              }}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 4 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex justify-center align-middle gap-2">
                <span>{languageMap().menu[4]}</span>
              </div>
            </button> */}
          </div>
        </div>
        {/* === Download Resume === */}
        <div class="flex justify-center items-center py-[20px] lg:py-0 h-fit lg:h-16 w-full lg:w-32">
          <a
            href={cv}
            download
            class="hover:font-bold px-1 py-2 text-nowrap cursor-pointer"
          >
            {languageMap().menu[5]}
          </a>
        </div>
        {/* === end of Download Resume === */}
      </div>
      {/* === MOBILE === */}
      <div className="flex lg:hidden flex-col py-0 gap-2 w-full top-0 relative">
        {/* === Masking === */}
        <div className="h-screen w-screen bg-black opacity-60 z-10"></div>
        {/* === end of Masking === */}
        <div className="absolute bg-zinc-950 flex flex-col justify-between w-[75%] self-end h-screen py-6 z-20">
          {/* === Sub Container 1 ===*/}
          <div className="flex flex-col gap-5">
            {/* === Close Button === */}
            <button
              type="button"
              className="text-red-400 font-bold px-2  w-fit"
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
            <div className="flex flex-col gap-5 px-5 py-2 text-base">
              {/* Back To Top */}
              <button
                onClick={() => {
                  scrollToSection("hero");
                  clickMenu();
                }}
                class={`hover:font-bold hover:text-lg hover:text-indigo-500 cursor-pointer ${
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
                class={`hover:font-bold hover:text-lg cursor-pointer ${
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
                class={`hover:font-bold hover:text-lg cursor-pointer ${
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
                class={`hover:font-bold hover:text-lg cursor-pointer ${
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
                class={`hover:font-bold hover:text-lg cursor-pointer ${
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
                class={`hover:font-bold hover:text-lg cursor-pointer ${
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
                  className="flex flex-row gap-2 items-center border-2 border-indigo-500 text-indigo-100 hover:bg-indigo-900 text-xl lg:text-lg px-2 py-1 rounded-md text-nowrap"
                >
                  {languageMap().menu[5]}
                </a>
              </div>
            </div>
          </div>
          {/* === end of Sub Container 1 ===*/}
          {/* === Footer === */}
          <div className="flex flex-col text-sm">
            <h1 className="text-white px-2">
              &copy 2025 Copyright, Aldi Ramdani
            </h1>
            <h1 className="text-white px-2 ml-4">All Rights Reserved</h1>
          </div>
        </div>
      </div>
      {/* === end of MOBILE === */}
    </>
  );
};

export default ListMenu;
