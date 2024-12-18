import profile from "../../../assets/images/profile.png";

import { languageMap } from "../../../store/language";

const AboutMe = () => {
  return (
    <section id="about-me" className="h-fit w-full">
      <div className="bg-indigo-950 text-white">
        <h1 className="text-center font-bold text-4xl py-5">
          {languageMap().content[0]} 👨🏻‍💼
        </h1>
      </div>
      <div className="grid grid-row lg:grid-flow-col py-5 lg:py-16 gap-0 lg:gap-5 sm:px-0 lg:px-10 bg-zinc-950">
        <div className=" w-full h-fit pt-4 bg-gray-950  hover:bg-indigo-950">
          <img src={profile} class="w-full lg:w-100" />
        </div>
        <div className="flex flex-col h-full">
          <div className="bg-black p-8 lg:p-5 mb-0 lg:mb-10 text-white">
            <p className="mb-4 text-center lg:text-justify">
              {languageMap()["sub-content"][0][0]}
              <span className="font-bold text-xl">Aldi Ramdani</span>
              {languageMap()["sub-content"][0][1]}
              <span className="font-bold text-lg">
                {languageMap()["sub-content"][0][2]}
              </span>
              .
            </p>

            <p className="mb-4 text-justify">
              <span className="ml-8">{languageMap()["sub-content"][0][3]}</span>
              <span className="font-bold text-lg">
                {languageMap()["sub-content"][0][4]}
              </span>
              {languageMap()["sub-content"][0][5]}{" "}
              <span className="font-bold">STTI Sony Sugema</span>,
              {languageMap()["sub-content"][0][6]}
              <span className=" font-bold text-lg">Fullstack Developer</span>
              {languageMap()["sub-content"][0][7]}
            </p>
            <p className="mb-4 text-justify">
              <span className="ml-8">{languageMap()["sub-content"][0][8]}</span>
              <span className=" font-bold text-lg">JavaScript</span>
              {languageMap()["sub-content"][0][9]}
              <span className=" font-bold text-lg"> PHP</span>,
              {languageMap()["sub-content"][0][10]}
            </p>

            <p className="mb-4 text-justify">
              <span className="ml-8">
                {languageMap()["sub-content"][0][11]}
              </span>
              {languageMap()["sub-content"][0][12]}
            </p>

            <p className="mb-4 text-justify">
              <span className="ml-8">
                {languageMap()["sub-content"][0][13]}
              </span>
              <span className=" font-bold text-lg">
                {languageMap()["sub-content"][0][14]}
              </span>
              {languageMap()["sub-content"][0][15]}
              <span className=" font-bold text-lg">
                {languageMap()["sub-content"][0][16]}
              </span>
              {languageMap()["sub-content"][0][17]}
            </p>

            <p className="text-justify">
              {languageMap()["sub-content"][0][18]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
