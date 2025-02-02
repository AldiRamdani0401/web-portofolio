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
    <div className="flex flex-col lg:flex-row justify-center align-middle py-2 lg:py-0 gap-0 lg:gap-2 w-full bg-blue-500 lg:bg-gray-950 top-0 relative">
      <div className="flex flex-col justify-center lg:w-full h-screen lg:h-16 pt-[20px] lg:pt-0  bg-black lg:bg-gray-950">
        <div className="flex flex-col lg:flex-row gap-5 justify-center text-base">
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
            <div className="flex justify-center align-middle gap-2">
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
              <span>{languageMap().menu[4]}</span>
            </div>
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center py-[20px] lg:py-0 h-fit lg:h-16 w-full lg:w-32">
        <a
          href={cv}
          download
          class="hover:font-bold px-1 py-2 text-nowrap cursor-pointer"
        >
          {languageMap().menu[5]}
        </a>
      </div>
    </div>
  );
};

export default ListMenu;
