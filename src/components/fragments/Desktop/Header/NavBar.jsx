import DesktopListMenu from "./ListMenu";
import LanguageButton from "../../../elements/LanguageButton";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const DeskstopNavBar = () => {
  return (
    <nav
      className="
      flex flex-row sticky top-0 z-[999] justify-between gap-0 md:gap-2 lg:gap-2 xl:gap-4 py-4 px-0 md:px-3 lg:px-10 h-16 w-full items-center
    bg-gray-950 text-slate-200
      select-none"
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
      {/* Desktop */}
      <div className="hidden lg:block relative w-full">
        <div className="absolute top-[31px] left-[-165px] z-[888] lg:static lg:block w-[393px] lg:w-full h-fit lg:bg-gray-950">
          <DesktopListMenu />
        </div>
      </div>
      {/* Language */}
      <div className="ml-3 md:hidden lg:block">
        <LanguageButton />
      </div>
    </nav>
  );
};

export default DeskstopNavBar;
