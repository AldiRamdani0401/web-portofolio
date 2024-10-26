import Carousel from "../fragments/Carousel";
import profile from "../../assets/images/profile.png";

// Experience
import bangkit from "../../assets/images/expriences/bangkit.png";

// Logo
import logoHTML from "../../assets/logos/html.png";
import logoCSS from "../../assets/logos/css.png";
import logoJS from "../../assets/logos/js.png";
import logoPHP from "../../assets/logos/php.png";
import logoWebPack from "../../assets/logos/webpack.png";
import logoAstro from "../../assets/logos/astro.png";
import logoLaravel from "../../assets/logos/laravel.png";
import logoComposer from "../../assets/logos/composer.png";
import logoNPM from "../../assets/logos/npm.png";
import logoNodeJS from "../../assets/logos/nodejs.png";
import logoReact from "../../assets/logos/react.png";
import logoReactNative from "../../assets/logos/react-native.png";
import logoSolidJS from "../../assets/logos/solidjs.png";
import logoReefJS from "../../assets/logos/reefjs.png";
import logoExpressJS from "../../assets/logos/express.png";
import logoFastify from "../../assets/logos/fastify.png";
import logoTailwind from "../../assets/logos/tailwind.png";
import logoBulma from "../../assets/logos/bulma.png";
import logoBootstrap from "../../assets/logos/bootstrap.png";
import logoMySQL from "../../assets/logos/mysql.png";
import logoPostgreSQL from "../../assets/logos/postgresql.png";
import logoMongoDB from "../../assets/logos/mongodb.png";
import logoSupaBase from "../../assets/logos/supabase.png";
import logoGoogleCloud from "../../assets/logos/google-cloud.png";
import logoKubernetes from "../../assets/logos/kubernetes.png";
import logoDocker from "../../assets/logos/docker.png";
import logoNgrok from "../../assets/logos/ngrok.png";
import SliderImage from "../fragments/SliderImage";

