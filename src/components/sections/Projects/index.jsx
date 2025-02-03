import { createSignal } from "solid-js";
import {
  logoBootstrap,
  logoBulma,
  logoExpressJS,
  logoFastify,
  logoGin,
  logoGolang,
  logoJS,
  logoLaravel,
  logoNative,
  logoNestJS,
  logoNodeJS,
  logoPHP,
  logoTailwind,
  logoTypeScript,
} from "../../../assets/logos";
import { languageMap } from "../../../store/language";
import ProjectsList from "./ProjectsList";

const labels = [
  // *** PHP *** //
  {
    name: "PHP",
    logo: logoPHP,
    category: [
      { name: "Web", logo: logoNative },
      { name: "Mobile", logo: logoLaravel },
    ],
    backend: [
      { name: "Native", logo: logoNative },
      { name: "Laravel", logo: logoLaravel },
      { name: "Express", logo: logoExpressJS },
      { name: "NestJS", logo: logoNestJS },
      { name: "Fastify", logo: logoFastify },
      { name: "Gin", logo: logoGin },
    ],
    frontend: [
      { name: "Native", logo: logoNative },
      { name: "Tailwind", logo: logoTailwind },
    ],
  },
  {
    name: "JavaScript",
    logo: logoJS,
    category: [{ name: "Web", logo: logoNative }],
    backend: [
      { name: "Express", logo: logoExpressJS },
      { name: "Fastify", logo: logoFastify },
      { name: "Laravel", logo: logoLaravel },
      { name: "NestJS", logo: logoNestJS },
      { name: "Gin", logo: logoGin },
    ],
    frontend: [
      { name: "Native", logo: logoNative },
      { name: "Tailwind", logo: logoTailwind },
    ],
  },
  {
    name: "NodeJS",
    logo: logoNodeJS,
    category: [
      { name: "Web", logo: logoNative },
      { name: "Mobile", logo: logoLaravel },
      { name: "Server", logo: logoLaravel },
    ],
    backend: [
      { name: "Express", logo: logoExpressJS },
      { name: "NestJS", logo: logoNestJS },
      { name: "Fastify", logo: logoFastify },
    ],
    frontend: [
      { name: "Native", logo: logoNative },
      { name: "Tailwind", logo: logoTailwind },
      { name: "Bootstrap", logo: logoBootstrap },
      { name: "Bulma", logo: logoBulma },
    ],
  },
  {
    name: "TypeScript",
    logo: logoTypeScript,
    category: [
      { name: "Web", logo: logoNative },
      { name: "Mobile", logo: logoLaravel },
      { name: "Server", logo: logoLaravel },
    ],
    backend: [
      { name: "Express", logo: logoExpressJS },
      { name: "NestJS", logo: logoNestJS },
      { name: "Fastify", logo: logoFastify },
    ],
    frontend: [
      { name: "Native", logo: logoNative },
      { name: "Tailwind", logo: logoTailwind },
      { name: "Bulma", logo: logoBulma },
      { name: "Bootstrap", logo: logoBootstrap },
    ],
  },
  {
    name: "Golang",
    logo: logoGolang,
    category: [
      { name: "Web", logo: logoNative },
      { name: "Server", logo: logoLaravel },
    ],
    backend: [
      { name: "Native", logo: logoNative },
      { name: "Gin", logo: logoGin },
    ],
    frontend: [
      { name: "Native", logo: logoNative },
      { name: "Tailwind", logo: logoTailwind },
      { name: "Bulma", logo: logoBulma },
      { name: "Bootstrap", logo: logoBootstrap },
    ],
  },
];

const Projects = () => {
  // === SIGNALS === //
  const [language, setLanguage] = createSignal("PHP");
  const [backend, setBackend] = createSignal("");

  return (
    <section
      id="projects"
      className="bg-gray-950 h-dvh w-full py-10 text-slate-200 animate-fadeIn"
    >
      <h1 className="flex flex-col gap-1 text-center font-bold text-2xl lg:text-4xl py-2 lg:pt-5 mb-1 snap-start snap-mandatory">
        {languageMap()?.content?.[3] || "Projects"}
      </h1>
      {/* Sub Container 1 */}
      <div className="flex flex-col lg:flex-row justify-center xl:justify-between xl:w-full gap-10 xl:gap-5 px-0 py-2 lg:px-20 xl:px-10">
        {/* === Languages === */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-normal gap-2 w-full lg:w-1/2 xl:w-full">
          <h1 className="flex self-center lg:self-start xl:[&&]:justify-end px-10 lg:p-0 xl:p-0 font-medium h-fit xl:w-[80%] lg:h-full xl:h-fit mt-2 text-nowrap">
            Languages :
          </h1>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-1 lg:justify-normal w-full xl:w-[50%] px-10 lg:p-0">
            {labels.map((label, i) => (
              <figure key={i}>
                <button
                  type="button"
                  onClick={() => {
                    setLanguage(label.name);
                    setBackend("");
                  }}
                >
                  <img
                    src={label.logo}
                    className={`h-8 w-8 lg:h-10 lg:w-10 p-[1px] xl:p-[2px] rounded-full bg-white ${
                      language() !== label.name ? "opacity-50 grayscale" : ""
                    } cursor-pointer object-fill`}
                    draggable="false"
                  />
                </button>
              </figure>
            ))}
          </div>
        </div>
        {/* === end of Languages === */}
        {/* === Backend === */}
        <div className="hidden lg:flex flex-row justify-center gap-2 w-1/2 xl:w-full text-nowrap">
          <h1 className="flex self-start lg:p-0 font-medium mt-2 h-fit w-fit lg:h-full">
            Backend :
          </h1>
          <div className="flex flex-wrap justify-center gap-1 lg:justify-normal w-full">
            {
              labels.find((label) => label.name === language())?.backend
                .length > 0
                ? labels
                    .find((label) => label.name === language())
                    ?.backend.map((backendItem, i) => (
                      <figure key={i}>
                        <button
                          type="button"
                          onClick={() => {
                            setBackend(backendItem.name);
                          }}
                        >
                          <img
                            src={backendItem.logo}
                            className={`h-10 w-10 p-1 rounded-full bg-white ${
                              backend() != backendItem.name
                                ? "opacity-50 grayscale"
                                : ""
                            } cursor-pointer object-fill`}
                            draggable="false"
                          />
                        </button>
                      </figure>
                    ))
                : "" // Placeholder jika tidak ada framework
            }
          </div>
        </div>

        {/* === end of Backend === */}
      </div>
      {/* Sub Container 2 */}
      <div className="h-[80%] lg:h-[88%] flex flex-row align-middle justify-start lg:flex-row lg:w-full gap-5 overflow-x-hidden scroll-smooth snap-x snap-mandatory lg:scrollbar-x-hide">
        <ProjectsList filter={{ language: language(), backend: backend() }} />
      </div>
    </section>
  );
};

export default Projects;
