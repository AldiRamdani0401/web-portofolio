import { createSignal } from "solid-js";
import LanguageButton from "../../../elements/LanguageButton";
import ListMenu from "../../ListMenu";
import { state } from "../../../../store/store";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const MobileNavBar = () => {
  const [hidden, setHidden] = createSignal(true);

  return (
    <nav
      className={`${
        state.isVisible ? "flex" : "hidden"
      } flex-row sticky top-0 z-[999] justify-between gap-0 md:gap-2 lg:gap-2 xl:gap-4 py-4 px-0 md:px-3 lg:px-10 h-16 w-full items-center
    bg-gray-950 text-slate-200
    select-none`}
    >
      {/* === LOGO === */}
      <button
        onclick={() => scrollToSection("hero")}
        className="
        w-full md:w-fit lg:w-fit xl:w-fit px-2 xl:px-0
        text-lg font-bold
        text-nowrap cursor-pointer"
      >
        My Portfolio 🚀
      </button>
      {/* === end of LOGO === */}
      {/* Language */}
      <div className="hidden lg:block ml-3">
        <LanguageButton />
      </div>

      {/* Menu */}
      <div className="lg:hidden flex flex-row justify-end w-full">
        <LanguageButton />
        {/* Side Bar Button */}
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
      {/* === MOBILE === */}
      <div className="block">
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

export default MobileNavBar;
