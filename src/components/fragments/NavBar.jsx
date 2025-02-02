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
      } flex-row sticky top-0 z-[999] justify-between gap-4 items-center bg-gray-950 py-4 px-2 lg:px-10 h-16 w-full text-slate-200 select-none`}
    >
      <button
        onclick={() => scrollToSection("hero")}
        className="cursor-pointer text-lg font-bold text-nowrap"
      >
        My Portfolio 🚀
      </button>
      {/* Desktop */}
      <div className="hidden lg:block relative w-full">
        <div
          className={`${
            hidden() ? "hidden" : "block"
          } absolute top-[31px] left-[-165px] z-[888] lg:static lg:block w-[393px] lg:w-full h-fit lg:bg-gray-950`}
        >
          <ListMenu hidden={setHidden} />
        </div>
      </div>
      {/* Language */}
      <div className="hidden lg:block">
        <LanguageButton />
      </div>

      {/* Menu */}
      <div className="lg:hidden flex flex-row justify-end w-full">
        <LanguageButton />
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
      </div>
      {/* Mobile */}
      <div className="block lg:hidden">
        <div
          className={`${
            hidden() ? "hidden" : "block"
          } absolute top-0 left-0 z-[888] lg:static lg:block w-screen h-screen lg:bg-gray-950`}
        >
          <ListMenu hidden={setHidden} />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
