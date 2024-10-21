import Carousel from "../fragments/Carousel";
import profile from "../../assets/images/profile.png";

// Logo
import logoHTML from "../../assets/logos/html.png";
import logoCSS from "../../assets/logos/css.png";
import logoJS from "../../assets/logos/js.png";
import logoAstro from "../../assets/logos/astro.png";
import logoReact from "../../assets/logos/react.png";
import logoReactNative from "../../assets/logos/react-native.png";
import logoSolidJS from "../../assets/logos/solidjs.png";

const ContentLayout = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <Carousel />
      <div className="grid grid-flow-row grid-rows-4">
        <section id="about-me" className="w-full animate-fadeIn py-20">
          <div className="bg-indigo-950 text-white">
            <h1 className="text-center font-bold text-4xl py-5">About Me 👨🏻‍💼</h1>
          </div>
          <div className="grid grid-row md:grid-flow-col h-fit gap-5 py-10 px-10 bg-zinc-950">
            <div className=" w-full h-fit self-center">
              <img src={profile} class="bg-gray-950 rounded-full md:rounded-sm w-100" />
            </div>
            <div className="flex flex-col justify-center align-middle h-full self-center">
              <div className="bg-black p-5 text-white">
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
        <section id="my-expertise" className="w-full animate-fadeIn py-20">
          <div className="bg-indigo-950 text-white">
            <h1 className="text-center font-bold text-4xl py-5"> My Expertise 👨🏻‍💻</h1>
          </div>
          <div className="grid grid-row md:grid-flow-col md:grid-cols-2 h-fit gap-5 py-10 px-5 md:px-10 bg-zinc-950">
            <div className="flex flex-col gap-5 md:gap-10">
              <h4 className="text-white text-center font-bold text-4xl py-5">Technologies :</h4>
              <div className="flex flex-row justify-center gap-2 md:gap-10">
                <img src={logoHTML} class="bg-white h-20 p-2 rounded-lg"/>
                <img src={logoCSS} class="bg-white h-20 p-2 rounded-lg"/>
                <img src={logoJS} class="bg-white h-20 p-2 rounded-lg"/>
              </div>
              <div className="flex flex-row justify-center gap-2 md:gap-10">
                <img src={logoAstro} class="bg-white h-20 p-2 rounded-lg"/>
                <img src={logoReact} class="bg-white h-20 p-2 rounded-lg"/>
                <img src={logoReactNative} class="bg-white h-20 p-2 rounded-lg"/>
                <img src={logoSolidJS} class="bg-white h-20 p-2 rounded-lg"/>
              </div>
              <div className="flex flex-row justify-center gap-2 md:gap-10">
                <img src={logoHTML} class="bg-white h-20 p-2 rounded-lg"/>
                <img src={logoCSS} class="bg-white h-20 p-2 rounded-lg"/>
                <img src={logoJS} class="bg-white h-20 p-2 rounded-lg"/>
              </div>
            </div>
            <div className="flex flex-col justify-center align-middle h-full self-center">
              <div className="bg-black p-5 text-white">
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
        <section id="my-exprience" className="w-full py-20 border">
          <div className="bg-black text-white">
            <h1 className="text-center font-bold text-2xl py-5">
              My Exprience
            </h1>
          </div>
          <div className="flex gap-2 p-2 bg-zinc-950">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odit
              quod ea provident eligendi veniam aperiam alias repellendus,
              laborum quos inventore ad ipsum saepe, neque odio. Officiis vitae
              maiores eligendi totam, tenetur impedit quibusdam. Consequuntur
              ipsa iste placeat, sapiente magnam ea omnis unde cupiditate
              deleniti architecto debitis vel iure dolorem sunt ducimus dolore,
              eius impedit aliquam minima eum recusandae asperiores molestiae,
              aspernatur cumque. Maiores reprehenderit et nesciunt error
              eligendi ducimus pariatur, dolorum aspernatur fugit, nostrum culpa
              vero! Minima dignissimos, officiis velit unde at ipsum vel
              aspernatur necessitatibus nesciunt non voluptas fuga laudantium
              praesentium suscipit id eaque qui ut consectetur temporibus?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odit
              quod ea provident eligendi veniam aperiam alias repellendus,
              laborum quos inventore ad ipsum saepe, neque odio. Officiis vitae
              maiores eligendi totam, tenetur impedit quibusdam. Consequuntur
              ipsa iste placeat, sapiente magnam ea omnis unde cupiditate
              deleniti architecto debitis vel iure dolorem sunt ducimus dolore,
              eius impedit aliquam minima eum recusandae asperiores molestiae,
              aspernatur cumque. Maiores reprehenderit et nesciunt error
              eligendi ducimus pariatur, dolorum aspernatur fugit, nostrum culpa
              vero! Minima dignissimos, officiis velit unde at ipsum vel
              aspernatur necessitatibus nesciunt non voluptas fuga laudantium
              praesentium suscipit id eaque qui ut consectetur temporibus?
            </p>
          </div>
        </section>
        <section id="projects" className="w-full py-20 border">
          <div className="bg-black text-white">
            <h1 className="text-center font-bold text-2xl py-5">Projects</h1>
          </div>
          <div className="flex gap-2 p-2 bg-zinc-950">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odit
              quod ea provident eligendi veniam aperiam alias repellendus,
              laborum quos inventore ad ipsum saepe, neque odio. Officiis vitae
              maiores eligendi totam, tenetur impedit quibusdam. Consequuntur
              ipsa iste placeat, sapiente magnam ea omnis unde cupiditate
              deleniti architecto debitis vel iure dolorem sunt ducimus dolore,
              eius impedit aliquam minima eum recusandae asperiores molestiae,
              aspernatur cumque. Maiores reprehenderit et nesciunt error
              eligendi ducimus pariatur, dolorum aspernatur fugit, nostrum culpa
              vero! Minima dignissimos, officiis velit unde at ipsum vel
              aspernatur necessitatibus nesciunt non voluptas fuga laudantium
              praesentium suscipit id eaque qui ut consectetur temporibus?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odit
              quod ea provident eligendi veniam aperiam alias repellendus,
              laborum quos inventore ad ipsum saepe, neque odio. Officiis vitae
              maiores eligendi totam, tenetur impedit quibusdam. Consequuntur
              ipsa iste placeat, sapiente magnam ea omnis unde cupiditate
              deleniti architecto debitis vel iure dolorem sunt ducimus dolore,
              eius impedit aliquam minima eum recusandae asperiores molestiae,
              aspernatur cumque. Maiores reprehenderit et nesciunt error
              eligendi ducimus pariatur, dolorum aspernatur fugit, nostrum culpa
              vero! Minima dignissimos, officiis velit unde at ipsum vel
              aspernatur necessitatibus nesciunt non voluptas fuga laudantium
              praesentium suscipit id eaque qui ut consectetur temporibus?
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContentLayout;
