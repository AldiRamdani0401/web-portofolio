import { createSignal, onCleanup } from "solid-js";
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
} from "../../../assets/logos/index";


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
];

const logos = [logoPHP, logoNodeJS, logoReact, logoSolidJS];

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
    // setCount(inViewCount); // Update count berdasarkan elemen yang terlihat
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
                  className={`h-10 p-1 rounded-full bg-white ${
                    logo !== category.logo ? "opacity-50 grayscale" : ""
                  } cursor-pointer`}
                  alt={category.label}
                  draggable="false"
                />
              </a>
            </figure>
          ))}
        </div>
        <div className="relative flex justify-center align-middle gap-8 bg-black text-white py-2 select-none">
          <h1 className="text-2xl self-center font-bold">{category.label}</h1>
          <div className="flex justify-center align-middle gap-2 text-2xl self-center lg:hidden">
            <h3>{count()}</h3>
            <h3>of</h3>
            <h3>{category.projects.length}</h3>
          </div>
          <div className="hidden lg:flex justify-center align-middle gap-2 text-2xl self-center">
            <h3>Project : {category.projects.length}</h3>
          </div>
        </div>

        {/* Snap Scroll Container */}
        <div id={`container-list-project-${index}`} className="grid grid-flow-col auto-cols-max align-middle justify-start lg:flex lg:flex-wrap lg:justify-center w-full h-full lg:h-130 overflow-x-scroll scrollbar-hide self-center bg-zinc-900 py-7 lg:py-2 px-3 sm:px-6 md:px-6 lg:px-28 gap-12 lg:gap-3 text-white select-none snap-x snap-mandatory"
        onscroll={() => checkInView(`container-list-project-${index}`)}>
          {category.projects.map((project, i) => (
            <div
              key={`project-${project.id}`}
              id={`project-${project.id}`} // Ubah id agar sesuai
              className="project relative bg-blue-950 w-85 md:w-75 lg:w-fit h-fit rounded-lg shadow-lg lg:hover:shadow-black lg:hover:z-20 transition-transform transform lg:hover:scale-110 cursor-pointer snap-center" // Tambahkan class 'project'
            >
              <h1 className="absolute bg-blue-950 px-1 top-3 lg:top-0 right-0 rounded-none lg:rounded-tr-md select-none">
                {project.status}
              </h1>
              <div className="absolute flex flex-row justify-center gap-2 bg-slate-800 w-full py-2 bottom-11 select-none">
                {project.stack.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    className="h-8 w-8 lg:h-6 lg:w-6 rounded-full"
                    alt="stack-logo"
                    draggable="false"
                  />
                ))}
              </div>
              <img
                src="https://placehold.co/200x200"
                className="w-full rounded-t-lg"
                alt="project-image"
                draggable="false"
              />
              <div className="py-2 font-bold text-center select-none">
                <span>{project.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ));
};

export default ProjectsList;