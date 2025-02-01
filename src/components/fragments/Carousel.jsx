import { SolidTyper } from "solid-typer";
import hero from "../../assets/images/hero.png";

import { logoCSS, logoGitHub, logoHTML } from "../../assets/logos";

const Carousel = () => {
  return (
    <section id="hero" className="h-dvh flex bg-gray-950">
      <div className="w-full h-1/2 flex gap-0 flex-col-reverse md:flex-row lg:flex-row xl:flex-row lg:justify-between mt-10 lg:mt-[10%] border">
        <div className="flex flex-col items-start lg:items-center justify-normal lg:justify-center mx-auto px-5 py-14 gap-0 lg:gap-10 animate-fadeIn w-full h-fit lg:w-full lg:h-full lg:p-0">
          {/* Interactive Logo 1 */}
          {/* <div className="flex flex-row gap-8 border relative">
            <img src={logoHTML} class="h-10 animate-pulse-long" alt="github" />
            <img src={logoCSS} class="h-10 animate-pulse-4" alt="github" />
            <img src={logoHTML} class="h-10 animate-pulse-long" alt="github" />
            <img src={logoCSS} class="h-10 animate-pulse-4" alt="github" />
          </div> */}
          <span className="flex flex-col justify-center text-white text-center font-bold sm:text-xl md:text-5xl lg:text-4xl w-full h-full">
            <SolidTyper
              text={[
                "Hello, I'm Aldi Ramdani",
                "I am a Fullstack Developer",
              ]}
              loop={true}
              startDelay={3300}
              backspaceSpeed={100}
              typingSpeed={90}
              cursor={true}
              cursorClassName="cursor"
            />
          </span>
        </div>
        <div className="w-full h-fit p-5 lg:w-full lg:h-full lg:p-0 flex items-center animate-fadeIn">
          <div className="h-48 w-48 lg:h-96 lg:w-96 mx-auto bg-slate-800 rounded-full overflow-hidden">
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
