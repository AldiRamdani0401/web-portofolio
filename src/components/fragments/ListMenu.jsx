import { createSignal, onCleanup } from "solid-js";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const ListMenu = () => {
  const [activeSection, setActiveSection] = createSignal(null); // Track the active section

  const handleScroll = () => {
    const content = document.getElementById("content");
    const elements = content.querySelectorAll("section");

    // Get the middle of the viewport
    const viewportTarget = window.innerHeight / 2;

    let sectionFound = false; // To track if we are in the section with id="#"

    elements.forEach((element, i) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // Check if the middle of the viewport is within the section
      if (element.id === "#") {
        if (elementTop < viewportTarget && elementBottom > viewportTarget) {
          setActiveSection(null); // Clear active section when in the '#' section
          sectionFound = true; // Mark that we found the section with id="#"
        }
      } else if (
        elementTop < viewportTarget &&
        elementBottom > viewportTarget &&
        !sectionFound
      ) {
        setActiveSection(i); // Set the active section index for other sections
      }
    });
  };

  // Attach scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Cleanup the event listener on component unmount
  onCleanup(() => window.removeEventListener("scroll", handleScroll));

  return (
      <div className="flex flex-col md:flex-row justify-center align-middle py-2 md:py-0 gap-0 md:gap-2 w-full sm:bg-black md:bg-gray-950 top-0 relative">
        <div className="flex flex-col justify-center w-full h-full pt-[20px] md:pt-0 md:h-16 sm:bg-black md:bg-gray-950">
          <div className="flex sm:flex-col lg:flex-row gap-5 justify-center text-base">
            <button
              onClick={() => scrollToSection("about-me")}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 1 ? "font-bold text-lg" : ""
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("my-expertise")}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 2 ? "font-bold text-lg" : ""
              }`}
            >
              My Expertise
            </button>
            <button
              onClick={() => scrollToSection("my-experience")}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 3 ? "font-bold text-lg" : ""
              }`}
            >
              My Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 4 ? "font-bold text-lg" : ""
              }`}
            >
              Projects
            </button>
          </div>
        </div>
        <div className="flex justify-center align-middle py-[20px] md:py-0 h-fit md:h-16 w-full md:w-32">
          <a class="self-center hover:font-bold hover:text-lg cursor-pointer ">
            Be Friends
          </a>
        </div>
      </div>
  );
};

export default ListMenu;
