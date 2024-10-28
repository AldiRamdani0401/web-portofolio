import {
  logoHTML,
  logoCSS,
  logoJS,
  logoPHP,
  logoTailwind,
  logoNodeJS,
} from "../../assets/logos/index";

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
];

const ProjectsList = () => {
  return projects.map((category, index) => (
    <div className="w-full lg:w-screen">
      <div key={index} className="w-full">
        <div className="relative flex justify-center align-middle gap-8 bg-black text-white py-5">
          {/* Header Container */}
          <div className="flex gap-4">
            <h1 className="text-2xl self-center font-bold">{category.label}</h1>
            <img
              src={category.logo}
              className="h-10 rounded-full"
              alt="logo-php"
            />
          </div>
          {/* Count Projects */}
          <div className="flex justify-center align-middle gap-2 text-2xl self-center">
            <h3>1</h3>
            <h3>of</h3>
            <h3>{category.projects.length}</h3>
          </div>
        </div>
        <div className="grid grid-flow-col auto-cols-max align-middle justify-start lg:flex lg:flex-wrap lg:justify-center w-full overflow-auto scrollbar-hide self-center bg-zinc-900 py-7 lg:py-5 px-3 sm:px-6 md:px-6 lg:px-28 gap-12 lg:gap-3 text-white">
          {category.projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-blue-950 w-85 md:w-75 lg:w-fit rounded-lg shadow-lg lg:hover:shadow-black lg:hover:z-20 transition-transform transform lg:hover:scale-110 cursor-pointer"
            >
              <h1 className="absolute bg-blue-950 px-1 top-3 lg:top-0 right-0 rounded-none lg:rounded-tr-md">
                {project.status}
              </h1>
              <div className="absolute flex flex-row justify-center gap-2 bg-slate-800 w-full py-2 bottom-11">
                {project.stack.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    className="h-8 w-8 lg:h-6 lg:w-6 rounded-full"
                    alt="stack-logo"
                  />
                ))}
              </div>
              <img
                src="https://placehold.co/200x200"
                className="w-full rounded-t-lg"
                alt="project-image"
              />
              <div className="py-2 font-bold text-center">
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
