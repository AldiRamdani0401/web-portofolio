import { SolidTyper } from "solid-typer";

import hero from "../../assets/images/hero.png";

const Carousel = () => {
  return (
    <div className="bg-gray-950 w-full h-full flex sm:gap-16 sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row md:justify-around lg:justify-around xl:justify-around relative">
      <div className="self-center mx-auto animate-fadeIn">
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
      <div className="relative animate-fadeIn mx-16">
        <div className="relative top-0 z-10">
          <div className="h-12 w-36 sm:h-14 sm:w-44 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-20 text-center py-2 sm:py-4 shadow-lg flex items-center justify-center absolute bottom-5 right-8">
            <span className="font-semibold text-slate-200 text-lg sm:text-lg font-sans tracking-wide hover:font-extrabold">
              <SolidTyper
                text={["Aldi Ramdani"]}
                backspaceSpeed={50}
                typingSpeed={110}
              />
            </span>
          </div>
          <img className="z-10" src={hero} class="pt-16" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
