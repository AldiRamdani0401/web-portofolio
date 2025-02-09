import { createEffect, createSignal, onMount, Show } from "solid-js";
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
import { goBeef, myBlog } from "../../../assets/projects";

import ContainerListProject from "./ContainerListProject";
// import CardDetail from "./ProjectDetail";

// Sample datas
import { projects } from "../../../samples/projects.json";

// === HELPERS === //
const HEF_Format_Projects = (projects, url) => {
  const RULES = {
    "my-blog": myBlog,
    "go-beef": goBeef,
    "logo-php": logoPHP,
    "logo-js": logoJS,
  };

  return projects.map((project) => ({
    ...project,
    listProjects: project.listProjects.map((listProjectItem) => ({
      ...listProjectItem,
      cover: RULES[listProjectItem.cover]
        ? url + RULES[listProjectItem.cover]
        : listProjectItem.cover,
      logo: RULES[listProjectItem.logo]
        ? url + RULES[listProjectItem.logo]
        : listProjectItem.logo,
    })),
  }));
};

// === end of HELPERS === //

// === HANDLERS === //
const HAF_Filtered_Projects = (
  { properties, datas },
  { signal, set_signal },
  callback
) => {
  const { core, type, backend } = properties?.filter || {};
  let filteredProjects = datas.flatMap((project) =>
    !core || project.core === core ? project.listProjects : []
  );

  if (signal.max !== filteredProjects.length) {
    set_signal((prev) => ({ ...prev, max: filteredProjects.length }));
  }

  if (signal.totalPage === 1) {
    set_signal((prev) => ({
      ...prev,
      totalPage: Math.ceil(filteredProjects.length / prev.limit),
    }));
  }

  if (type) {
    filteredProjects = filteredProjects.filter((p) => p.type === type);
  }

  if (backend) {
    filteredProjects = filteredProjects.filter((p) => p.backend === backend);
  }

  // Ascending
  filteredProjects.sort((a, b) => a.maintenance - b.maintenance);

  callback(filteredProjects.slice(signal.start, signal.end));
};

// === HANDLERS ===
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
    props.count.set(closestItem);
  }
};
// === end of HANDLERS === //

