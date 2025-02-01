import { SolidTyper } from "solid-typer";
import hero from "../../assets/images/hero.png";

import { logoCSS, logoGitHub, logoHTML } from "../../assets/logos";

const Carousel = () => {
  return (
    <section id="hero" className="h-dvh">
      <div className="bg-gray-950 w-full h-dvh flex gap-0 flex-col md:flex-row lg:flex-row xl:flex-row justify-normal lg:justify-between">
        <div className="flex flex-col items-center justify-center mx-auto px-5 py-14 gap-10 bg-black md:bg-gray-950 animate-fadeIn w-full h-full">
          {/* Interactive Logo 1 */}
          {/* <div className="flex flex-row gap-8 border relative">
            <img src={logoHTML} class="h-10 animate-pulse-long" alt="github" />
            <img src={logoCSS} class="h-10 animate-pulse-4" alt="github" />
            <img src={logoHTML} class="h-10 animate-pulse-long" alt="github" />
            <img src={logoCSS} class="h-10 animate-pulse-4" alt="github" />
          </div> */}
          <span className="text-white text-center font-bold sm:text-xl md:text-5xl lg:text-4xl w-full">
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
        <div className="w-full h-full flex items-center animate-fadeIn">
          <div className="h-96 w-96 mx-auto bg-slate-800 rounded-full overflow-hidden">
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
