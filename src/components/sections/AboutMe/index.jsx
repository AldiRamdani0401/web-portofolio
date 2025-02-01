import profile from "../../../assets/images/profile.png";

import { languageMap } from "../../../store/language";

const AboutMe = () => {
  return (
    <section id="about-me" className="h-dvh w-full py-5 bg-slate-950 snap-center animate-fadeIn">
      {/* <div className="text-white">
        <h1 className="text-center font-bold text-3xl py-5">
          {languageMap().content[0]} 👨🏻‍💼
        </h1>
      </div> */}
      <div className="flex lg:flex-row justify-center gap-0 lg:gap-5 sm:px-0 lg:px-10 h-full">
        <div className="w-1/2 mt-[5%]">
          <div className="flex flex-col w-fit h-96 mx-auto mt-16 bg-gray-800 rounded-full overflow-hidden">
            <img src={profile} class="object-cover w-96" />
          </div>
        </div>
        <div className="w-full mt-5">
          <h1 className="font-bold text-3xl py-5 text-slate-300">
            {languageMap().content[0]}
          </h1>
          <div className="border-2 py-[0.8px] rounded-sm bg-gradient-to-r from-slate-100 via-yellow-600 to-slate-100 bg-clip-border border-transparent animate-gradient-x"></div>
          <div className="py-5 mb-0 text-slate-300 w-fit h-fit">
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
