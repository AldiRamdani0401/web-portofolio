import { createSignal } from "solid-js";

// Store
import { state } from "../../store/store";

import ListMenu from "./ListMenu";
import LanguageButton from "../elements/LanguageButton";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const NavBar = () => {
  const [hidden, setHidden] = createSignal(true);
  return (
    <nav
      className={`${
        state.isVisible ? "flex" : "hidden"
      } flex-row sticky top-0 z-[999] justify-between gap-4 items-center bg-gray-950 py-4 px-2 lg:px-10 h-16 w-full text-white select-none`}
    >
      <button
        onclick={() => scrollToSection("hero")}
        className="cursor-pointer text-lg font-bold text-nowrap"
      >
        My Portfolio 🚀
      </button>
      {/* Mobile */}
      <div className="relative w-full">
        <div
          className={`${
            hidden() ? "hidden" : "block"
          } absolute top-[31px] left-[-165px] z-[888] lg:static lg:block w-[393px] lg:w-full h-fit lg:bg-gray-950`}
        >
          <ListMenu hidden={setHidden} />
        </div>
      </div>
      {/* Language */}
      <LanguageButton/>

      {/* Menu */}
      <button
        className="block lg:hidden p-2 hover:bg-blue-950"
        onClick={() => {
          setHidden((prev) => !prev);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
};
export default NavBar;
