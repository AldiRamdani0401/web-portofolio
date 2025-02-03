import { createEffect, createSignal, Show } from "solid-js";
import {
  logoHTML,
  logoCSS,
  logoJS,
  logoPHP,
  logoTailwind,
  logoNodeJS,
  logoBootstrap,
  logoReact,
  logoSolidJS,
  logoReefJS,
  logoSmallReefJS,
} from "../../../assets/logos/index";
import ContainerListProject from "./ContainerListProject";
import CardDetail from "./CardDetail";
import { setState } from "../../../store/store";

// === SAMPLE : Project Datas === //
const projects = [
  // *** PHP *** //
  {
    core: "PHP",
    logo: logoPHP,
    listProjects: [
      {
        id: 1,
        name: "Project PHP 1",
        type: "Web",
        category: "E-Commerce",
        backend: "Express",
        frontend: ["Tailwind", "Laravel"],
        status: "On Progress",
      },
      {
        id: 2,
        name: "Project PHP 2",
        type: "Web",
        category: "E-Commerce",
        backend: "NestJS",
        frontend: ["Tailwind", "Laravel"],
        status: "On Progress",
      },
      {
        id: 3,
        name: "Project PHP 3",
        type: "Web",
        category: "E-Commerce",
        backend: "Laravel",
        frontend: ["Tailwind", "Laravel"],
        status: "On Progress",
      },
      {
        id: 4,
        name: "Project PHP 4",
        type: "Web",
        category: "E-Commerce",
        backend: "Gin",
        frontend: ["Bootstrap", "Native"],
        status: "On Progress",
      },
      {
        id: 5,
        name: "Project PHP 5",
        type: "Web",
        category: "E-Commerce",
        backend: "Fastify",
        frontend: ["Bulma", "Laravel"],
        status: "On Progress",
      },
      {
        id: 6,
        name: "Project PHP 6",
        type: "Web",
        category: "E-Commerce",
        backend: "Gin",
        frontend: ["Bulma", "Laravel"],
        status: "On Progress",
      },
      {
        id: 7,
        name: "Project PHP 7",
        type: "Web",
        category: "E-Commerce",
        backend: "Express",
        frontend: ["Bulma", "Laravel"],
        status: "On Progress",
      },
      {
        id: 8,
        name: "Project PHP 8",
        type: "Web",
        category: "E-Commerce",
        backend: "NestJS",
        frontend: ["Bulma", "Laravel"],
        status: "On Progress",
      },
      {
        id: 9,
        name: "Project PHP 9",
        type: "Web",
        category: "E-Commerce",
        backend: "Fastify",
        frontend: ["Tailwind", "Laravel"],
        status: "On Progress",
      },
      {
        id: 10,
        name: "Project PHP 10",
        type: "Web",
        category: "E-Commerce",
        backend: "Native",
        frontend: ["Bulma", "Native"],
        status: "On Progress",
      },
    ],
  },
  // *** JavaScript *** //
  {
    core: "JavaScript",
    logo: logoPHP,
    listProjects: [
      {
        id: 1,
        name: "Project JavaScript 1",
        type: "Web",
        category: "E-Commerce",
        backend: "Express",
        frontend: ["Tailwind", "ReefJS"],
        status: "On Progress",
      },
      {
        id: 2,
        name: "Project JavaScript 2",
        type: "Web",
        category: "E-Commerce",
        backend: "NestJS",
        frontend: ["Tailwind", "ReefJS"],
        status: "On Progress",
      },
      {
        id: 3,
        name: "Project JavaScript 3",
        type: "Web",
        category: "E-Commerce",
        backend: "Laravel",
        frontend: ["Tailwind", "ReefJS"],
        status: "On Progress",
      },
      {
        id: 4,
        name: "Project JavaScript 4",
        type: "Web",
        category: "E-Commerce",
        backend: "Gin",
        frontend: ["Bootstrap", "Native"],
        status: "On Progress",
      },
      {
        id: 5,
        name: "Project JavaScript 5",
        type: "Web",
        category: "E-Commerce",
        backend: "Fastify",
        frontend: ["Bulma", "ReefJS"],
        status: "On Progress",
      },
      {
        id: 6,
        name: "Project JavaScript 6",
        type: "Web",
        category: "E-Commerce",
        backend: "Gin",
        frontend: ["Bulma", "ReefJS"],
        status: "On Progress",
      },
      {
        id: 7,
        name: "Project JavaScript 7",
        type: "Web",
        category: "E-Commerce",
        backend: "Express",
        frontend: ["Bulma", "ReefJS"],
        status: "On Progress",
      },
      {
        id: 8,
        name: "Project JavaScript 8",
        type: "Web",
        category: "E-Commerce",
        backend: "NestJS",
        frontend: ["Bulma", "ReefJS"],
        status: "On Progress",
      },
      {
        id: 9,
        name: "Project JavaScript 9",
        type: "Web",
        category: "E-Commerce",
        backend: "Fastify",
        frontend: ["Tailwind", "ReefJS"],
        status: "On Progress",
      },
      {
        id: 10,
        name: "Project JavaScript 10",
        type: "Web",
        category: "E-Commerce",
        backend: "Express",
        frontend: ["Bulma", "Native"],
        status: "On Progress",
      },
    ],
  },
];
// === SAMPLE : Project Datas === //