// ==== RENDER COMPONENT ==== //
const ProjectsList = (props) => {
  const [filtered, setFiltered] = createSignal([]);

  const [projectIndex, setProjectIndex] = createSignal({
    start: 0,
    end: 10,
    limit: 10,
    max: 0,
    count: 10,
    currentPage: 1,
    totalPage: 1,
  });

  // === MAIN DATAS === //
  const projectDatas = HEF_Format_Projects(projects, "http://localhost:5173");

  // === EFFECT === //
  onMount(() => {
    HAF_Filtered_Projects(
      { properties: props, datas: projectDatas },
      { signal: projectIndex(), set_signal: setProjectIndex },
      setFiltered
    );
  });

  // PAGINATE PROJECT
  const HAF_Paginate_Project = (mode, value, setValue, callback) => {
    if (mode === "next") {
      if (value.end >= value.max) return; // Cegah melebihi batas maksimal

      setValue((prev) => ({
        ...prev,
        start: prev.start + prev.limit,
        end: Math.min(prev.end + prev.limit, prev.max),
        count: prev.count + prev.limit,
        currentPage: prev.currentPage + 1,
      }));
    }

    if (mode === "back") {
      if (value.start <= 0) return; // Cegah mundur jika sudah di awal

      setValue((prev) => ({
        ...prev,
        start: Math.max(prev.start - prev.limit, 0),
        end: prev.start, // `end` mengikuti start sebelumnya
        count: prev.count - prev.limit,
        currentPage: prev.currentPage - 1,
      }));
    }

    callback();
  };

  return (
    <Show
      when={filtered().length > 0}
      fallback={
        // === NOT FOUND === //
        <p className="flex flex-col items-center mx-auto mt-[50%] lg:mt-[15%] xl:mt-[10%] gap-5 text-4xl text-gray-400 animate-fadeIn">
          <span className="font-bold text-8xl animate-bounce">?</span>
          <span>No Projects Found</span>{" "}
        </p>
      }
    >
      {filtered().map((project, index) => (
        <div
          id={`container-${index}`}
          className="relative w-full h-full lg:shrink-0 px-0 snap-center border"
          key={index}
        >
          <div className="flex flex-col justify-center w-full h-full">
            {/* Project Count */}
            <div
              className={`
              ${
                (props.filter.core === "PHP" && "bg-blue-900") ||
                (props.filter.core === "JavaScript" && "bg-yellow-600") ||
                (props.filter.core === "NodeJS" && "bg-green-800") ||
                (props.filter.core === "TypeScript" && "bg-blue-700") ||
                (props.filter.core === "Golang" && "bg-blue-500") ||
                (props.filter.core === "" && "bg-indigo-950")
              } flex justify-center gap-8 text-white py-2 select-none sticky top-0 z-[777]
              `}
            >
              <h1 className="text-xl lg:text-xl self-center font-bold">
                {props.filter.core || "All"}
              </h1>
              <div className="hidden lg:flex justify-center gap-2 lg:text-xl self-center">
                <h3>Projects: {projectIndex().count || 0} of {projectIndex().max}</h3>
              </div>
              {/* === MOBILE === */}
              <div className="flex lg:hidden justify-center gap-2 text-xl self-center">
                <h3>{props.count.number}</h3> of
                <h3>{filtered()?.length || 0}</h3>
              </div>
              {/* === end of MOBILE === */}
            </div>

            {/* Snap Scroll Container */}
            <div
              id={`container-list-project-${index}`}
              className="
              relative grid grid-flow-col auto-cols-max align-middle justify-start lg:flex lg:flex-row lg:flex-wrap lg:justify-center w-full h-full lg:w-full self-center py-[10%] px-10 sm:px-16 md:px-6 lg:px-10 lg:pt-20 xl:pt-12 lg:pb-36 gap-12 lg:gap-8 overvlow-x-auto overflow-y-hidden snap-x lg:snap-y snap-mandatory
              text-slate-200 select-none"
              onScroll={handleScroll}
            >
              {/* Container List Project */}
              <ContainerListProject datas={filtered()} index={projectIndex()} />
              {/* === BUTTON PAGES === */}
              <div className="absolute top-[45%] flex flex-row justify-between px-3 border w-full">
                {/* === BACK BUTTON === */}
                <button
                  className="text-5xl font-bold"
                  onClick={() => {
                    HAF_Paginate_Project(
                      "back",
                      projectIndex(),
                      setProjectIndex,
                      () => {
                        HAF_Filtered_Projects(
                          { properties: props, datas: projectDatas },
                          {
                            signal: projectIndex(),
                            set_signal: setProjectIndex,
                          },
                          setFiltered
                        );
                      }
                    );
                  }}
                >
                  {projectIndex().start != 0 && (
                    <div className="scale-x-[-1]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="1em"
                        height="1em"
                        className="animate-shakeLeftSlow"
                      >
                        <path
                          fill="#7E5CAD"
                          stroke="#2A004E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m35.417 25l-25 18.75V6.25z"
                        />
                      </svg>
                    </div>
                  )}
                </button>
                {/* === end of BACK BUTTON === */}
                {/* === NEXT BUTTON === */}
                <button
                  className="text-5xl font-bold"
                  onClick={() => {
                    HAF_Paginate_Project(
                      "next",
                      projectIndex(),
                      setProjectIndex,
                      () => {
                        HAF_Filtered_Projects(
                          { properties: props, datas: projectDatas },
                          {
                            signal: projectIndex(),
                            set_signal: setProjectIndex,
                          },
                          setFiltered
                        );
                      }
                    );
                  }}
                >
                  {projectIndex().currentPage < projectIndex().totalPage && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="1em"
                      height="1em"
                      className="animate-shakeRightSlow"
                    >
                      <path
                        fill="#7E5CAD"
                        stroke="#2A004E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m35.417 25l-25 18.75V6.25z"
                      />
                    </svg>
                  )}
                </button>
                {/* === end of NEXT BUTTON === */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Show>
  );
};

export default ProjectsList;
