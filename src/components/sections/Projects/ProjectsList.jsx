import { createEffect, createSignal, on, onMount, Show } from "solid-js";
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
import { cbtStti, goBeef, myBlog } from "../../../assets/projects";

import ContainerListProject from "./ContainerListProject";
// import CardDetail from "./ProjectDetail";

// === SAMPLE DATAS === //
import { SAMPLE_PROJECT_DATAS } from "../../../samples/projects.json";

// === HANDLERS === //
// import HAF_Filtered_Projects from "../../../utils/handlers/FilterHandler";

// === HELPERS === //
import HEF_Format_Projects from "../../../utils/helpers/FormatProjectsHelper";
import HEF_GetURL from "../../../utils/helpers/GetURL";

// === HANDLERS ===
// const handleScroll = (event) => {
//   const container = event.target;
//   const projectItems = container.querySelectorAll(".project-item");

//   let closestItem = null;
//   let closestDistance = Infinity;

//   projectItems.forEach((item, index) => {
//     const rect = item.getBoundingClientRect();
//     const centerDistance = Math.abs(
//       rect.left + rect.width / 2 - window.innerWidth / 2
//     );

//     if (centerDistance < closestDistance) {
//       closestDistance = centerDistance;
//       closestItem = index + 1;
//     }
//   });

//   // ** SM Breakpoint ** //
//   if (window.innerWidth <= 640) {
//     projectItems.forEach((item, index) => {
//       if (index + 1 === closestItem) {
//         item.classList.remove("scale-50");
//       } else {
//         item.classList.add("scale-50");
//       }
//     });
//   }

//   if (closestItem !== null) {
//     props.count.set(closestItem);
//   }
// };

const HAF_Filtered_Projects = (
  { properties, datas },
  { signal, set_signal },
  callback
) => {
  // Filter properties
  const filter_core = properties.filter.core;
  const filter_type = properties.filter.type;
  const filter_backend = properties.filter.backend;
  const filter_framework = properties.filter.framework;


  // Projects (props)
  // const init_projects_state = properties.projects.state;

  // Signals (props)
  const signal_state = signal;
  const set_signal_state = set_signal;

  // Filter data
  // let result_filtered_project = datas.flatMap((project) =>
  //   !filter_core || project.core === filter_core ? project.list_projects : []
  // );

  let result_filtered_project;
  if (filter_core === "") {
    result_filtered_project = datas.flatMap((project) => project.list_projects);
  } else {
    result_filtered_project = datas.flatMap((project) =>
      project.core === filter_core ? project.list_projects : []
    );
  }

  // Filter berdasarkan type
  if (filter_type) {
    result_filtered_project = result_filtered_project.filter(
      (p) => p.type === filter_type
    );
  }

  // Filter berdasarkan backend
  if (filter_backend) {
    result_filtered_project = result_filtered_project.filter(
      (p) => p.backend === filter_backend
    );
  }

  // Filter berdasarkan framework
  if (filter_framework) {
    result_filtered_project = result_filtered_project.filter(
      (p) => p.framework === filter_framework
    );
  }

  // ASCENDING
  result_filtered_project.sort((a, b) => a.maintenance - b.maintenance);

  // Ambil data sesuai pagination
  const values = result_filtered_project.slice(
    signal_state.start,
    signal_state.end
  );

  // Perbarui nilai maksimum jika berbeda
  if (signal_state.max !== result_filtered_project.length) {
    set_signal_state((prev) => ({
      ...prev,
      max: result_filtered_project.length,
    }));
  }

  // Perbarui total halaman
  set_signal_state((prev) => ({
    ...prev,
    totalPage: Math.ceil(result_filtered_project.length / prev.limit),
  }));

  console.log("HANDLERS :", values);

  // Perbarui jumlah data yang sedang ditampilkan
  if (signal_state.count == 0) {
    set_signal_state((prev) => ({ ...prev, count: values.length }));
  }

  // Eksekusi callback dengan data hasil filter
  callback(values);
};

// === end of HANDLERS === //

