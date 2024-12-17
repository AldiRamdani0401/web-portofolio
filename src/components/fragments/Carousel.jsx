import { SolidTyper } from "solid-typer";
import hero from "../../assets/images/hero.png";

const Carousel = () => {
  return (
    <div className="bg-gray-950 w-full h-dvh flex gap-0 lg:gap-16 flex-col md:flex-row lg:flex-row xl:flex-row justify-normal lg:justify-around">
      <div className="flex self-center mx-auto text-nowrap mt-5 p-5 w-full md:w-fit bg-black md:bg-gray-950 animate-fadeIn">
        <span className="text-white font-bold sm:text-xl md:text-5xl text-center sm:w-80 lg:w-148 xl:w-148">
          <SolidTyper
            text={[
              "Hello, I'm Aldi Ramdani",
              "I am a Fullstack Developer",
              "Let's collaborate.."
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
      <div className="relative px-0 lg:px-10">
        <div className="absolute h-12 w-36 sm:h-14 sm:w-44 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-20 text-center py-2 sm:py-4 shadow-lg flex items-center justify-center bottom-5 lg:bottom-20 right-8">
          <span className="font-semibold text-slate-200 text-lg sm:text-lg font-sans tracking-wide hover:font-extrabold">
            <SolidTyper
              text={["Aldi Ramdani"]}
              backspaceSpeed={50}
              typingSpeed={110}
            />
          </span>
        </div>
        <img
          className="bg-slate-950 md:bg-gray-950 lg:bg-gray-950 z-10 h-full px-5 pt-36 mx-auto md:pt-[76px] lg:pt-[76px]"
          src={hero}
          alt="aldi-ramdani"
        />
      </div>
    </div>
  );
};

export default Carousel;
