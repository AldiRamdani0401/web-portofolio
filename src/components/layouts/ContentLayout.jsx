import Carousel from "../fragments/Carousel";
import SliderImage from "../fragments/SliderImage";

import profile from "../../assets/images/profile.png";

// Experience
import bangkit from "../../assets/images/expriences/bangkit.png";

// Logo
import {
  logoHTML,
  logoCSS,
  logoJS,
  logoPHP,
  logoWebPack,
  logoAstro,
  logoLaravel,
  logoComposer,
  logoNPM,
  logoNodeJS,
  logoReact,
  logoReactNative,
  logoSolidJS,
  logoReefJS,
  logoExpressJS,
  logoFastify,
  logoTailwind,
  logoBulma,
  logoBootstrap,
  logoMySQL,
  logoPostgreSQL,
  logoMongoDB,
  logoSupaBase,
  logoGoogleCloud,
  logoKubernetes,
  logoDocker,
  logoNgrok,
} from "../../assets/logos/index";
import Projects from "../fragments/Projects";
import { languageMap } from "../../store/language";

const ContentLayout = () => {
  return (
    <div id="content" className="relative">
      <section id="hero" className="h-dvh">
        <Carousel />
      </section>
      {/* ABOUT ME */}
      <section id="about-me" className="w-full">
        <div className="bg-indigo-950 text-white">
          <h1 className="text-center font-bold text-4xl py-5">
            {languageMap().content[0]} 👨🏻‍💼
          </h1>
        </div>
        <div className="h-dvh grid grid-row lg:grid-flow-col py-5 gap-0 lg:gap-5 sm:px-0 lg:px-10 bg-zinc-950">
          <div className=" w-full h-fit pt-4 bg-gray-950  hover:bg-indigo-950">
            <img src={profile} class="w-full lg:w-100" />
          </div>
          <div className="flex flex-col h-full">
            <div className="bg-black p-8 lg:p-5 text-white">
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
                <span className="ml-8">
                  {languageMap()["sub-content"][0][3]}
                </span>
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
                <span className="ml-8">
                  {languageMap()["sub-content"][0][8]}
                </span>
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
      {/* MY EXPERTISE */}
      <section id="my-expertise" className="mt-[840px] lg:mt-0 w-full">
        <div className="bg-indigo-950 text-white">
          <h1 className="text-center font-bold text-4xl py-5">
            {languageMap().content[1]} 👨🏻‍💻
          </h1>
        </div>
        <div className="grid grid-row lg:grid-flow-col lg:grid-cols-2 h-fit gap-5 lg:gap-10 lg:px-10 py-8 bg-zinc-950">
          <div className="flex flex-col gap-3 lg:gap-3">
            <h4 className="text-white text-center font-bold text-2xl">
              Technologies :
            </h4>
            <div className="flex flex-wrap justify-center gap-2 px-2 lg:px-24">
              <img
                src={logoHTML}
                className="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoCSS}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoJS}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoPHP}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoWebPack}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoAstro}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoNodeJS}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoLaravel}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoComposer}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoNPM}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoReact}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoReactNative}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoSolidJS}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoBootstrap}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoTailwind}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2 lg:gap-2">
              <div className="flex justify-center gap-1 w-full lg:w-1/3 px-5 lg:px-0">
                <img
                  src={logoReefJS}
                  class="bg-white h-16 p-1 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
                <img
                  src={logoExpressJS}
                  class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
              </div>
              <div className="flex justify-center gap-1 w-full lg:w-1/3 px-5 lg:px-0">
                <img
                  src={logoFastify}
                  class="bg-white h-16 p-1 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
                <img
                  src={logoBulma}
                  class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
              </div>
              <div className="flex justify-center gap-1 w-full lg:w-1/3 px-5 lg:px-0">
                <img
                  src={logoMySQL}
                  class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
                <img
                  src={logoPostgreSQL}
                  class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
              </div>
              <div className="flex justify-center gap-1 w-full lg:w-1/3 px-5 lg:px-0">
                <img
                  src={logoMongoDB}
                  class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
                <img
                  src={logoSupaBase}
                  class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
              </div>
              <div className="flex justify-center gap-1 w-full lg:w-1/3 px-5 lg:px-0">
                <img
                  src={logoGoogleCloud}
                  class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
                <img
                  src={logoKubernetes}
                  class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
              </div>
              <div className="flex justify-center gap-1 w-full lg:w-1/3 px-5 lg:px-0">
                <img
                  src={logoDocker}
                  class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
                <img
                  src={logoNgrok}
                  class="bg-white h-16 p-1 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center py-0 align-middle h-full self-center">
            <div className="bg-black p-8 lg:p-5 text-white">
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][1][0]}
                </span>
                <span className="font-bold text-lg">
                  {languageMap()["sub-content"][1][1]}
                </span>
                ,
                <span className="font-bold text-lg">
                  {languageMap()["sub-content"][1][2]}
                </span>
                ,
                <span className="font-bold text-lg">
                  {languageMap()["sub-content"][1][3]}
                </span>
                , {languageMap()["sub-content"][1][4]}
                <span className="font-bold text-lg">
                  {" "}
                  {languageMap()["sub-content"][1][5]}
                </span>
                .
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][1][6]}
                </span>
                <span className="font-bold text-lg">
                  {languageMap()["sub-content"][1][7]}
                </span>
                <span className="font-light">
                  (<i>Laravel, PHP Native, Composer</i>)
                </span>
                {languageMap()["sub-content"][1][8]}
                <span className="font-bold text-lg">
                  {languageMap()["sub-content"][1][9]}
                </span>
                <span className="font-light">
                  (
                  <i>
                    Astro, NPM, NodeJS, React, React-Native, SolidJS, ReefJS,
                    ExpressJS, Fastify
                  </i>
                  )
                </span>
                . {languageMap()["sub-content"][1][10]}
                <span className="font-bold text-lg">
                  {languageMap()["sub-content"][1][11]}
                </span>
                {languageMap()["sub-content"][1][12]}
                <span className="font-bold text-lg">
                  {languageMap()["sub-content"][1][13]}
                </span>
                .
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][1][14]}
                </span>
                <span className="font-bold text-lg">
                  {languageMap()["sub-content"][1][15]}
                </span>
                ,
                <span className="font-bold text-lg">
                  {languageMap()["sub-content"][1][16]}
                </span>
                <span className="font-light">
                  (<i>Tailwind, Bulma, Bootstrap</i>)
                </span>
                , {languageMap()["sub-content"][1][17]}
                <span className="font-bold text-lg">MySQL</span>,{" "}
                <span className="font-bold text-lg">PostgreSQL</span>,{" "}
                <span className="font-bold text-lg">MongoDB</span>,{" "}
                {languageMap()["sub-content"][1][18]}
                <span className="font-bold text-lg">SupaBase</span>.
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][1][19]}
                </span>
                <span className="font-bold text-lg">Google Cloud</span>,{" "}
                <span className="font-bold text-lg">Docker</span>
                {languageMap()["sub-content"][1][20]}
                <span className="font-bold text-lg">Kubernetes</span>.{" "}
                {languageMap()["sub-content"][1][21]}
                <span className="font-bold text-lg">OOP</span>,{" "}
                <span className="font-bold text-lg">REST-API</span>,
                <span className="font-bold text-lg"> MVC, </span>
                {languageMap()["sub-content"][1][22]}
                <span className="font-bold text-lg">
                  {" "}
                  Micro-Services{" "}
                </span>. {languageMap()["sub-content"][1][23]}
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][1][24]}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* MY EXPERIENCE */}
      <section id="my-experience" className="h-fit w-full">
        <div className="bg-indigo-950 text-white">
          <h1 className="text-center font-bold text-4xl py-5">
            {languageMap().content[2]} 🚀
          </h1>
        </div>
        {/* experience 1 */}
        <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
          <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
            <div className="bg-black py-3 px-5 lg:p-5 text-white rounded-lg">
              <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
                Junior Fullstack Developer
              </p>
              <p className="flex flex-col lg:flex-row mb-4 text-base font-normal lg:text-lg text-justify lg:font-light">
                <span>( 27 September - 04 November 2024 )</span>
                <span>- Heart Developer</span>
              </p>
              <p className="mb-4 text-base font-normal lg:text-lg lg:font-light text-justify">
                Status : {languageMap()["sub-content"][2][0]}
              </p>
              <hr className="mt-1 mb-2 lg:mb-5" />
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][2][1]}
                </span>
                <span class="font-semibold">
                  PT. Pilar Anugerah Digital Indonesia {""}
                </span>
                (Heart Developer), {languageMap()["sub-content"][2][2]}
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][2][3]}
                </span>
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][2][4]}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* experience 2 */}
        <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
          <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
            <div className="bg-black py-3 px-5 lg:p-5 text-white rounded-lg">
              <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
                Fullstack Developer Intern
              </p>
              <p className="mb-4 text-base font-normal lg:text-lg text-justify lg:font-light">
                {languageMap()["sub-content"][3][0]} - GetMedik
              </p>
              <p className="mb-4 text-base font-normal lg:text-lg lg:font-light text-justify">
                Status : {languageMap()["sub-content"][3][1]}
              </p>
              <hr className="mt-1 mb-2 lg:mb-5" />
              <p className="mb-4 text-justify">
                <span class="ml-8 font-semibold">
                  PT. Layanan Medik Indonesia
                </span>
                , {languageMap()["sub-content"][3][2]}
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][3][3]}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* experience 3 */}
        <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
          <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
            <div className="bg-black py-3 px-5 lg:p-5 text-white rounded-lg">
              <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
                {languageMap()["sub-content"][4][0]}
              </p>
              <p className="mb-4 text-[15px] lg:font-medium lg:text-2xl text-left">
                on Basic Internet Programming
              </p>
              <p className="mb-4 text-[13px] text-left font-normal lg:text-lg lg:text-justify lg:font-light">
                {languageMap()["sub-content"][4][1]} - STTI Sony Sugema
              </p>
              <p className="mb-4 text-[15px] text-left font-light lg:text-lg lg:text-justify">
                Status : {languageMap()["sub-content"][4][2]}
              </p>
              <hr className="mt-1 mb-2 lg:mb-5" />
              <p className="mb-4 text-justify">
                <span className="ml-8 font-semibold">
                  {languageMap()["sub-content"][4][3]}
                </span>{" "}
                (STTISS). {languageMap()["sub-content"][4][4]}
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][4][5]}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* experience 4 */}
        <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
          <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
            <div className="bg-black p-5 text-white rounded-lg">
              <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
                {languageMap()["sub-content"][5][0]}
              </p>
              <div className="flex gap-1 flex-col lg:flex-wrap text-[13px] text-left font-normal mb-4 lg:text-lg lg:text-justify lg:font-light">
                <p className="flex flex-col gap-1 lg:flex-row">
                  {languageMap()["sub-content"][5][1]}
                  <span> - Bangkit International Program</span>
                </p>
                <span class="font-light">
                  (<i> Google, GoTo, Traveloka </i>)
                </span>
              </div>
              <p className="mb-4 text-[13px] lg:text-lg font-light text-justify">
                Status : {languageMap()["sub-content"][5][2]}
              </p>
              <hr className="mt-1 mb-2 lg:mb-5" />
              <p className="mb-4 text-justify">
                <span class="ml-8 font-semibold">
                  {languageMap()["sub-content"][5][3]}
                </span>
                , {languageMap()["sub-content"][5][4]}
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][5][5]}
                </span>
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {languageMap()["sub-content"][5][6]}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* experience 5 */}
        <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
          <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
            <div className="bg-black p-5 text-white rounded-lg">
              <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
              {languageMap()["sub-content"][6][0]}
              </p>
              <p className="mb-4 text-[13px] text-left font-normal lg:text-lg lg:text-justify lg:font-light">
              {languageMap()["sub-content"][6][1]} - STTI Sony Sugema
              </p>
              <p className="mb-4 text-[15px] text-left font-light lg:text-lg lg:text-justify">
                Status : {languageMap()["sub-content"][6][2]}
              </p>
              <hr className="mt-1 mb-2 lg:mb-5" />
              <p className="mb-4 text-justify">
                <span className="ml-8">{languageMap()["sub-content"][6][3]}</span>
                <span class="font-semibold">
                {languageMap()["sub-content"][6][4]}
                </span> (STTISS), {languageMap()["sub-content"][6][5]}
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">
                {languageMap()["sub-content"][6][6]}</span>
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">{languageMap()["sub-content"][6][7]}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <Projects />
    </div>
  );
};

export default ContentLayout;
