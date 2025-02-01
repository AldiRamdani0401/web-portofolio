import { SolidTyper } from "solid-typer";
import hero from "../../assets/images/hero.png";

import { logoCSS, logoGitHub, logoHTML } from "../../assets/logos";
import IconDownLoad from "../../assets/icons/download";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Carousel = () => {
  return (
    <section id="hero" className="h-dvh bg-gray-950 py-10 xl:py-[10%]">
      <div className="px-0 lg:px-10 w-full h-fit flex gap-0 flex-col-reverse md:flex-row lg:flex-row xl:flex-row justify-normal lg:justify-between mt-0">
        <div className="flex flex-col items-start lg:items-center justify-normal lg:justify-center mx-auto px-5 gap-3 animate-fadeIn w-full h-fit lg:w-full lg:h-full lg:px-8 ">
          {/* SUB CONTAINER 1 */}
          <div className="flex flex-col gap-2 w-full">
            <h1 className="font-normal text-xl text-slate-100">Hello, Iam </h1>
            <h1 className="font-normal text-4xl text-white">Aldi Ramdani</h1>
          </div>
          {/* Interactive Logo 1 */}
          {/* <div className="flex flex-row gap-8 border relative">
            <img src={logoHTML} class="h-10 animate-pulse-long" alt="github" />
            <img src={logoCSS} class="h-10 animate-pulse-4" alt="github" />
            <img src={logoHTML} class="h-10 animate-pulse-long" alt="github" />
            <img src={logoCSS} class="h-10 animate-pulse-4" alt="github" />
          </div> */}
          <span className="flex flex-row gap-2 text-indigo-300 text-center font-bold text-2xl md:text-5xl lg:text-2xl w-full h-fit">
            <span className="text-white font-normal">A</span>
            <SolidTyper
              text={[
                "Fullstack Developer",
                "Front-End Developer",
                "Back-End Developer",
                "Fast Learner",
              ]}
              loop={true}
              startDelay={3300}
              backspaceSpeed={90}
              typingSpeed={90}
              cursor={true}
              cursorClassName="cursor text-white font-normal ml-1"
            />
          </span>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-slate-200 font-normal text-base lg:text-lg text-justify lg:text-justify">Saya seorang Fullstack Developer dengan keahlian JavaScript, TypeScript, PHP, Go, dan terus mengembangkan keterampilan saya di bidang software development.</p>
            {/* Buttons */}
            <div className="mt-3 flex gap-8 flex-row justify-normal w-full">
              {/* About Me */}
              <div className="w-fit lg:w-[20%]">
                <button type="button" onClick={() => scrollToSection("about-me")} className="border border-indigo-500 text-indigo-100 hover:bg-indigo-900 text-xl lg:text-lg px-2 py-1 rounded-md text-nowrap">About Me</button>
              </div>
              {/* Resume */}
              <div className="w-fit">
                <button type="button" onClick={() => scrollToSection("about-me")} className="flex flex-row gap-2 items-center border border-indigo-500 text-indigo-100 hover:bg-indigo-900 text-xl lg:text-lg px-2 py-1 rounded-md text-nowrap">
                  <IconDownLoad/>
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit p-5 lg:w-full lg:h-full lg:p-0 flex animate-fadeIn">
          <div className="h-56 w-56 lg:h-96 lg:w-96 mx-auto bg-slate-800 rounded-full overflow-hidden">
            <img
              className="object-cover rounded-t-full mx-auto bg-none z-10 lg:h-full xl:h-full bottom-0"
              src={hero}
              alt="aldi-ramdani"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
