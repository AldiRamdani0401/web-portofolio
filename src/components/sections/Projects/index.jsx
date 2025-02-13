import { createSignal } from "solid-js";
import {
  logoAstro,
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
  logoNextJS,
  logoNodeJS,
  logoPHP,
  logoReact,
  logoReactNative,
  logoSolidJS,
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

const backendLabels = [
  { name: "Native", logo: logoNative },
  { name: "Laravel", logo: logoLaravel },
  { name: "Express", logo: logoExpressJS },
  { name: "NestJS", logo: logoNestJS },
  { name: "Fastify", logo: logoFastify },
  { name: "Gin", logo: logoGin },
];

const frameworkLabels = [
  { name: "Laravel", logo: logoLaravel },
  { name: "Astro", logo: logoAstro },
  { name: "React", logo: logoReact },
  { name: "SolidJS", logo: logoSolidJS },
  { name: "NextJS", logo: logoNextJS },
  { name: "ReactNative", logo: logoReactNative },
];

const typeProjects = [
  { name: "Web" },
  { name: "Mobile" },
  { name: "Hybrid" },
  { name: "Server" },
];

const Projects = () => {
  // === SIGNALS === //
  const [core, setCore] = createSignal("");
  const [type, setType] = createSignal("");
  const [backend, setBackend] = createSignal("");
  const [framework, setFramework] = createSignal("");
  const [count, setCount] = createSignal(1);

  const [render, setRender] = createSignal(false);
  const [resetState, setResetState] = createSignal(false);

  const [projectState, setProjectState] = createSignal({
    start: 0,
    end: 10,
    limit: 10,
    max: 0,
    count: 0,
    currentPage: 1,
    totalPage: 1,
  });

  // MOBILE
  const [openFilter, setOpenFilter] = createSignal(false);

  return (
    <section
      id="projects"
      className="
      flex flex-col h-dvh w-full
    bg-gray-950 text-slate-200
      animate-fadeIn"
    >
      <div className="flex flex-row">
        {/* === SECTION HEADER === */}
        <div className="flex flex-row justify-center items-center pt-2 xl:pt-0 w-1/3 snap-start">
          <h1 className="flex flex-col gap-1 text-center font-bold text-2xl lg:text-4xl xl:text-6xl py-2 lg:pt-5 xl:pt-2 mb-1">
            {languageMap()?.content?.[3] || "Projects"}
          </h1>
          <span className="bg-yellow-200 rounded-sm text-slate-900 text-xs self-start mt-8 ml-1 px-1">
            Dev
          </span>
        </div>
        {/* === end of SECTION HEADER === */}
        {/* ==== SUB CONTAINER 1 === */}
        {/* DESKTOP */}
        <div
          className="
          hidden xl:flex flex-row gap-5 pt-2
          xl:w-full"
        >
          {/* === WRAPPER 1 : PROJECT TYPES & PROJECT CORE */}
          <div className="flex flex-col xl:py-1 gap-1 w-fit">
            {/* === PROJECT TYPE === */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-normal gap-0 py-1 xl:gap-2 w-full lg:w-1/2 xl:w-full">
              {/* Label */}
              <h1 className="flex self-center text-base lg:self-start xl:[&&]:justify-start px-10 lg:p-0 xl:p-0 font-medium h-fit xl:w-fit lg:h-full xl:h-fit mt-0 xl:mt-2 text-nowrap">
                Project Types :
              </h1>
              {/* Content */}
              <div className="flex flex-row justify-center mt-1 xl:mt-2 gap-2 lg:gap-1 lg:justify-normal xl:items-center w-full xl:w-fit h-fit lg:p-0">
                {/* === Web === */}
                {typeProjects.map((typeProject) => (
                  <button
                    type="button"
                    className={`h-fit w-fit px-2 text-sm xl:text-base ${
                      type() === typeProject.name
                        ? "bg-indigo-800 hover:bg-indigo-500"
                        : "hover:font-medium hover:text-slate-200 xl:hover:text-indigo-300"
                    } rounded-md`}
                    onclick={() => {
                      setType((prev) =>
                        prev === typeProject.name ? "" : typeProject.name
                      );
                      setCount(1);
                      setResetState(true);
                      setRender(true);
                    }}
                  >
                    {typeProject.name}
                  </button>
                ))}
              </div>
            </div>
            {/* === end of PROJECT TYPE === */}
            {/* === PROJECT CORE === */}
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-normal gap-0 xl:gap-2 w-full lg:w-1/2 xl:w-full">
              <h1 className="flex items-center text-base self-center lg:self-start xl:[&&]:justify-end px-10 lg:p-0 xl:py-1 font-medium h-fit xl:w-fit lg:h-full xl:h-fit mt-2 text-nowrap">
                Project Core :
              </h1>
              <div className="flex flex-row justify-center mt-1 xl:mt-2 gap-2 lg:gap-1 xl:gap-3 lg:justify-normal xl:items-center w-full xl:w-fit h-fit lg:p-0 xl:px-3">
                {labels.map((label, i) => (
                  <figure key={i}>
                    <button
                      type="button"
                      onClick={() => {
                        setCore(label.name === core() ? "" : label.name);
                        setCount(1);
                        setResetState(true);
                        setRender(true);
                      }}
                    >
                      <img
                        src={label.logo}
                        className={`h-8 w-8 lg:h-10 lg:w-10 p-[1px] xl:p-[2px] rounded-full bg-white ${
                          core() !== label.name ? "opacity-50 grayscale" : ""
                        } cursor-pointer object-fill`}
                        title={label.name}
                        draggable="false"
                      />
                    </button>
                  </figure>
                ))}
              </div>
            </div>
            {/* === end of PROJECT CORE === */}
          </div>
          {/* === end of WRAPPER 1 : PROJECT TYPES & PROJECT CORE */}
          {/* === WRAPPER 2 : BACKEND & FRAMEWORK */}
          <div className="flex flex-col xl:py-[9.3px]">
            {/* === BACKEND === */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-normal gap-0 xl:gap-2 w-full lg:w-1/2 xl:w-full">
              {/* Label */}
              <h1 className="flex self-center text-base lg:self-start xl:[&&]:justify-start px-10 lg:p-0 xl:p-0 font-medium h-fit xl:w-fit lg:h-full xl:h-fit mt-0 xl:mt-2 text-nowrap">
                Backend :
              </h1>
              {/* Content */}
              <div className="flex flex-row justify-center gap-2 px-3 lg:justify-normal w-full">
                {backendLabels.map((label, i) => (
                  <figure key={i}>
                    <button
                      type="button"
                      onClick={() => {
                        setBackend((prev) =>
                          prev === label.name ? "" : label.name
                        );
                        setCount(1);
                        setResetState(true);
                        setRender(true);
                      }}
                    >
                      <img
                        src={label.logo}
                        className={`h-10 w-10 p-1 rounded-full bg-white ${
                          backend() != label.name ? "opacity-50 grayscale" : ""
                        } cursor-pointer object-fill`}
                        title={label.name}
                        draggable="false"
                      />
                    </button>
                  </figure>
                ))}
              </div>
            </div>
            {/* === end of BACKEND === */}
            {/* === FRAMEWORK === */}
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-normal gap-0 xl:gap-2 w-full lg:w-1/2 xl:w-full">
              <h1 className="flex items-center text-base self-center lg:self-start xl:[&&]:justify-end px-10 lg:p-0 xl:py-1 font-medium h-fit xl:w-fit lg:h-full xl:h-fit mt-2 text-nowrap">
                Framework :
              </h1>
              <div className="flex flex-row justify-center mt-1 xl:mt-2 gap-2 lg:gap-1 xl:gap-3 lg:justify-normal xl:items-center w-full xl:w-fit h-fit lg:p-0 xl:px-3">
                {frameworkLabels.map((label, i) => (
                  <figure key={i}>
                    <button
                      type="button"
                      onClick={() => {
                        setFramework(
                          label.name === framework() ? "" : label.name
                        );
                        setCount(1);
                        setResetState(true);
                        setRender(true);
                      }}
                    >
                      <img
                        src={label.logo}
                        className={`h-8 w-8 lg:h-10 lg:w-10 p-[1px] xl:p-[2px] rounded-full bg-white ${
                          framework() !== label.name
                            ? "opacity-50 grayscale"
                            : ""
                        } cursor-pointer object-fill`}
                        title={label.name}
                        draggable="false"
                      />
                    </button>
                  </figure>
                ))}
              </div>
            </div>
            {/* === end of FRAMEWORK === */}
          </div>
          {/* === end of WRAPPER 2 : BACKEND & FRAMEWORK */}
        </div>
        {/* DESKTOP */}
      </div>
      {/* MOBILE : Filter Project */}
      <button
        type="button"
        className="block xl:hidden text-xs ml-2 mb-2 px-2 py-1 bg-indigo-700 hover:bg-indigo-900 rounded-md"
        onClick={() => setOpenFilter((prev) => !prev)}
      >
        {openFilter() ? "close filter" : "open filter"}
      </button>
      <div
        className={`${
          openFilter() ? "flex" : "hidden"
        } flex-col lg:flex-row justify-center xl:justify-between xl:w-full gap-0 xl:gap-5 py-1 xl:py-2 lg:px-20 xl:px-10 bg-slate-950`}
      >
        {/* === PROJECT TYPE === */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-normal gap-0 xl:gap-2 w-full lg:w-1/2 xl:w-full">
          {/* Label */}
          <h1 className="flex self-center text-base lg:self-start xl:[&&]:justify-start px-10 lg:p-0 xl:p-0 font-medium h-fit xl:w-fit lg:h-full xl:h-fit mt-0 xl:mt-2 text-nowrap">
            Types :
          </h1>
          {/* Content */}
          <div className="flex flex-wrap justify-center mt-1 xl:mt-2 gap-2 lg:gap-1 lg:justify-normal xl:items-center w-full xl:w-fit h-fit px-5 lg:p-0">
            {/* === Web === */}
            <button
              type="button"
              className={`h-fit w-fit px-2 text-sm xl:text-base ${
                type() === "Web"
                  ? "bg-indigo-800 hover:bg-indigo-500"
                  : "hover:font-medium hover:text-slate-200 xl:hover:text-indigo-300"
              } rounded-md`}
              onclick={() => {
                setType((prev) => (prev === "Web" ? "" : "Web"));
                setCount(1);
              }}
            >
              Web
            </button>
            {/* === Mobile === */}
            <button
              type="button"
              className={`h-fit w-fit px-2 text-sm xl:text-base ${
                type() === "Mobile"
                  ? "bg-indigo-800 hover:bg-indigo-500"
                  : "hover:font-medium hover:text-slate-200 xl:hover:text-indigo-300"
              } rounded-md`}
              onclick={() => {
                setType((prev) => (prev === "Mobile" ? "" : "Mobile"));
                setCount(1);
              }}
            >
              Mobile
            </button>
            {/* === Hybrid === */}
            <button
              type="button"
              className={`h-fit w-fit px-2 text-sm xl:text-base ${
                type() === "Hybrid"
                  ? "bg-indigo-800 hover:bg-indigo-500"
                  : "hover:font-medium hover:text-slate-200 xl:hover:text-indigo-300"
              } rounded-md`}
              onclick={() => {
                setType((prev) => (prev === "Hybrid" ? "" : "Hybrid"));
                setCount(1);
              }}
            >
              Hybrid
            </button>
            {/* === Server === */}
            <button
              type="button"
              className={`h-fit w-fit px-2 text-sm xl:text-base ${
                type() === "Server"
                  ? "bg-indigo-800 hover:bg-indigo-500"
                  : "hover:font-medium hover:text-slate-200 xl:hover:text-indigo-300"
              } rounded-md`}
              onclick={() => {
                setType((prev) => (prev === "Server" ? "" : "Server"));
                setCount(1);
              }}
            >
              Server
            </button>
          </div>
        </div>
        {/* === end of PROJECT TYPE === */}
        {/* === CORE === */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-normal xl:justify-center gap-2 w-full lg:w-1/2 xl:w-full">
          <h1 className="flex text-base self-center lg:self-start xl:[&&]:justify-end px-10 lg:p-0 xl:p-0 font-medium h-fit xl:w-fit lg:h-full xl:h-fit mt-2 text-nowrap">
            Core :
          </h1>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-1 lg:justify-normal w-full xl:w-[50%] px-10 lg:p-0">
            {labels.map((label, i) => (
              <figure key={i}>
                <button
                  type="button"
                  onClick={() => {
                    setCore(label.name === core() ? "" : label.name);
                    setBackend("");
                    setType("");
                    setCount(1);
                  }}
                >
                  <img
                    src={label.logo}
                    className={`h-8 w-8 lg:h-10 lg:w-10 p-[1px] xl:p-[2px] rounded-full bg-white ${
                      core() !== label.name ? "opacity-50 grayscale" : ""
                    } cursor-pointer object-fill`}
                    draggable="false"
                  />
                </button>
              </figure>
            ))}
          </div>
        </div>
        {/* === end of CORE === */}
        {/* === BACKEND === */}
        <div className="flex flex-col justify-center gap-2 w-full text-nowrap">
          <h1 className="flex self-center text-base lg:p-0 font-medium mt-2 h-fit w-fit lg:h-full">
            Backend :
          </h1>
          <div className="flex flex-wrap justify-center gap-1 lg:justify-normal w-full">
            {
              labels.find((label) => label.name === core())?.backend.length > 0
                ? labels
                    .find((label) => label.name === core())
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
        {/* === end of BACKEND === */}
      </div>
      {/* MOBILE */}
      {/* ==== end of SUB CONTAINER 1 === */}
      {/* ==== SUB CONTAINER 2 === */}
      <div
        className="
        flex flex-row align-middle justify-start lg:flex-row lg:w-full gap-5 h-[80%] lg:h-[88%] overflow-x-hidden
        scroll-smooth snap-x snap-mandatory xl:snap-none lg:scrollbar-x-hide xl:scrollbar-x-hide"
      >
        <ProjectsList
          filter={{
            type: type(),
            core: core(),
            backend: backend(),
            framework: framework(),
          }}
          counter={{ number: count(), set: setCount }}
          projects={{ state: projectState(), setState: setProjectState }}
          render={{ state: render(), setState: setRender }}
          reset={{ state: resetState(), setState: setResetState }}
        />
      </div>
      {/* ==== end of SUB CONTAINER 2 === */}
    </section>
  );
};

export default Projects;
