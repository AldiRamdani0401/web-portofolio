import { SolidTyper } from "solid-typer";

import hero from "../../assets/images/hero.png";

const Carousel = () => {
  return (
    <div className="bg-gray-950 w-full h-full flex gap-16 sm:flex-col md:flex-row lg:flex-row xl:flex-row md:justify-around lg:justify-around xl:justify-around relative">
      <div className="flex self-center justify-center mx-auto text-nowrap mt-5 p-5 w-full md:w-fit bg-black md:bg-gray-950 animate-fadeIn">
        <span className="text-white font-bold sm:text-xl md:text-5xl text-center sm:w-80 lg:w-148 xl:w-148">
          <SolidTyper
            text={[
              "Hello, I'm Aldi Ramdani",
              "I am a Fullstack Developer",
              "Let's collaborate..",
            ]}
            loop={true}
            startDelay={3000}
            backspaceSpeed={100}
            typingSpeed={90}
            cursor={true}
            cursorClassName="cursor"
          />
        </span>
      </div>
      <div className="absolute md:relative bottom-0 h-130 w-full md:h-fit md:w-fit animate-fadeIn mx-0 md:mx-16">
        <div className="relative h-full w-full z-10 ">
          <div className="h-12 w-36 sm:h-14 sm:w-44 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-20 text-center py-2 sm:py-4 shadow-lg flex items-center justify-center absolute bottom-5 right-8">
            <span className="font-semibold text-slate-200 text-lg sm:text-lg font-sans tracking-wide hover:font-extrabold">
              <SolidTyper
                text={["Aldi Ramdani"]}
                backspaceSpeed={50}
                typingSpeed={110}
              />
            </span>
          </div>
          <img className="z-10 h-full mx-auto md:pt-[76px]" src={hero} alt="aldi-ramdani" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