const ProjectsList = (props) => {
  const [filtered, setFiltered] = createSignal([]);
  const [count, setCount] = createSignal(1);

  createEffect(() => {
    if (props.filter?.language) {
      const filteredProjects = projects
        .filter((project) => project.core === props.filter.language)
        .map((project) => ({
          ...project,
          listProjects: props.filter.backend
            ? project.listProjects.filter(
                (p) => p.backend === props.filter.backend
              )
            : project.listProjects,
        }))
        .filter((project) => project.listProjects.length > 0);

      setFiltered(filteredProjects);
    } else {
      setFiltered([]);
    }

    console.log("FILTER: ", props.filter);
    console.log("FILTER PROJECT: ", filtered());
  });

  // Menghitung elemen yang berada di tengah viewport saat scroll
  const handleScroll = (event) => {
    const container = event.target;
    const projectItems = container.querySelectorAll(".project-item");

    let closestItem = null;
    let closestDistance = Infinity;

    projectItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const centerDistance = Math.abs(
        rect.left + rect.width / 2 - window.innerWidth / 2
      );

      if (centerDistance < closestDistance) {
        closestDistance = centerDistance;
        closestItem = index + 1;
      }
    });

    // ** SM Breakpoint ** //
    if (window.innerWidth <= 640) {
      projectItems.forEach((item, index) => {
        if (index + 1 === closestItem) {
          item.classList.remove("scale-50");
        } else {
          item.classList.add("scale-50");
        }
      });
    }

    if (closestItem !== null) {
      setCount(closestItem);
    }
  };

  return (
    <Show
      when={filtered().length > 0}
      fallback={
        <p className="flex flex-col items-center mx-auto mt-[50%] lg:mt-[15%] xl:mt-[10%] gap-5 text-4xl text-gray-400 animate-fadeIn">
          <span className="font-bold text-8xl animate-bounce">?</span>
          <span>No Projects Found</span>{" "}
        </p>
      }
    >
      {filtered().map((project, index) => (
        <div
          id={`container-${index}`}
          className="relative w-full h-full lg:shrink-0 px-0 snap-center"
          key={index}
        >
          <div className="flex flex-col justify-center w-full h-full">
            {/* Project Count */}
            <div className="bg-gray-900 flex justify-center gap-8 text-white py-2 select-none sticky top-0 z-[777]">
              <h1 className="text-xl lg:text-xl self-center font-bold">
                {project.core}
              </h1>
              <div className="hidden lg:flex justify-center gap-2 lg:text-xl self-center">
                <h3>Projects: {project.listProjects?.length || 0}</h3>
              </div>
              {/* === MOBILE === */}
              <div className="flex lg:hidden justify-center gap-2 text-xl self-center">
                <h3>{count()}</h3> of
                <h3>{project.listProjects?.length || 0}</h3>
              </div>
              {/* === end of MOBILE === */}
            </div>

            {/* Snap Scroll Container */}
            <div
              id={`container-list-project-${index}`}
              className="grid grid-flow-col auto-cols-max align-middle justify-around lg:flex lg:flex-row lg:flex-wrap lg:justify-center w-full h-full lg:w-full self-center py-[15%] px-7 md:px-6 lg:px-10 lg:pt-20 xl:pt-12 lg:pb-36 gap-12 lg:gap-8 text-slate-200 overflow-auto select-none snap-x lg:snap-y snap-mandatory"
              onScroll={handleScroll}
            >
              {/* Container List Project */}
              <ContainerListProject datas={project.listProjects || []} />
            </div>
          </div>
        </div>
      ))}
    </Show>
  );
};

export default ProjectsList;
