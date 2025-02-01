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
  logoGitHub,
  logoVercel,
  logoHeroku
} from "../../../assets/logos";

import { languageMap } from "../../../store/language";

const MyExpertise = () => {
  return (
    <section id="my-expertise" className="bg-gray-950 h-dvh snap-center w-full">
      <div className="text-white">
        <h1 className="text-center font-bold text-4xl py-5">
          {languageMap().content[1]} 👨🏻‍💻
        </h1>
      </div>
      <div className="grid grid-row lg:grid-flow-col lg:grid-cols-2 h-fit gap-5 lg:gap-10 lg:px-10 py-14">
        {/* Logo Technologies */}
        <div className="flex flex-col gap-3 lg:gap-3">
          <h4 className="text-white text-center font-bold text-2xl">
            Technologies :
          </h4>
          {/* Container Logos */}
          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex flex-row gap-2">
              <img
                src={logoHTML}
                className="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoCSS}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoJS}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoPHP}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoWebPack}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoAstro}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoNodeJS}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoLaravel}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoComposer}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoNPM}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoReact}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoReactNative}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoSolidJS}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoBootstrap}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoTailwind}
                class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoGitHub}
                class="bg-white h-16 w-16 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoReefJS}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoExpressJS}
                class="bg-white h-16 w-16 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoFastify}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoBulma}
                class="bg-white h-16 w-16 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoMySQL}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoPostgreSQL}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoMongoDB}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoSupaBase}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoGoogleCloud}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoKubernetes}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoDocker}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoNgrok}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={logoVercel}
                class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
              <img
                src={logoHeroku}
                class="bg-white h-16 w-16 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
              />
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="flex flex-col justify-center py-0 align-middle h-full self-center">
          <div className="p-8 lg:p-5 text-white">
            <p className="mb-4 text-justify">
              <span className="ml-8">{languageMap()["sub-content"][1][0]}</span>
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
              <span className="ml-8">{languageMap()["sub-content"][1][6]}</span>
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
              <span className="font-bold text-lg"> Micro-Services </span>.{" "}
              {languageMap()["sub-content"][1][23]}
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
  );
};

export default MyExpertise;