// ==== RENDER COMPONENT ==== //
const ProjectsList = (props) => {
  // SIGNALS
  const [filtered, setFiltered] = createSignal([]);

  // Props
  const [projectState, setProjectState] = createSignal({
    start: props.projects.state.start,
    end: props.projects.state.end,
    limit: props.projects.state.limit,
    max: props.projects.state.max,
    count: props.projects.state.count,
    currentPage: props.projects.state.currentPage,
    totalPage: props.projects.state.totalPage,
  });

  const rules = {
    "go-beef": goBeef,
    "my-blog": myBlog,
    "cbt-stti": cbtStti,
    "logo-js": logoJS,
    "logo-php": logoPHP,
  };

  // Format ulang project
  const baseURL = HEF_GetURL();

  // Gunakan baseURL dalam fungsi HEF_Format_Projects
  const R_Reformat_Projects = HEF_Format_Projects(
    SAMPLE_PROJECT_DATAS,
    baseURL,
    rules
  );

  // Effect berjalan saat projects.state berubah
  createEffect(() => {
    if (!props.render.state) return;
    if (props.reset.state) {
      setProjectState((prev) => ({
        ...prev,
        start: 0,
        end: 10,
        limit: 10,
        max: 0,
        count: 0,
        currentPage: 1,
        totalPage: 1,
      }));
    }
    HAF_Filtered_Projects(
      {
        properties: { filter: props.filter, projects: projectState() },
        datas: R_Reformat_Projects,
      },
      { signal: projectState(), set_signal: setProjectState },
      setFiltered
    );
    props.render.setState(false);
  });

  //  === ON MOUNT ===  //
  onMount(() => {
    HAF_Filtered_Projects(
      {
        properties: { filter: props.filter, projects: projectState() },
        datas: R_Reformat_Projects,
      },
      { signal: projectState(), set_signal: setProjectState },
      setFiltered
    );
    console.log(projectState());
  });

  // === end ON MOUNT === //

  // PAGINATE PROJECT
  const HAF_Paginate_Project = (mode, value, setValue, callback) => {
    console.log("MODE :", mode);
    if (mode === "next") {
      if (value.end >= value.max) return;
      setValue((prev) => ({
        ...prev,
        start: prev.start + prev.limit,
        end: Math.min(prev.end + prev.limit, prev.max),
        currentPage: prev.currentPage + 1,
      }));
    }

    if (mode === "back") {
      if (value.start <= 0) return; // Cegah mundur jika sudah di awal

      setValue((prev) => ({
        ...prev,
        start: Math.max(prev.start - prev.limit, 0),
        end: prev.start, // `end` mengikuti start sebelumnya
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
        // === end of NOT FOUND === //
      }
    >
      {/* ===  LOOPING FILTERED PROJECT COMPONENTS  === */}
      {filtered().map((project, index) => (
        <div
          id={`container-${index}`}
          className="relative w-full h-full lg:shrink-0 px-0 snap-center"
          key={index}
        >
          <div className="flex flex-col justify-center w-full h-full">
            {/* === PROJECT COUNTER === */}
            {/* {
              <CounterProject
                filter_core={props.filter.core}
                project_state={projectState()}
              />
            } */}
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
                <h3 className="flex gap-1">
                  <span>Projects: {projectState().start + 1}</span>-
                  <span>
                    {projectState().count} of {projectState().max}
                  </span>
                </h3>
              </div>
            </div>
            {/* === end of PROJECT COUNTER === */}

            {/* === CONTAINER : SNAP SCROLL === */}
            <div
              id={`container-list-project-${index}`}
              className="
              relative grid grid-flow-col auto-cols-max align-middle justify-start lg:flex lg:flex-row lg:flex-wrap lg:justify-center w-full h-full lg:w-full self-center py-[10%] px-10 sm:px-16 md:px-6 lg:px-10 lg:pt-20 xl:pt-12 lg:pb-36 gap-12 lg:gap-8 overvlow-x-auto overflow-y-hidden snap-x lg:snap-y snap-mandatory
              text-slate-200 select-none"
              // onScroll={handleScroll}
            >
              {/* Container List Project */}
              <ContainerListProject datas={filtered()} index={projectState()} />
              {/* === GROUP BUTTONS : PAGINATE === */}
              <div className="absolute top-[45%] flex flex-row justify-between px-3 w-full">
                {/* === BACK BUTTON === */}
                <button
                  className="text-5xl font-bold"
                  onClick={() => {
                    HAF_Paginate_Project(
                      "back",
                      projectState(),
                      setProjectState,
                      () => {
                        HAF_Filtered_Projects(
                          {
                            properties: {
                              filter: props.filter,

                              projects: projectState(),
                            },
                            datas: R_Reformat_Projects,
                          },
                          {
                            signal: projectState(),
                            set_signal: setProjectState,
                          },
                          setFiltered
                        );
                        setProjectState((prev) => ({
                          ...prev,
                          count:
                            prev.count - prev.limit < prev.limit
                              ? prev.limit
                              : prev.count - prev.limit,
                        }));
                      }
                    );
                  }}
                >
                  {projectState().start != 0 && (
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
                      projectState(),
                      setProjectState,
                      () => {
                        HAF_Filtered_Projects(
                          {
                            properties: {
                              filter: props.filter,

                              projects: projectState(),
                            },
                            datas: R_Reformat_Projects,
                          },
                          {
                            signal: projectState(),
                            set_signal: setProjectState,
                          },
                          setFiltered
                        );
                        setProjectState((prev) => ({
                          ...prev,
                          count: prev.count + filtered().length,
                        }));
                      }
                    );
                  }}
                >
                  {/* {projects.state.currentPage < projects.state.totalPage && */}
                  {projectState().count !== projectState().max && (
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
              {/* === end of GROUP BUTTONS : PAGINATE === */}
            </div>
            {/* === end of CONTAINER : SNAP SCROLL === */}
          </div>
        </div>
      ))}
      {/* ===  end of LOOPING FILTERED PROJECT COMPONENTS  === */}
    </Show>
  );
};

// CHILD COMPONENTS
// function CounterProject(props) {
//   const { filter_core, project_state } = props;

//   // console.log("COUNTER : ", props.project_state);
//   return (
//     <div
//       className={`
//     ${
//       (filter_core === "PHP" && "bg-blue-900") ||
//       (filter_core === "JavaScript" && "bg-yellow-600") ||
//       (filter_core === "NodeJS" && "bg-green-800") ||
//       (filter_core === "TypeScript" && "bg-blue-700") ||
//       (filter_core === "Golang" && "bg-blue-500") ||
//       (filter_core === "" && "bg-indigo-950")
//     } flex justify-center gap-8 text-white py-2 select-none sticky top-0 z-[777]
//     `}
//     >
//       <h1 className="text-xl lg:text-xl self-center font-bold">
//         {filter_core || "All"}
//       </h1>
//       <div className="hidden lg:flex justify-center gap-2 lg:text-xl self-center">
//         <h3>
//           {/* {console.log(projects.state.count)} */}
//           Projects: {project_state.count} of {project_state.max}
//         </h3>
//       </div>
//     </div>
//   );
// }

export default ProjectsList;
