import { createSignal, onCleanup } from "solid-js";
import Notification from "./Notification";

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
  const [activeSection, setActiveSection] = createSignal(null);

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
    <footer className="mt-20 flex flex-col lg:flex-col gap-4 justify-between bg-gray-950 p-4 w-full text-white">
      <div className="flex flex-row">
        <div className="flex flex-col gap-4 justify-between w-full">
          <button
            onclick={() => scrollToSection("hero")}
            className="cursor-pointer text-lg lg:text-4xl font-bold text-nowrap"
          >
            My Portfolio 🚀
          </button>
        </div>
        {/* <div className="flex flex-col w-full"> */}
          {/* About Me */}
          {/* <button
            onClick={() => {
              scrollToSection("about-me");
            }}
            class={`hover:font-bold hover:text-lg cursor-pointer ${
              activeSection() === 1 ? "font-bold text-lg" : ""
            }`}
          >
            About Me
          </button> */}
          {/* My Expertise */}
          {/* <button
            onClick={() => {
              scrollToSection("my-expertise");
            }}
            class={`hover:font-bold hover:text-lg cursor-pointer ${
              activeSection() === 1 ? "font-bold text-lg" : ""
            }`}
          >
            My Expertise
          </button> */}
        {/* </div> */}
      </div>
      <hr />
      <div className="text-center">
        Copyright &copy; {thisYear} - Aldi Ramdani
      </div>
    </footer>
  );
};

export default Footer;
