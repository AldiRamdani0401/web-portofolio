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
      <div className="flex flex-col lg:flex-row justify-center align-middle py-2 lg:py-0 gap-0 lg:gap-2 w-full bg-black lg:bg-gray-950 top-0 relative">
        <div className="flex flex-col justify-center w-full h-full pt-[20px] lg:pt-0 lg:h-16 bg-black lg:bg-gray-950">
          <div className="flex flex-col lg:flex-row gap-5 justify-center text-base">
            <button
              onClick={() => scrollToSection("about-me")}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 1 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex justify-center align-middle gap-2">
                <span>About Me</span>
                <span class="block lg:hidden">👨🏻‍💼</span>
              </div>
            </button>
            <button
              onClick={() => scrollToSection("my-expertise")}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 2 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex justify-center align-middle gap-2">
                <span>Expertise</span>
                <span class="block lg:hidden">👨🏻‍💻</span>
              </div>
            </button>
            <button
              onClick={() => scrollToSection("my-experience")}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 3 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex justify-center align-middle gap-2">
                <span>Experience</span>
                <span class="block lg:hidden">🚀</span>
              </div>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              class={`hover:font-bold hover:text-lg cursor-pointer ${
                activeSection() === 4 ? "font-bold text-lg" : ""
              }`}
            >
              <div className="flex justify-center align-middle gap-2">
                <span>Projects</span>
                <span class="block lg:hidden">📱📐</span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex justify-center align-middle py-[20px] lg:py-0 h-fit lg:h-16 w-full lg:w-32">
          <a class="self-center hover:font-bold hover:text-lg cursor-pointer ">
              Be Friends
          </a>
        </div>
      </div>
  );
};

export default ListMenu;
