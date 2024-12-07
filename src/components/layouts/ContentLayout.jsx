import Carousel from "../fragments/Carousel";
import SliderImage from "../fragments/SliderImage";

import profile from "../../assets/images/profile.png";

// Experience
import bangkit from "../../assets/images/expriences/bangkit.png";

// Logo
import {
  logoHTML, logoCSS, logoJS, logoPHP, logoWebPack, logoAstro,
  logoLaravel, logoComposer, logoNPM, logoNodeJS, logoReact, logoReactNative,
  logoSolidJS, logoReefJS, logoExpressJS, logoFastify, logoTailwind, logoBulma,
  logoBootstrap, logoMySQL, logoPostgreSQL, logoMongoDB, logoSupaBase, logoGoogleCloud,
  logoKubernetes, logoDocker, logoNgrok
} from "../../assets/logos/index";
import Projects from "../fragments/Projects";

const ContentLayout = () => {
  return (
    <div id="content" className="relative">
      <section id="hero" className="h-fit">
        <Carousel />
      </section>
      {/* ABOUT ME */}
      <section id="about-me" className="w-full mt-10">
        <div className="bg-indigo-950 text-white">
          <h1 className="text-center font-bold text-4xl py-5">About Me 👨🏻‍💼</h1>
        </div>
        <div className="grid grid-row lg:grid-flow-col h-fit py-[30px] gap-0 lg:gap-5 sm:px-0 lg:px-10 bg-zinc-950">
          <div className=" w-full h-fit self-center pt-4 bg-gray-950  hover:bg-indigo-950">
            <img src={profile} class="w-full lg:w-100" />
          </div>
          <div className="flex flex-col justify-center align-middle h-full self-center py-10">
            <div className="bg-black p-8 lg:p-5 text-white">
              <p className="mb-4 text-center lg:text-justify">
                👋🏻 Hello, My name is{" "}
                <span className="text-blue-600 font-bold text-xl">
                  Aldi Ramdani
                </span>
                , and I proudly come from
                <span className="text-indigo-600 font-bold text-lg">
                  {" "}
                  Karawang, West Java, Indonesia
                </span>
                .
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">
                  I am currently pursuing a degree in
                </span>
                <span className="text-indigo-600 font-bold text-lg">
                  {" "}
                  Informatics Engineering
                </span>{" "}
                at <span className="font-bold">STTI Sony Sugema</span>, where my
                passion for technology continues to grow every day. As an
                aspiring{" "}
                <span className="text-indigo-600 font-bold text-lg">
                  Fullstack Developer
                </span>
                , I am fully committed to mastering the art of building seamless
                and efficient web applications.
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  Over the years, I have refined my skills in both
                </span>{" "}
                <span className="text-indigo-600 font-bold text-lg">
                  JavaScript
                </span>{" "}
                and
                <span className="text-indigo-600 font-bold text-lg"> PHP</span>,
                enabling me to craft dynamic, user-friendly, and scalable
                solutions. I take great pride in diving into both the front-end
                and back-end of development, ensuring that each project I work
                on is
                <span className="text-indigo-600 font-bold text-lg">
                  {" "}
                  polished and optimized
                </span>{" "}
                from every angle.
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">
                  What truly sets me apart is my ability to{" "}
                </span>
                <span className="text-indigo-600 font-bold text-lg">
                  work collaboratively
                </span>{" "}
                within a team, my{" "}
                <span className="text-indigo-600 font-bold text-lg">
                  adaptability
                </span>{" "}
                to fast-paced environments, and my{" "}
                <span className="text-indigo-600 font-bold text-lg">
                  critical thinking skills
                </span>
                that enable me to solve complex problems effectively.
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">I am always</span>{" "}
                <span className="text-indigo-600 font-bold text-lg">
                  eager to learn
                </span>{" "}
                and embrace every opportunity to expand my knowledge and skills.
                I look forward to contributing to{" "}
                <span className="text-indigo-600 font-bold text-lg">
                  innovative projects
                </span>{" "}
                that challenge the status quo and push the boundaries of
                technology.
              </p>

              <p className="text-justify">
                With my technical expertise and personal strengths, I am
                confident that I can be a valuable asset to any development
                team.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* MY EXPERTISE */}
      <section id="my-expertise" className="w-full">
        <div className="bg-indigo-950 text-white">
          <h1 className="text-center font-bold text-4xl py-5">
            {" "}
            My Expertise 👨🏻‍💻
          </h1>
        </div>
        <div className="grid grid-row lg:grid-flow-col lg:grid-cols-2 h-fit gap-5 lg:gap-10 lg:px-10 py-8 bg-zinc-950">
          <div className="flex flex-col gap-3 lg:gap-3">
            <h4 className="text-white text-center font-bold text-2xl py-5">
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
          <div className="flex flex-col justify-center py-0 lg:py-8 align-middle h-full self-center">
            <div className="bg-black p-8 lg:p-5 text-white">
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  I specialize in a wide range of cutting-edge
                </span>{" "}
                technologies across various fields, including{" "}
                <span className="text-purple-600 font-bold text-lg"> Web</span>,{" "}
                <span className="text-purple-600 font-bold text-lg">
                  {" "}
                  Mobile
                </span>
                ,{" "}
                <span className="text-purple-600 font-bold text-lg">
                  {" "}
                  Machine Learning
                </span>
                , and{" "}
                <span className="text-purple-600 font-bold text-lg"> IoT</span>.
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">With a strong foundation in</span>{" "}
                <span className="text-purple-600 font-bold text-lg">PHP</span>{" "}
                <span className="font-light">
                  (<i>Laravel, PHP Native, Composer</i>)
                </span>{" "}
                and{" "}
                <span className="text-purple-600 font-bold text-lg">
                  JavaScript
                </span>{" "}
                <span className="font-light">
                  (
                  <i>
                    Astro, NPM, NodeJS, React, React-Native, SolidJS, ReefJS,
                    ExpressJS, Fastify
                  </i>
                  )
                </span>
                . I am adept at building dynamic and scalable applications for
                both{" "}
                <span className="text-purple-600 font-bold text-lg">
                  Front-End
                </span>{" "}
                and{" "}
                <span className="text-purple-600 font-bold text-lg">
                  Back-End
                </span>
                .
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  My technical expertise also extends to
                </span>{" "}
                <span className="text-purple-600 font-bold text-lg">HTML</span>,{" "}
                <span className="text-purple-600 font-bold text-lg">CSS</span>
                <span className="font-light">
                  {" "}
                  (<i>Tailwind, Bulma, Bootstrap</i>)
                </span>
                , and databases like{" "}
                <span className="text-purple-600 font-bold text-lg">MySQL</span>
                ,{" "}
                <span className="text-purple-600 font-bold text-lg">
                  PostgreSQL
                </span>
                ,{" "}
                <span className="text-purple-600 font-bold text-lg">
                  MongoDB
                </span>
                , and{" "}
                <span className="text-purple-600 font-bold text-lg">
                  SupaBase
                </span>
                .
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">
                  I am experienced in deploying and managing applications with
                  tools such as
                </span>{" "}
                <span className="text-purple-600 font-bold text-lg">
                  Google Cloud
                </span>
                ,{" "}
                <span className="text-purple-600 font-bold text-lg">
                  Docker
                </span>{" "}
                and{" "}
                <span className="text-purple-600 font-bold text-lg">
                  Kubernetes
                </span>
                . With a strong grasp of{" "}
                <span className="text-purple-600 font-bold text-lg">OOP</span>,{" "}
                <span className="text-purple-600 font-bold text-lg">
                  REST-API
                </span>
                , and{" "}
                <span className="text-purple-600 font-bold text-lg">MVC</span>{" "}
                architecture. I ensure that the solutions I create are both
                robust and maintainable.
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">Whether it's leading</span>{" "}
                <span className="text-purple-600 font-bold text-lg">
                  Full-stack
                </span>{" "}
                development projects or contributing to innovative solutions, I
                bring a wealth of knowledge and a commitment to delivering
                high-quality results.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* MY EXPERIENCE */}
      <section id="my-experience" className="w-full">
        <div className="bg-indigo-950 text-white">
          <h1 className="text-center font-bold text-4xl py-5">
            My Experience 🚀
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
                <span>( 27 September 2024 - <strong>Current</strong> )</span>
                <span>- Heart Developer</span>
              </p>
              <p className="mb-4 text-base font-normal lg:text-lg lg:font-light text-justify">
                Status : Freelance
              </p>
              <hr className="mt-1 mb-2 lg:mb-5" />
              <p className="mb-4 text-justify">
                <span className="ml-8">I am excited to join</span>{" "}
                <span class="font-semibold text-blue-500">
                  PT. Pilar Anugerah Digital Indonesia
                </span>
                , known as{" "}
                <span class="font-semibold text-indigo-500">
                  Heart Developer
                </span>
                , a leading creative industry in information technology in
                Indonesia.
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  Established in early 2024 in DKI Jakarta,
                </span>{" "}
                <span class="font-semibold text-indigo-500">
                  Heart Developer
                </span>{" "}
                specializes in turnkey applications and IT consulting, backed by
                a team of certified professionals with over nine years of
                experience in impactful digital projects.
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">As a Junior Fullstack Developer,</span> I
                aim to significantly contribute by designing and developing
                innovative applications using Node.js, Astro.js, React, React
                Native, Solid.js, PostgreSQL, Express, and Fastify.
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">
                  I am committed to leveraging my abilities
                </span>{" "}
                to improve project outcomes and contribute to the company’s
                mission while growing in a dynamic and supportive environment.
              </p>
            </div>
          </div>
          <div className="absolute hidden lg:block right-[0] lg:right-[240px]">
            <div class="bg-green-500 py-2 w-[120px] absolute top-52  right-2 lg:right-0 rounded-tr-lg animate-pulse duration-[5000ms]"></div>
            <div class="bg-green-500 px-2 h-[534px] absolute top-[224px] right-0 animate-pulse duration-[5000ms]"></div>
            <div class="bg-green-500 py-2 w-[120px] absolute top-[758px] right-0 rounded-br-lg animate-pulse duration-[5000ms]"></div>
          </div>
        </div>
        {/* experience 2 */}
        <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
          <div className="absolute hidden lg:block left-[255px]">
            <div class="bg-green-500 py-2 w-[120px] absolute top-52 left-0 rounded-tl-lg animate-pulse duration-[5000ms]"></div>
            <div class="bg-green-500 px-2 h-[534px] absolute z-20 top-[224px] left-0 animate-pulse duration-[5000ms]"></div>
            <div class="bg-green-500 py-2 w-[120px] absolute z-20 top-[758px] left-0 rounded-bl-lg animate-pulse duration-[5000ms]"></div>
          </div>
          <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
            <div className="bg-black py-3 px-5 lg:p-5 text-white rounded-lg">
              <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
                Fullstack Developer Intern
              </p>
              <p className="mb-4 text-base font-normal lg:text-lg text-justify lg:font-light">
                ( 3 June - 6 September 2024 ) - GetMedik
              </p>
              <p className="mb-4 text-base font-normal lg:text-lg lg:font-light text-justify">
                Status : Internship Program
              </p>
              <hr className="mt-1 mb-2 lg:mb-5" />
              <p className="mb-4 text-justify">
                <span class="ml-8 font-semibold text-blue-500">
                  PT. Layanan Medik Indonesia
                </span>
                , through its platform{" "}
                <span className="font-semibold text-indigo-500">GetMedik </span>
                , established in <span className="font-semibold">2016</span>, is
                a digital healthcare aggregator in Indonesia, connecting
                verified healthcare providers with the public to ensure
                accessible and efficient healthcare services.
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">During my 3-month internship as a</span>{" "}
                <span class="font-semibold text-indigo-500">
                  Fullstack Developer Intern
                </span>{" "}
                at <span class="font-semibold text-indigo-500">GetMedik</span>,
                was responsible for developing the application using{" "}
                <span class="font-semibold text-indigo-500">NodeJS</span>,{" "}
                <span class="font-semibold text-indigo-500">TotalJS</span>, and{" "}
                <span class="font-semibold text-indigo-500">PostgreSQL</span>.
                In this role, I contributed to enchancing user efficiency and
                convenience, while also strengthening my end-to-end application
                development skills in the digital healthcare sector.
              </p>
            </div>
          </div>
        </div>
        {/* experience 3 */}
        <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
          <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
            <div className="bg-black py-3 px-5 lg:p-5 text-white rounded-lg">
              <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
                Assistant Lecturer
              </p>
              <p className="mb-4 text-[15px] lg:font-medium lg:text-2xl text-left">
                on Basic Internet Programming
              </p>
              <p className="mb-4 text-[13px] text-left font-normal lg:text-lg lg:text-justify lg:font-light">
                ( March - September 2024 ) - STTI Sony Sugema
              </p>
              <p className="mb-4 text-[15px] text-left font-light lg:text-lg lg:text-justify">
                Status : Internship Program
              </p>
              <hr className="mt-1 mb-2 lg:mb-5" />
              <p className="mb-4 text-justify">
                <span className="ml-8">The</span>{" "}
                <span class="font-semibold text-blue-500">
                  Sony Sugema Institute of Information Technology
                </span>{" "}
                (STTISS). is a higher education institution with a vision to
                become a center of excellence in informatics education with
                global competitiveness in{" "}
                <span class="font-semibold text-indigo-500">Indonesia</span>.
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">As a Teaching Assistant</span> for the
                Advanced Internet Programming course in{" "}
                <span class="font-semibold text-indigo-500">PHP</span>. sI was
                responsible for supporting the course through lecture material
                preparation, managing assignments and exams, and assisting
                students in understanding the course content.
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">Additionally,</span> I contributed to
                research, curriculum development, and the evaluation of the
                learning process, committed to maintaining educational quality
                and enhancing the student learning experience.
              </p>
            </div>
          </div>
          <div className="absolute hidden lg:block right-[255px]">
            <div class="bg-green-500 py-2 w-[120px] absolute top-52 right-0 rounded-tr-lg animate-pulse duration-[5000ms]"></div>
            <div class="bg-green-500 px-2 h-[534px] absolute top-[224px] right-0 animate-pulse duration-[5000ms]"></div>
            <div class="bg-green-500 py-2 w-[120px] absolute top-[758px] right-0 rounded-br-lg animate-pulse duration-[5000ms]"></div>
          </div>
        </div>
        {/* experience 4 */}
        <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
          <div className="absolute hidden lg:block left-[255px]">
            <div class="bg-green-500 py-2 w-[120px] absolute top-52 left-0 rounded-tl-lg animate-pulse duration-[5000ms]"></div>
            <div class="bg-green-500 px-2 h-[534px] absolute z-20 top-[224px] left-0 animate-pulse duration-[5000ms]"></div>
            <div class="bg-green-500 py-2 w-[120px] absolute z-20 top-[758px] left-0 rounded-bl-lg animate-pulse duration-[5000ms]"></div>
          </div>
          <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
            <div className="bg-black p-5 text-white rounded-lg">
              <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
                Cloud Computing Trainee
              </p>
              <div className="flex gap-1 flex-col lg:flex-wrap text-[13px] text-left font-normal mb-4 lg:text-lg lg:text-justify lg:font-light">
                <p className="flex flex-col gap-1 lg:flex-row">
                  ( August 2023 - January 2024 )
                  <span> - Bangkit International Program</span>
                </p>
                <span class="font-light">
                  (<i> Google, GoTo, Traveloka </i>)
                </span>
              </div>
              <p className="mb-4 text-[13px] lg:text-lg font-light text-justify">
                Status : Internship Program
              </p>
              <hr className="mt-1 mb-2 lg:mb-5" />
              <p className="mb-4 text-justify">
                <span class="ml-8 font-semibold text-blue-500">
                  Bangkit Academy
                </span>
                , is an intensive educational initiative designed to shape top
                digital talent in collaboration with{" "}
                <span class="font-semibold text-indigo-500">Google</span>,{" "}
                <span class="font-semibold text-indigo-500">Gojek</span>,{" "}
                <span class="font-semibold text-indigo-500">Tokopedia</span>,
                and <span class="font-semibold text-indigo-500">Traveloka</span>
                .
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">With a focus on</span>{" "}
                <span class="font-semibold text-indigo-500">
                  Machine Learning
                </span>
                ,{" "}
                <span class="font-semibold text-indigo-500">
                  Mobile Development
                </span>
                ,{" "}
                <span class="font-semibold text-indigo-500">
                  Cloud Computing
                </span>
                , this program empowers participants with industry-relevant
                skills, preparing them to excel as future-ready professionals in
                Indonesia’s growing digital landscape.
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-8">
                  I am committed to leveraging my abilities
                </span>{" "}
                to improve project outcomes and contribute to the company’s
                mission while growing in a dynamic and supportive environment.
              </p>
            </div>
          </div>
        </div>
        {/* experience 5 */}
        <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
          <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
            <div className="bg-black p-5 text-white rounded-lg">
              <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
                Computer Science Student
              </p>
              <p className="mb-4 text-[13px] text-left font-normal lg:text-lg lg:text-justify lg:font-light">
                ( 2021 - Current ) - STTI Sony Sugema
              </p>
              <p className="mb-4 text-[15px] text-left font-light lg:text-lg lg:text-justify">
                Status : College Student
              </p>
              <hr className="mt-1 mb-2 lg:mb-5" />
              <p className="mb-4 text-justify">
                <span className="ml-8">As a student in the</span>{" "}
                <span class="font-semibold text-blue-500">
                  Informatics Engineering program
                </span>
                , known as at the Sony Sugema Institute of Information
                Technology (STTISS), a leading creative industry in information
                technology in Indonesia.
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">
                  {" "}
                  I have developed a solid foundation in
                </span>{" "}
                <span class="font-semibold text-indigo-500">
                  computer science
                </span>{" "}
                and{" "}
                <span class="font-semibold text-indigo-500">programming</span>.
                My studies have equipped me with the technical skills and
                analytical mindset necessary to address complex challenges in
                software development and digital technology.
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-8">This academic experience</span> has
                strengthened my capabilities, preparing me to contribute
                effectively in a professional tech environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <Projects/>
    </div>
  );
};

export default ContentLayout;