const ContentLayout = () => {
  return (
      <div id="content" className="flex flex-col relative">
        <section id="hero" className="h-[645px] md:h-fit">
          <Carousel />
        </section>
        {/* ABOUT ME */}
        <section id="about-me" className="w-full mb-24 mt-10">
          <div className="bg-indigo-950 text-white">
            <h1 className="text-center font-bold text-4xl py-5">About Me 👨🏻‍💼</h1>
          </div>
          <div className="grid grid-row md:grid-flow-col h-fit py-[50px] gap-0 md:gap-5 sm:px-0 md:px-10 bg-zinc-950">
            <div className=" w-full h-fit self-center pt-4">
              <img src={profile} class="bg-gray-950 rounded-none md:rounded-sm sm:w-full md:w-100 hover:bg-indigo-950" />
            </div>
            <div className="flex flex-col justify-center align-middle h-full self-center py-10">
              <div className="bg-black p-8 md:p-5 text-white">
                <p className="mb-4 text-justify">
                👋🏻 Hello, My name is <span className="text-blue-600 font-bold text-xl">Aldi Ramdani</span>, and I proudly come from the vibrant city of
                  <span className="text-indigo-600 font-bold text-md"> Karawang, West Java, Indonesia</span>.
                </p>

                <p className="mb-4 text-justify">
                  I am currently pursuing a degree in
                  <span className="text-indigo-600 font-bold text-md"> Informatics Engineering</span> at <span className="font-bold">STTI Sony Sugema</span>, where my passion for technology continues to grow every day.
                  As an aspiring <span className="text-indigo-600 font-bold text-md">Fullstack Developer</span>, I am fully committed to mastering the art of building seamless and efficient web applications.
                </p>
                <p className="mb-4 text-justify">
                  Over the years, I have refined my skills in both <span className="text-indigo-600 font-bold text-md">JavaScript</span> and
                  <span className="text-indigo-600 font-bold text-md"> PHP</span>, enabling me to craft dynamic, user-friendly, and scalable solutions.
                  I take great pride in diving into both the front-end and back-end of development, ensuring that each project I work on is
                  <span className="text-indigo-600 font-bold text-md"> polished and optimized</span> from every angle.
                </p>

                <p className="mb-4 text-justify">
                  What truly sets me apart is my ability to <span className="text-indigo-600 font-bold text-md">work collaboratively</span> within a team,
                  my <span className="text-indigo-600 font-bold text-md">adaptability</span> to fast-paced environments, and my <span className="text-indigo-600 font-bold text-md">critical thinking skills</span>
                  that enable me to solve complex problems effectively.
                </p>

                <p className="mb-4 text-justify">
                  I am always <span className="text-indigo-600 font-bold text-md">eager to learn</span> and embrace every opportunity to expand my knowledge and skills.
                  I look forward to contributing to <span className="text-indigo-600 font-bold text-md">innovative projects</span> that challenge the status quo and push the boundaries of technology.
                </p>

                <p>
                  With my technical expertise and personal strengths, I am confident that I can be a valuable asset to any development team.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* MY EXPERTISE */}
        <section id="my-expertise" className="w-full mb-24">
          <div className="bg-indigo-950 text-white">
            <h1 className="text-center font-bold text-4xl py-5"> My Expertise 👨🏻‍💻</h1>
          </div>
          <div className="grid grid-row md:grid-flow-col md:grid-cols-2 h-fit gap-5 md:gap-10 md:px-10 py-10 bg-zinc-950">
            <div className="flex flex-col gap-3 md:gap-3">
              <h4 className="text-white text-center font-bold text-2xl py-5">Technologies :</h4>
              <div className="flex flex-wrap justify-center gap-2 px-0 md:px-24">
                <img
                  src={logoHTML}
                  className="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"
                />
                <img src={logoCSS} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoJS} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoPHP} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoWebPack} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoAstro} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoNodeJS} class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoLaravel} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoComposer} class="bg-white h-16 w-16 p-1 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoNPM} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoReact} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoReactNative} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoSolidJS} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoBootstrap} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
                <img src={logoTailwind} class="bg-white h-16 w-16 p-2 rounded-lg transform transition duration-500 ease-in-out hover:rotate-[360deg]"/>
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-2">
                <div className="flex justify-center gap-1 w-full md:w-1/3 px-5 md:px-0">
                  <img src={logoReefJS} class="bg-white h-16 p-1 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                  <img src={logoExpressJS} class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                </div>
                <div className="flex justify-center gap-1 w-full md:w-1/3 px-5 md:px-0">
                  <img src={logoFastify} class="bg-white h-16 p-1 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                  <img src={logoBulma} class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                </div>
                <div className="flex justify-center gap-1 w-full md:w-1/3 px-5 md:px-0">
                  <img src={logoMySQL} class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                  <img src={logoPostgreSQL} class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                </div>
                <div className="flex justify-center gap-1 w-full md:w-1/3 px-5 md:px-0">
                  <img src={logoMongoDB} class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                  <img src={logoSupaBase} class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                </div>
                <div className="flex justify-center gap-1 w-full md:w-1/3 px-5 md:px-0">
                  <img src={logoGoogleCloud} class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                  <img src={logoKubernetes} class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                </div>
                <div className="flex justify-center gap-1 w-full md:w-1/3 px-5 md:px-0">
                  <img src={logoDocker} class="bg-white h-16 p-2 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                  <img src={logoNgrok} class="bg-white h-16 p-1 w-1/2 border border-1 border-slate-950 rounded-lg transform transition duration-500 ease-in-out hover:animate-bounce"/>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-0 md:py-8 align-middle h-full self-center">
              <div className="bg-black p-8 md:p-5 text-white">
                <p className="mb-4 text-left md:text-justify">
                I specialize in a wide range of cutting-edge technologies across various fields, including <span className="text-purple-600 font-bold text-md"> Web</span>, <span className="text-purple-600 font-bold text-md"> Mobile</span>, <span className="text-purple-600 font-bold text-md"> Machine Learning</span>, and <span className="text-purple-600 font-bold text-md"> IoT</span>.
                </p>

                <p className="mb-4 text-justify">
                  With a strong foundation in <span className="text-purple-600 font-bold text-md">PHP</span> <span className="font-light">( <i>Laravel, PHP Native, Composer</i> )</span> and <span className="text-purple-600 font-bold text-md">JavaScript</span> <span className="font-light">( <i>Astro, NPM, NodeJS, React, React-Native, SolidJS, ReefJS, ExpressJS, Fastify</i> )</span>, I am adept at building dynamic and scalable applications for both <span className="text-purple-600 font-bold text-md">Front-End</span> and <span className="text-purple-600 font-bold text-md">Back-End</span>.
                </p>
                <p className="mb-4 text-justify">
                My technical expertise also extends to <span className="text-purple-600 font-bold text-md">HTML</span>, <span className="text-purple-600 font-bold text-md">CSS</span>
                  <span className="font-light"> ( <i>Tailwind, Bulma, Bootstrap</i> )</span>, and databases like <span className="text-purple-600 font-bold text-md">MySQL</span>, <span className="text-purple-600 font-bold text-md">PostgreSQL</span>, <span className="text-purple-600 font-bold text-md">MongoDB</span>, and <span className="text-purple-600 font-bold text-md">SupaBase</span>.
                </p>

                <p className="mb-4 text-justify">
                  I am experienced in deploying and managing applications with tools such as <span className="text-purple-600 font-bold text-md">Google Cloud</span>, <span className="text-purple-600 font-bold text-md">Docker</span> and <span className="text-purple-600 font-bold text-md">Kubernetes</span>. With a strong grasp of <span className="text-purple-600 font-bold text-md">OOP</span>, <span className="text-purple-600 font-bold text-md">REST-API</span>, and <span className="text-purple-600 font-bold text-md">MVC</span> architecture. I ensure that the solutions I create are both robust and maintainable.
                </p>

                <p className="mb-4 text-justify">
                  Whether it's leading <span className="text-purple-600 font-bold text-md">Full-stack</span> development projects or contributing to innovative solutions, I bring a wealth of knowledge and a commitment to delivering high-quality results.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* MY EXPERIENCE */}
        <section id="my-experience" className="w-full mb-24">
          <div className="bg-indigo-950 text-white">
            <h1 className="text-center font-bold text-4xl py-5">My Experience 🚀</h1>
          </div>
          {/* experience 1 */}
          <div className="flex flex-row justify-center h-fit py-10 px-10 relative bg-zinc-950">
            <div className="flex flex-col justify-center align-middle w-1/2 h-full self-center">
              <div className="bg-black p-5 text-white rounded-lg">
                <p className="mb-4 font-semibold text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">Junior Fullstack Developer</p>
                <p className="mb-4 text-lg text-justify">( 2024 - Current ) - Heart Developer</p>
                <p className="mb-4 text-md font-light text-justify">Status : Part Time</p>

                <p className="mb-4 text-justify">
                I am excited to join <span class="font-semibold text-blue-500">PT. Pilar Anugerah Digital Indonesia</span>, known as <span class="font-semibold text-indigo-500">Heart Developer</span>, a leading creative industry in information technology in Indonesia.
                </p>
                <p className="mb-4 text-justify">
                Established in early 2024 in DKI Jakarta, <span class="font-semibold text-indigo-500">Heart Developer</span> specializes in turnkey applications and IT consulting, backed by a team of certified professionals with over nine years of experience in impactful digital projects.
                </p>
                <p className="mb-4 text-justify">
                As a Junior Fullstack Developer, I aim to significantly contribute by designing and developing innovative applications using Node.js, Astro.js, React, React Native, Solid.js, PostgreSQL, Express, and Fastify.
                </p>

                <p className="mb-4 text-justify">
                I am committed to leveraging my abilities to improve project outcomes and contribute to the company’s mission while growing in a dynamic and supportive environment.
                </p>
              </div>
            </div>
            <div className="absolute right-[255px]">
              <div class="bg-green-500 py-2 w-[120px] absolute top-52 right-0 rounded-tr-lg animate-pulse duration-[5000ms]"></div>
              <div class="bg-green-500 px-2 h-[534px] absolute top-[224px] right-0 animate-pulse duration-[5000ms]"></div>
              <div class="bg-green-500 py-2 w-[120px] absolute top-[758px] right-0 rounded-br-lg animate-pulse duration-[5000ms]"></div>
            </div>
          </div>
          {/* experience 2 */}
          <div className="flex flex-row justify-center h-fit py-10 px-10 bg-zinc-950">
            <div className="absolute left-[255px]">
                <div class="bg-green-500 py-2 w-[120px] absolute top-52 left-0 rounded-tl-lg animate-pulse duration-[5000ms]"></div>
                <div class="bg-green-500 px-2 h-[534px] absolute z-20 top-[224px] left-0 animate-pulse duration-[5000ms]"></div>
                <div class="bg-green-500 py-2 w-[120px] absolute z-20 top-[758px] left-0 rounded-bl-lg animate-pulse duration-[5000ms]"></div>
            </div>
            <div className="flex flex-col justify-center align-middle w-1/2 h-full self-center">
              <div className="bg-black p-5 text-white rounded-lg">
                <p className="mb-4 font-semibold text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">Fullstack Development Intern</p>
                <p className="mb-4 text-lg text-justify">( 2024 - Current ) - GetMedik</p>
                <p className="mb-4 text-md font-light text-justify">Status : Internship Program</p>

                <p className="mb-4 text-justify">
                I am excited to join <span class="font-semibold text-blue-500">PT. Pilar Anugerah Digital Indonesia</span>, known as <span class="font-semibold text-indigo-500">Heart Developer</span>, a leading creative industry in information technology in Indonesia.
                </p>
                <p className="mb-4 text-justify">
                Established in early 2024 in DKI Jakarta, <span class="font-semibold text-indigo-500">Heart Developer</span> specializes in turnkey applications and IT consulting, backed by a team of certified professionals with over nine years of experience in impactful digital projects.
                </p>
                <p className="mb-4 text-justify">
                As a Junior Fullstack Developer, I aim to significantly contribute by designing and developing innovative applications using Node.js, Astro.js, React, React Native, Solid.js, PostgreSQL, Express, and Fastify.
                </p>

                <p className="mb-4 text-justify">
                I am committed to leveraging my abilities to improve project outcomes and contribute to the company’s mission while growing in a dynamic and supportive environment.
                </p>
              </div>
            </div>
          </div>
          {/* experience 3 */}
          <div className="flex flex-row justify-center h-fit py-10 px-10 relative bg-zinc-950">
          <div className="flex flex-col justify-center align-middle w-1/2 h-full self-center">
              <div className="bg-black p-5 text-white rounded-lg">
                <p className="mb-4 font-semibold text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">Assistant Lecturer</p>
                <p className="mb-4 font-medium text-2xl text-left">in Basic Internet Programming</p>
                <p className="mb-4 text-lg text-justify">( 2024 - Current ) - STTI Sony Sugema Karawang</p>
                <p className="mb-4 text-md font-light text-justify">Status : Internship Program</p>
                <p className="mb-4 text-justify">
                I am excited to join <span class="font-semibold text-blue-500">PT. Pilar Anugerah Digital Indonesia</span>, known as <span class="font-semibold text-indigo-500">Heart Developer</span>, a leading creative industry in information technology in Indonesia.
                </p>
                <p className="mb-4 text-justify">
                Established in early 2024 in DKI Jakarta, <span class="font-semibold text-indigo-500">Heart Developer</span> specializes in turnkey applications and IT consulting, backed by a team of certified professionals with over nine years of experience in impactful digital projects.
                </p>
                <p className="mb-4 text-justify">
                As a Junior Fullstack Developer, I aim to significantly contribute by designing and developing innovative applications using Node.js, Astro.js, React, React Native, Solid.js, PostgreSQL, Express, and Fastify.
                </p>

                <p className="mb-4 text-justify">
                I am committed to leveraging my abilities to improve project outcomes and contribute to the company’s mission while growing in a dynamic and supportive environment.
                </p>
              </div>
            </div>
            <div className="absolute right-[255px]">
              <div class="bg-green-500 py-2 w-[120px] absolute top-52 right-0 rounded-tr-lg animate-pulse duration-[5000ms]"></div>
              <div class="bg-green-500 px-2 h-[534px] absolute top-[224px] right-0 animate-pulse duration-[5000ms]"></div>
              <div class="bg-green-500 py-2 w-[120px] absolute top-[758px] right-0 rounded-br-lg animate-pulse duration-[5000ms]"></div>
            </div>
          </div>
          {/* experience 4 */}
          <div className="flex flex-row justify-center h-fit py-10 px-10 bg-zinc-950">
            <div className="absolute left-[255px]">
                <div class="bg-green-500 py-2 w-[120px] absolute top-52 left-0 rounded-tl-lg animate-pulse duration-[5000ms]"></div>
                <div class="bg-green-500 px-2 h-[534px] absolute z-20 top-[224px] left-0 animate-pulse duration-[5000ms]"></div>
                <div class="bg-green-500 py-2 w-[120px] absolute z-20 top-[758px] left-0 rounded-bl-lg animate-pulse duration-[5000ms]"></div>
            </div>
            <div className="flex flex-col justify-center align-middle w-1/2 h-full self-center">
              <div className="bg-black p-5 text-white rounded-lg">
                <p className="mb-4 font-semibold text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">Cloud Computing Trainee</p>
                <p className="mb-4 text-lg text-justify">( 2024 - Current ) - Bangkit International Program ( <span class="text-base font-light italic">Google, GoTo, Traveloka</span> )</p>
                <p className="mb-4 text-md font-light text-justify">Status : Internship Program</p>
                <p className="mb-4 text-justify">
                I am excited to join <span class="font-semibold text-blue-500">PT. Pilar Anugerah Digital Indonesia</span>, known as <span class="font-semibold text-indigo-500">Heart Developer</span>, a leading creative industry in information technology in Indonesia.
                </p>
                <p className="mb-4 text-justify">
                Established in early 2024 in DKI Jakarta, <span class="font-semibold text-indigo-500">Heart Developer</span> specializes in turnkey applications and IT consulting, backed by a team of certified professionals with over nine years of experience in impactful digital projects.
                </p>
                <p className="mb-4 text-justify">
                As a Junior Fullstack Developer, I aim to significantly contribute by designing and developing innovative applications using Node.js, Astro.js, React, React Native, Solid.js, PostgreSQL, Express, and Fastify.
                </p>

                <p className="mb-4 text-justify">
                I am committed to leveraging my abilities to improve project outcomes and contribute to the company’s mission while growing in a dynamic and supportive environment.
                </p>
              </div>
            </div>
          </div>
          {/* experience 5 */}
          <div className="flex flex-row justify-center h-fit py-10 px-10 relative bg-zinc-950">
            <div className="flex flex-col justify-center align-middle w-1/2 h-full self-center">
              <div className="bg-black p-5 text-white rounded-lg">
                <p className="mb-4 font-semibold text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
                  Computer Science Student
                </p>
                <p className="mb-4 text-lg text-justify">( 2024 - Current ) - STTI Sony Sugema Karawang</p>
                <p className="mb-4 text-md font-light text-justify">Status : Collage Student</p>
                <p className="mb-4 text-justify">
                I am excited to join <span class="font-semibold text-blue-500">PT. Pilar Anugerah Digital Indonesia</span>, known as <span class="font-semibold text-indigo-500">Heart Developer</span>, a leading creative industry in information technology in Indonesia.
                </p>
                <p className="mb-4 text-justify">
                Established in early 2024 in DKI Jakarta, <span class="font-semibold text-indigo-500">Heart Developer</span> specializes in turnkey applications and IT consulting, backed by a team of certified professionals with over nine years of experience in impactful digital projects.
                </p>
                <p className="mb-4 text-justify">
                As a Junior Fullstack Developer, I aim to significantly contribute by designing and developing innovative applications using Node.js, Astro.js, React, React Native, Solid.js, PostgreSQL, Express, and Fastify.
                </p>

                <p className="mb-4 text-justify">
                I am committed to leveraging my abilities to improve project outcomes and contribute to the company’s mission while growing in a dynamic and supportive environment.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* PROJECTS */}
        <section id="projects" className="w-full mb-24">
          <div className="bg-indigo-950 text-white">
            <h1 className="text-center font-bold text-4xl py-5">Projects 📱📐</h1>
          </div>
          <div className="flex justify-center bg-black text-white py-5">
            <input type="text" />
          </div>
          <div className="flex flex-row flex-wrap justify-center align-middle h-full self-center bg-zinc-950 py-7 px-3 gap-10 text-white">
              {/* Project 1 */}
              <div class="bg-blue-950 rounded-lg">
                <img src="https://placehold.co/200x200" class="rounded-t-lg" />
                <div className="p-1">
                  <span>Project 1</span>
                </div>
              </div>
              {/* Project 2 */}
              <div class="bg-blue-950 rounded-lg">
                <img src="https://placehold.co/200x200" class="rounded-t-lg" />
                <div className="p-1">
                  <span>Project 2</span>
                </div>
              </div>
             {/* Project 3 */}
             <div class="bg-blue-950 rounded-lg">
                <img src="https://placehold.co/200x200" class="rounded-t-lg" />
                <div className="p-1">
                  <span>Project 3</span>
                </div>
             </div>
             {/* Project 4 */}
             <div class="bg-blue-950 rounded-lg">
                <img src="https://placehold.co/200x200" class="rounded-t-lg" />
                <div className="p-1">
                  <span>Project 4</span>
                </div>
             </div>
             {/* Project 4 */}
             <div class="bg-blue-950 rounded-lg">
                <img src="https://placehold.co/200x200" class="rounded-t-lg" />
                <div className="p-1">
                  <span>Project 4</span>
                </div>
             </div>
             {/* Project 4 */}
             <div class="bg-blue-950 rounded-lg">
                <img src="https://placehold.co/200x200" class="rounded-t-lg" />
                <div className="p-1">
                  <span>Project 4</span>
                </div>
             </div>
             {/* Project 4 */}
             <div class="bg-blue-950 rounded-lg">
                <img src="https://placehold.co/200x200" class="rounded-t-lg" />
                <div className="p-1">
                  <span>Project 4</span>
                </div>
             </div>
             {/* Project 4 */}
             <div class="bg-blue-950 rounded-lg">
                <img src="https://placehold.co/200x200" class="rounded-t-lg" />
                <div className="p-1">
                  <span>Project 4</span>
                </div>
             </div>
             {/* Project 4 */}
             <div class="bg-blue-950 rounded-lg">
                <img src="https://placehold.co/200x200" class="rounded-t-lg" />
                <div className="p-1">
                  <span>Project 4</span>
                </div>
             </div>
             {/* Project 4 */}
             <div class="bg-blue-950 rounded-lg">
                <img src="https://placehold.co/200x200" class="rounded-t-lg" />
                <div className="p-1">
                  <span>Project 4</span>
                </div>
             </div>
          </div>
        </section>
      </div>
  );
};

export default ContentLayout;
