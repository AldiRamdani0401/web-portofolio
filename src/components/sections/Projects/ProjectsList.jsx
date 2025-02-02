import { createSignal, Show } from "solid-js";
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

// Project Datas
const projects = [
  {
    label: "PHP",
    logo: logoPHP,
    projects: [
      {
        id: 1,
        name: "Project 1",
        category: "E-Commerce",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 2,
        name: "Project 2",
        category: "E-Commerce",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoBootstrap],
      },
      {
        id: 3,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 4,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 5,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 6,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 7,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 8,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 9,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 10,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS],
      },
      {
        id: 11,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS],
      },
      {
        id: 12,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS],
      },
      {
        id: 13,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS],
      },
      {
        id: 14,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS],
      },
      {
        id: 15,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS],
      },
      {
        id: 16,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS],
      },
    ],
  },
  {
    label: "JavaScript",
    logo: logoJS,
    projects: [
      {
        id: 1,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 2,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 3,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 4,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 5,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 6,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 7,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 8,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 9,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 10,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS],
      },
    ],
  },
  {
    label: "NodeJS",
    logo: logoNodeJS,
    projects: [
      {
        id: 1,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 2,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 3,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 4,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 5,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 6,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 7,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 8,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 9,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 10,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS],
      },
    ],
  },
  {
    label: "Solid",
    logo: logoSolidJS,
    projects: [
      {
        id: 1,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 2,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 3,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 4,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 5,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 6,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 7,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 8,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 9,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 10,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS],
      },
    ],
  },
  {
    label: "ReefJS",
    logo: logoSmallReefJS,
    projects: [
      {
        id: 1,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 2,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 3,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 4,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 5,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 6,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 7,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 8,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 9,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 10,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS],
      },
    ],
  },
];

const getWindowWidth = window.innerWidth;

const ProjectsList = (props) => {
  return projects.map((category, index) => {
    const [count, setCount] = createSignal(1); // Sinyal lokal untuk setiap kategori
    const tempArray = [];

    // Fungsi untuk menampilkan detail
    const showDetail = (project) => {
      setActiveProject(project);
      setState("isVisible", false);
    };

    // Fungsi untuk menutup detail
    const closeDetail = () => {};
    const checkInView = (id) => {
      const container = document.getElementById(id);
      const elements = container.querySelectorAll(".project");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.left >= 0 && rect.right <= window.innerWidth) {
          if (!tempArray.includes(element.id)) {
            tempArray.push(element.id);
          } else {
            const index = tempArray.indexOf(element.id);
            tempArray.splice(index + 1, 1);
          }
        }
      });
      setCount(tempArray.length);
    };

    return (
      <div
        id={`container-${index}`}
        className="relative w-full h-full lg:shrink-0 px-0 snap-center"
        key={index}
      >
        <div className="flex flex-col justify-center w-full">
          {/* Project Count */}
          <div className="bg-gray-900 flex justify-center align-middle gap-8 text-white py-2 select-none sticky top-0 z-[777]">
            <h1 className="text-2xl lg:text-xl self-center font-bold">
              {category.label}
            </h1>
            <div className="flex justify-center align-middle gap-2 text-2xl self-center lg:hidden">
              <h3>{count()}</h3>
              <h3>of</h3>
              <h3>{category.projects.length}</h3>
            </div>
            <div className="hidden lg:flex justify-center align-middle gap-2 text-2xl lg:text-xl self-center">
              <h3>Project : {category.projects.length}</h3>
            </div>
          </div>

          {/* Snap Scroll Container */}
            <div
              id={`container-list-project-${index}`}
              className="grid grid-flow-col auto-cols-max align-middle justify-start lg:flex lg:flex-row lg:flex-wrap lg:justify-center w-full h-full lg:w-full self-center py-7 px-3 sm:px-6 md:px-6 lg:px-10 lg:pt-20 lg:pb-36 gap-12 lg:gap-8 text-slate-200 overflow-auto select-none snap-y snap-mandatory"
              onScroll={() => checkInView(`container-list-project-${index}`)}
            >
              {/* Container List Project */}
              <ContainerListProject
                datas={category.projects}
                onShowDetail={showDetail}
              />
            </div>
          </div>
        {/* Show detail di induk */}
        {/* <Show when={activeProject()}>
          <div className="absolute top-[-1px] left-0 z-50 border">
            <CardDetail project={activeProject()} onClose={closeDetail} />
          </div>
        </Show> */}
      </div>
    );
  });
};

export default ProjectsList;
