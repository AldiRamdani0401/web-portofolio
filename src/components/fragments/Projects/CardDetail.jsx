import { createSignal } from "solid-js";

const docs = [
  {
    id: 1,
    image: "https://placehold.co/100x100?text=Doc%201",
    label: "documentation-images-1",
    note: "dokumentasi project 1",
  },
  {
    id: 2,
    image: "https://placehold.co/100x100?text=Doc%202",
    label: "documentation-images-2",
    note: "dokumentasi project 2",
  },
  {
    id: 3,
    image: "https://placehold.co/100x100?text=Doc%203",
    label: "documentation-images-3",
    note: "dokumentasi project 3",
  },
];

const tabHandler = (e) => {
  const element = e.target;
  element.classList.add("bg-blue-900", "text-white");
  const elements = Array.from(document.querySelectorAll(".tab"));
  const result = elements.filter((el) => el.id != element.id);
  result.forEach((element) => {
    element.classList.remove("bg-blue-900", "text-white");
    element.classList.add("text-blue-900");
  });
  window.location.href = element.id;
};

const CardDetail = ({ project, onClose }) => {
  const [index, setIndex] = createSignal(0);
  const [minMax, setMinMax] = createSignal(false);
  return (
    <div className="flex justify-center w-screen h-full bg-black bg-opacity-70 py-5 px-0 lg:py-5 lg:px-5 fixed">
      <div className="flex flex-col-reverse lg:flex-row justify-between bg-white rounded-lg p-2 shadow-lg h-[90%] w-[90%] lg:h-fit lg:w-[90%] gap-1 relative">
        {/* Container Project Detail & Image */}
        <div className="flex flex-col-reverse align-start lg:flex-row w-full h-full lg:h-full gap-2">
          {/* Container Project Detail */}
          <div className="w-full h-full overflow-hidden flex flex-col px-2 select-none relative">
            {/* Max Mobile */}
            <div
              className={`${
                minMax() ? "block" : "hidden"
              } lg:hidden relative left-0 top-0 my-1 border rounded-md`}
            >
              <button
                className="flex align-center text-2xl text-slate-600 hover:text-slate-800 font-bold"
                onclick={() => {
                  setMinMax((prev) => !prev);
                }}
              >
                {minMax() && (
                  // Max
                  <div className="flex">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2" />
                    </svg>
                    <span className="self-center text-sm">
                      open documentation image
                    </span>
                  </div>
                )}
              </button>
            </div>
            {/* Tab Buttons */}
            <div
              className={`${
                minMax() ? "h-7" : "h-10"
              } flex gap-1 lg:h-fit max-w-full overflow-x-auto scrollbar-hide overflow-y-hidden`}
            >
              <button
                id="#overview"
                className="tab border bg-blue-900 text-white border-blue-900 rounded-t-lg px-1 pb-1 lg:pb-0 lg:pt-1 text-center text-sm lg:text-md text-nowrap font-semibold hover:font-bold hover:bg-blue-900 hover:text-white "
                onclick={(e) => {
                  tabHandler(e);
                }}
              >
                Overview
              </button>
              <button
                id="#technology-stack"
                className="tab border border-blue-900 rounded-t-lg px-1 pb-1 lg:pb-0 lg:pt-1 text-center text-sm lg:text-md text-nowrap text-blue-900 font-semibold hover:font-bold hover:bg-blue-900 hover:text-white"
                onclick={(e) => {
                  tabHandler(e);
                }}
              >
                Technology Stack
              </button>
              <button
                id="#features"
                className="tab border border-blue-900 rounded-t-lg px-1 pb-1 lg:pb-0 lg:pt-1 text-center text-sm lg:text-md text-nowrap text-blue-900 font-semibold hover:font-bold hover:bg-blue-900 hover:text-white"
                onclick={(e) => {
                  tabHandler(e);
                }}
              >
                Features
              </button>
              <button
                id="#screenshots"
                className="tab border border-blue-900 rounded-t-lg px-1 pb-1 lg:pb-0 lg:pt-1 text-center text-sm lg:text-md text-nowrap text-blue-900 font-semibold hover:font-bold hover:bg-blue-900 hover:text-white"
                onclick={(e) => {
                  tabHandler(e);
                }}
              >
                Screenshots
              </button>
              <button
                id="#demo"
                className="tab border border-blue-900 rounded-t-lg px-1 pb-1 lg:pb-0 lg:pt-1 text-center text-sm lg:text-md text-nowrap text-blue-900 font-semibold hover:font-bold hover:bg-blue-900 hover:text-white"
                onclick={(e) => {
                  tabHandler(e);
                }}
              >
                Demo
              </button>
            </div>
            <div className="grid grid-flow-col auto-cols-max justify-start max-w-full max-h-full overflow-auto lg:w-full gap-2 lg:gap-3 snap-x snap-mandatory scrollbar-hide scroll-smooth px-2">
              {/* Sub Container : Overview */}
              <section
                id="overview"
                className="hidden w-[322px] max-h-150 overflow-y-scroll lg:w-[606px] snap-center"
              >
                {/* Header */}
                <div className="p-1 w-full bg-indigo-900 sticky top-0">
                  <h1 className="text-white text-lg text-center lg:text-left lg:text-2xl font-semibold lg:font-bold">
                    Overview
                  </h1>
                </div>
                {/* Body Content*/}
                <div className="w-full">
                  {/* Content 1 */}
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Name</span>
                    <span className="font-normal w-full border px-2">
                      {project.name}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Category</span>
                    <span className="font-normal w-full border px-2">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Status</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Start Date</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">End Date</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  {/* Content 2: Technologies */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Technologies
                    </span>
                    <div className="flex justify-center py-3 space-x-2 border">
                      {project.stack.map((logo, index) => (
                        <img
                          key={index}
                          src={logo}
                          className="h-8 w-8 p-[3px] bg-gray-200 rounded-full"
                          alt="stack-logo"
                          draggable="false"
                        />
                      ))}
                    </div>
                  </div>
                  {/* Content 3: Description */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Description
                    </span>
                    <div className="text-sm font-normal text-justify border p-4 lg:px-3 py-2">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis voluptatum a culpa laudantium perspiciatis rem
                        nulla, obcaecati at vero quis quod corrupti! Ad culpa
                        dolore laboriosam exercitationem, tempora corporis
                        aliquam, autem vel et eos maiores perspiciatis officiis
                        expedita ullam accusantium quidem totam eveniet sunt
                        adipisci dolorum obcaecati. Tempore, totam facere fuga
                        aliquam aspernatur eveniet impedit est perspiciatis
                        fugiat voluptatem deserunt dolorum quis. Deleniti dicta
                        voluptatum, reprehenderit eaque quis, nemo consequatur
                        sunt officia minima quaerat illo harum quidem deserunt
                        eum voluptates similique modi mollitia beatae.
                        Blanditiis molestiae incidunt eligendi, expedita minus
                        praesentium itaque rem necessitatibus quia deserunt
                        possimus delectus sequi officia.
                      </p>
                    </div>
                  </div>
                  {/* Content 4: Project Background */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Project Background
                    </span>
                    <div className="text-sm font-normal text-justify border p-4 lg:px-3 py-2">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis voluptatum a culpa laudantium perspiciatis rem
                        nulla, obcaecati at vero quis quod corrupti! Ad culpa
                        dolore laboriosam exercitationem, tempora corporis
                        aliquam, autem vel et eos maiores perspiciatis officiis
                        expedita ullam accusantium quidem totam eveniet sunt
                        adipisci dolorum obcaecati. Tempore, totam facere fuga
                        aliquam aspernatur eveniet impedit est perspiciatis
                        fugiat voluptatem deserunt dolorum quis. Deleniti dicta
                        voluptatum, reprehenderit eaque quis, nemo consequatur
                        sunt officia minima quaerat illo harum quidem deserunt
                        eum voluptates similique modi mollitia beatae.
                        Blanditiis molestiae incidunt eligendi, expedita minus
                        praesentium itaque rem necessitatibus quia deserunt
                        possimus delectus sequi officia.
                      </p>
                    </div>
                  </div>
                  {/* Content 5: Project Objectives */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Project Objectives
                    </span>
                    <div className="text-sm font-normal align-middle border">
                      <div className="flex gap-1 py-1 px-2 justify-center border">
                        <span className="p-1 rounded-full bg-blue-900 h-fit w-fit mt-1"></span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusantium non molestias, ullam, ipsam
                          molestiae eligendi quaerat nobis hic repellendus alias
                          quod similique! Repellat veritatis, ratione delectus
                          quidem aut maiores iusto?
                        </p>
                      </div>
                      <div className="flex gap-1 py-1 px-2 justify-center border">
                        <span className="p-1 rounded-full bg-blue-900 h-fit w-fit mt-1"></span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusantium non molestias, ullam, ipsam
                          molestiae eligendi quaerat nobis hic repellendus alias
                          quod similique! Repellat veritatis, ratione delectus
                          quidem aut maiores iusto?
                        </p>
                      </div>
                      <div className="flex gap-1 py-1 px-2 justify-center border">
                        <span className="p-1 rounded-full bg-blue-900 h-fit w-fit mt-1"></span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusantium non molestias, ullam, ipsam
                          molestiae eligendi quaerat nobis hic repellendus alias
                          quod similique! Repellat veritatis, ratione delectus
                          quidem aut maiores iusto?
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Content 6: Main Features */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Main Features
                    </span>
                    <div className="text-sm font-normal align-middle border">
                      <div className="flex gap-1 py-1 px-2 justify-center border">
                        <span className="p-1 rounded-full bg-blue-900 h-fit w-fit mt-1"></span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusantium non molestias, ullam, ipsam
                          molestiae eligendi quaerat nobis hic repellendus alias
                          quod similique! Repellat veritatis, ratione delectus
                          quidem aut maiores iusto?
                        </p>
                      </div>
                      <div className="flex gap-1 py-1 px-2 justify-center border">
                        <span className="p-1 rounded-full bg-blue-900 h-fit w-fit mt-1"></span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusantium non molestias, ullam, ipsam
                          molestiae eligendi quaerat nobis hic repellendus alias
                          quod similique! Repellat veritatis, ratione delectus
                          quidem aut maiores iusto?
                        </p>
                      </div>
                      <div className="flex gap-1 py-1 px-2 justify-center border">
                        <span className="p-1 rounded-full bg-blue-900 h-fit w-fit mt-1"></span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusantium non molestias, ullam, ipsam
                          molestiae eligendi quaerat nobis hic repellendus alias
                          quod similique! Repellat veritatis, ratione delectus
                          quidem aut maiores iusto?
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Content 7: Team Project */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Team Project
                    </span>
                    <div className="flex flex-row text-md font-semibold">
                      <span className="px-1 w-full border">Project Leader</span>
                      <span className="font-normal w-full border px-2">
                        Aldi Ramdani
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Fullstack</span>
                    <span className="font-normal w-full border px-2">
                      Budi Santoso
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Frontend</span>
                    <span className="font-normal w-full border px-2">
                      Caca Cahaya
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Backend</span>
                    <span className="font-normal w-full border px-2">
                      Asep Junior
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Tester</span>
                    <span className="font-normal w-full border px-2">
                      Asep Senior
                    </span>
                  </div>
                  {/* Content 8: Update History */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Update History
                    </span>
                    <div className="flex flex-row text-md font-semibold">
                      <span className="px-1 w-full border">
                        30 October 2024
                      </span>
                      <span className="font-normal w-full border px-2">
                        Version X LTS
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">30 October 2024</span>
                    <span className="font-normal w-full border px-2">
                      Version X LTS
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">30 October 2024</span>
                    <span className="font-normal w-full border px-2">
                      Version X LTS
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">30 October 2024</span>
                    <span className="font-normal w-full border px-2">
                      Version X LTS
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">30 October 2024</span>
                    <span className="font-normal w-full border px-2">
                      Version X LTS
                    </span>
                  </div>
                </div>
              </section>
              {/* Sub Container : Technology Stack */}
              <section
                id="technology-stack"
                className="w-[322px] max-h-full overflow-auto lg:w-[606px] snap-center"
              >
                {/* Header */}
                <div className="p-1 w-full bg-indigo-900 sticky top-0">
                  <h1 className="text-white text-lg text-center lg:text-left lg:text-2xl font-semibold lg:font-bold sticky top-0">
                    Technology Stack
                  </h1>
                </div>
                {/* Body */}
                <div className="w-full">
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Core Tech</span>
                    <span className="font-normal w-full border px-2">
                      PHP (8.2)
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <div className="flex px-1 align-middle h-full w-full border">
                      <span className="self-center">Second Tech</span>
                    </div>
                    <div className="flex font-normal w-full border px-2">
                      <span className="self-center">JavaScript (ES6)</span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <div className="flex px-1 align-middle h-full w-full border">
                      <span className="self-center">Architecture</span>
                    </div>
                    <div className="flex font-normal w-full border px-2">
                      <span className="self-center">MVC</span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <div className="flex align-middle px-1 w-full border">
                      <span className="mt-2">Client-Side Tech</span>
                    </div>
                    <div className="flex flex-col font-normal w-full border px-2">
                      <span className="self-center h-full w-full">HTML</span>
                      <span className="self-center h-full w-full">CSS</span>
                      <span className="self-center h-full w-full">ReefJS</span>
                      <span className="self-center h-full w-full">JQuery</span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <div className="flex align-middle px-1 w-full border">
                      <span className="mt-2">Server-Side Tech</span>
                    </div>
                    <div className="flex flex-col font-normal w-full border px-2">
                      <span className="self-center h-full w-full">PHP</span>
                      <span className="self-center h-full w-full">
                        PHP Mailer
                      </span>
                      <span className="self-center h-full w-full">NGINX</span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <div className="flex align-middle px-1 w-full border">
                      <span>Framework</span>
                    </div>
                    <div className="flex flex-col font-normal w-full border px-2">
                      <span className="self-center h-full w-full">
                        TailwindCSS
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <div className="flex align-middle px-1 w-full border">
                      <span>Database</span>
                    </div>
                    <div className="flex flex-col font-normal w-full border px-2">
                      <span className="self-center h-full w-full">MySQL</span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <div className="flex align-middle px-1 w-full border">
                      <span>Cloud Service</span>
                    </div>
                    <div className="flex flex-col font-normal w-full border px-2">
                      <span className="self-center h-full w-full">-</span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <div className="flex align-middle px-1 w-full border">
                      <span>Version Control</span>
                    </div>
                    <div className="flex flex-col font-normal w-full border px-2">
                      <span className="self-center h-full w-full">GitHub</span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <div className="flex align-middle px-1 w-full border">
                      <span>Testing Tools</span>
                    </div>
                    <div className="flex flex-col font-normal w-full border px-2">
                      <span className="self-center h-full w-full">Postman</span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <div className="flex align-middle px-1 w-full border">
                      <span>Management tools</span>
                    </div>
                    <div className="flex flex-col font-normal w-full border px-2">
                      <span className="self-center h-full w-full">Notion</span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <div className="flex align-middle px-1 w-full border">
                      <span>Third Party</span>
                    </div>
                    <div className="flex flex-col font-normal w-full border px-2">
                      <span className="self-center h-full w-full">-</span>
                    </div>
                  </div>
                  {/* Minimum Environment System Requirements */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Minimum System Requirements
                    </span>
                    {/* Operating System */}
                    <div className="flex flex-row text-md font-semibold">
                      <span className="p-1 w-full border">
                        Operating System
                      </span>
                      <span className="font-normal w-full border px-2 py-1">
                        Linux
                      </span>
                    </div>
                    {/* CPU */}
                    <div className="flex flex-row text-md font-semibold">
                      <div className="flex align-middle px-1 w-full border">
                        <span>CPU</span>
                      </div>
                      <div className="flex flex-col font-normal w-full border px-2">
                        <span className="self-center h-full w-full">
                          2 Core
                        </span>
                      </div>
                    </div>
                    {/* RAM */}
                    <div className="flex flex-row text-md font-semibold">
                      <span className="p-1 w-full border">RAM</span>
                      <span className="font-normal w-full border px-2 py-1">
                        2 GB
                      </span>
                    </div>
                    {/* Storage */}
                    <div className="flex flex-row text-md font-semibold">
                      <span className="p-1 w-full border">Storage</span>
                      <span className="font-normal w-full border px-2 py-1">
                        10 GB
                      </span>
                    </div>
                    {/* Server */}
                    <div className="flex flex-row text-md font-semibold">
                      <span className="p-1 w-full border">Server</span>
                      <span className="font-normal w-full border px-2 py-1">
                        NGINX
                      </span>
                    </div>
                    {/* Database */}
                    <div className="flex flex-row text-md font-semibold">
                      <span className="p-1 w-full border">Database</span>
                      <span className="font-normal w-full border px-2 py-1">
                        MySQL
                      </span>
                    </div>
                    {/* Programming Language */}
                    <div className="flex flex-row text-md font-semibold">
                      <span className="p-1 w-full border">Language</span>
                      <span className="font-normal w-full border px-2 py-1">
                        PHP
                      </span>
                    </div>
                    {/* Compatible Browser */}
                    <div className="flex flex-row text-md font-semibold">
                      <span className="p-1 w-full border">
                        Compatible Browser
                      </span>
                      <div className="flex flex-col font-normal w-full border px-2 py-1">
                        <span>Chrome</span>
                        <span>Firefox</span>
                        <span>Edge</span>
                      </div>
                    </div>
                    {/* Network Connection */}
                    <div className="flex flex-row text-md font-semibold">
                      <span className="p-1 w-full border">Network Connection</span>
                      <span className="font-normal w-full border px-2 py-1">
                        Internet (1Mbps)
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              {/* Sub Container : Features */}
              <div
                id="features"
                className="w-[322px] max-h-full overflow-auto lg:w-[606px] snap-center"
              >
                {/* Header */}
                <div className="p-1 w-full bg-indigo-900 sticky top-0">
                  <h1 className="text-white text-lg text-center lg:text-left lg:text-2xl font-semibold lg:font-bold">
                    Features
                  </h1>
                </div>
                {/* Body */}
                <div className="w-full">
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Name</span>
                    <span className="font-normal w-full border px-2">
                      {project.name}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Category</span>
                    <span className="font-normal w-full border px-2">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Status</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Start Date</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">End Date</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  {/* Technologies */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Technologies
                    </span>
                    <div className="flex justify-center py-3 space-x-2 border">
                      {project.stack.map((logo, index) => (
                        <img
                          key={index}
                          src={logo}
                          className="h-8 w-8 p-[3px] bg-gray-200 rounded-full"
                          alt="stack-logo"
                          draggable="false"
                        />
                      ))}
                    </div>
                    <div className="flex flex-row text-md font-semibold">
                      <span className="p-1 w-full border">Core</span>
                      <span className="font-normal w-full border px-2 py-1">
                        PHP
                      </span>
                    </div>
                    <div className="flex flex-row text-md font-semibold">
                      <span className="flex p-1 w-full border">
                        <span className="self-center">Client-Side</span>
                      </span>
                      <span className="font-normal w-full border px-2 py-1">
                        HTML, CSS, JavaScript, ReefJS
                      </span>
                    </div>
                  </div>
                  {/* Team Project */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Team Project
                    </span>
                    <div className="flex flex-row text-md font-semibold">
                      <span className="px-1 w-full border">Project Leader</span>
                      <span className="font-normal w-full border px-2">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Leader</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              {/* Sub Container : Screenshots */}
              <div
                id="screenshots"
                className="w-[322px] max-h-full overflow-auto lg:w-[606px] snap-center"
              >
                {/* Header */}
                <div className="p-1 w-full bg-indigo-900 sticky top-0">
                  <h1 className="text-white text-lg text-center lg:text-left lg:text-2xl font-semibold lg:font-bold">
                    Screenshots
                  </h1>
                </div>
                {/* Body */}
                <div className="w-full">
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Name</span>
                    <span className="font-normal w-full border px-2">
                      {project.name}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Category</span>
                    <span className="font-normal w-full border px-2">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Status</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Start Date</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">End Date</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  {/* Technologies */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Technologies
                    </span>
                    <div className="flex justify-center py-3 space-x-2 border">
                      {project.stack.map((logo, index) => (
                        <img
                          key={index}
                          src={logo}
                          className="h-8 w-8 p-[3px] bg-gray-200 rounded-full"
                          alt="stack-logo"
                          draggable="false"
                        />
                      ))}
                    </div>
                    <div className="flex flex-row text-md font-semibold">
                      <span className="p-1 w-full border">Core</span>
                      <span className="font-normal w-full border px-2 py-1">
                        PHP
                      </span>
                    </div>
                    <div className="flex flex-row text-md font-semibold">
                      <span className="flex p-1 w-full border">
                        <span className="self-center">Client-Side</span>
                      </span>
                      <span className="font-normal w-full border px-2 py-1">
                        HTML, CSS, JavaScript, ReefJS
                      </span>
                    </div>
                  </div>
                  {/* Team Project */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Team Project
                    </span>
                    <div className="flex flex-row text-md font-semibold">
                      <span className="px-1 w-full border">Project Leader</span>
                      <span className="font-normal w-full border px-2">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Leader</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              {/* Sub Container : Demo */}
              <div
                id="demo"
                className="w-[322px] max-h-full overflow-auto lg:w-[606px] snap-center"
              >
                {/* Header */}
                <div className="p-1 w-full bg-indigo-900 sticky top-0">
                  <h1 className="text-white text-lg text-center lg:text-left lg:text-2xl font-semibold lg:font-bold">
                    Demo
                  </h1>
                </div>
                {/* Body */}
                <div className="w-full">
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Name</span>
                    <span className="font-normal w-full border px-2">
                      {project.name}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Category</span>
                    <span className="font-normal w-full border px-2">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Status</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Start Date</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">End Date</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                  {/* Technologies */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Technologies
                    </span>
                    <div className="flex justify-center py-3 space-x-2 border">
                      {project.stack.map((logo, index) => (
                        <img
                          key={index}
                          src={logo}
                          className="h-8 w-8 p-[3px] bg-gray-200 rounded-full"
                          alt="stack-logo"
                          draggable="false"
                        />
                      ))}
                    </div>
                    <div className="flex flex-row text-md font-semibold">
                      <span className="p-1 w-full border">Core</span>
                      <span className="font-normal w-full border px-2 py-1">
                        PHP
                      </span>
                    </div>
                    <div className="flex flex-row text-md font-semibold">
                      <span className="flex p-1 w-full border">
                        <span className="self-center">Client-Side</span>
                      </span>
                      <span className="font-normal w-full border px-2 py-1">
                        HTML, CSS, JavaScript, ReefJS
                      </span>
                    </div>
                  </div>
                  {/* Team Project */}
                  <div className="flex flex-col text-md font-semibold">
                    <span className="p-1 text-center text-white w-full bg-indigo-800">
                      Team Project
                    </span>
                    <div className="flex flex-row text-md font-semibold">
                      <span className="px-1 w-full border">Project Leader</span>
                      <span className="font-normal w-full border px-2">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row text-md font-semibold">
                    <span className="px-1 w-full border">Project Leader</span>
                    <span className="font-normal w-full border px-2">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Project */}
          <div
            className={`${
              minMax() ? "hidden" : "flex"
            } flex-row justify-between items-center w-full h-full relative border`}
          >
            {/* Tombol Prev */}
            <div className="absolute left-[-10px] lg:left-0">
              <button
                className={`${
                  index() == 0 && "hidden"
                } text-2xl text-slate-600 hover:text-slate-800 font-bold px-4 py-2`}
                onclick={() => {
                  setIndex((prev) => (prev > 0 ? --prev : 0));
                  console.log("prev", index());
                  console.log("prev", docs[index()]);
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M4.431 12.822l13 9A1 1 0 0019 21V3a1 1 0 00-1.569-.823l-13 9a1.003 1.003 0 000 1.645z" />
                </svg>
              </button>
            </div>

            {/* Gambar */}
            <div className="w-full h-full">
              <img
                src={docs[index()].image}
                className=" w-85 h-full lg:w-full lg:h-full object-cover border"
                alt={docs[index()].label}
                draggable="false"
              />
            </div>

            {/* Tombol Next */}
            <div className="absolute right-[-10px]  lg:right-0">
              <button
                className={`${
                  index() == docs.length - 1 && "hidden"
                } text-2xl text-slate-600 hover:text-slate-800 font-bold px-4 py-2`}
                onclick={() => {
                  setIndex((prev) => (prev < docs.length - 1 ? ++prev : prev));
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="rotate-180"
                >
                  <path d="M4.431 12.822l13 9A1 1 0 0019 21V3a1 1 0 00-1.569-.823l-13 9a1.003 1.003 0 000 1.645z" />
                </svg>
              </button>
            </div>

            {/* Min Mobile */}
            <div className="block lg:hidden absolute right-[-10px] bottom-0  lg:right-0">
              <button
                className="text-2xl text-slate-600 hover:text-slate-800 font-bold px-4 py-2"
                onclick={() => {
                  setMinMax((prev) => !prev);
                }}
              >
                {!minMax() && (
                  // Min
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M15 19v-2a2 2 0 012-2h2M15 5v2a2 2 0 002 2h2M5 15h2a2 2 0 012 2v2M5 9h2a2 2 0 002-2V5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="self-end lg:self-start absolute top-[-10px] right-[-10px] lg:top-[-14px] lg:right-[-28px]">
          <button
            className="px-2 py-[2px] bg-red-500 font-semibold text-white rounded-full hover:bg-red-600 transition hover:font-extrabold "
            onClick={onClose}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
