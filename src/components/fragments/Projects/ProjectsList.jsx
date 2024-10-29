import { createSignal } from "solid-js";
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


// Project Datas
const projects = [
  {
    label: "PHP",
    logo: logoPHP,
    projects: [
      {
        id: 1,
        name: "Pembayaran SPP",
        status: "On Progress",
        stack: [logoPHP, logoHTML, logoCSS, logoJS, logoTailwind],
      },
      {
        id: 2,
        name: "SISVAKAT",
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
    label: "React",
    logo: logoReact,
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

const logos = [logoPHP, logoNodeJS, logoReact, logoSolidJS, logoSmallReefJS];

const getWindowWidth = window.innerWidth;

const ProjectsList = () => {
  const [count, setCount] = createSignal(1);
  const tempArray = [];

  const checkInView = (id) => {
    const container = document.getElementById(id);
    const elements = container.querySelectorAll('.project');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      // Cek hanya kiri dan kanan
      if (rect.left >= 0 && rect.right <= window.innerWidth) {
        if (!tempArray.includes(element.id)) {
          tempArray.push(element.id);
        }
      }
    });
    // Update jumlah elemen yang terlihat
    setCount((prev) => prev = tempArray.length);
  };

  return projects.map((category, index) => (
    <div id={`container-${index}`} className="w-full lg:shrink-0 px-0 lg:px-5 snap-center">
      <div key={index} className="flex flex-col justify-center w-full">
        <div className="flex justify-center py-2 gap-2 w-full bg-black ">
          {logos.map((logo, i) => (
            <figure key={i}>
              <a href={`#container-${i}`}>
                <img
                  src={logo}
                  className={`h-10 w-10 p-1 rounded-full bg-white ${
                    logo !== category.logo ? "opacity-50 grayscale" : ""
                  } cursor-pointer object-cover`}
                  alt={category.label}
                  draggable="false"
                />
              </a>
            </figure>
          ))}
        </div>
        <div className="relative flex justify-center align-middle gap-8 bg-black text-white py-2 select-none">
          <h1 className="text-2xl lg:text-xl self-center font-bold">{category.label}</h1>
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
        <div id={`container-list-project-${index}`} className="grid grid-flow-col auto-cols-max align-middle justify-start lg:flex lg:flex-wrap lg:justify-center w-full h-full lg:h-130 overflow-x-scroll scrollbar-hide self-center bg-zinc-900 py-7 lg:py-2 px-3 sm:px-6 md:px-6 lg:px-28 gap-12 lg:gap-3 text-white select-none snap-x snap-mandatory"
        onscroll={() => checkInView(`container-list-project-${index}`)}>
          {/* Container List Project */}
          <ContainerListProject datas={category.projects}/>
        </div>
      </div>
    </div>
  ));
};

export default ProjectsList;