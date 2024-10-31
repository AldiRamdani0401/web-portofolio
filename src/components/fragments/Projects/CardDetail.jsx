import { createSignal } from "solid-js";

const docs = [
  {
    id: 1,
    image: 'https://placehold.co/100x100?text=Doc%201',
    label: 'documentation-images-1',
    note: 'dokumentasi project 1'
  },
  {
    id: 2,
    image: 'https://placehold.co/100x100?text=Doc%202',
    label: 'documentation-images-2',
    note: 'dokumentasi project 2'
  },
  {
    id: 3,
    image: 'https://placehold.co/100x100?text=Doc%203',
    label: 'documentation-images-3',
    note: 'dokumentasi project 3'
  },
]

const CardDetail = ({ project, onClose }) => {
  const [index, setIndex] = createSignal(0);
  // console.log(project);
  return (
    <div className="flex justify-center w-screen h-full bg-black bg-opacity-70 py-5 px-0 lg:py-5 lg:px-5 fixed">
      <div className="flex flex-col-reverse lg:flex-row justify-between bg-white rounded-lg p-2 shadow-lg h-[90%] w-[90%] lg:h-fit lg:w-[90%] gap-1 relative">
        {/* Container Project Detail & Image */}
        <div className="flex flex-col-reverse align-start lg:flex-row w-full h-full lg:h-full gap-2">
          {/* Container Project Detail */}
          <div className="w-full h-full overflow-hidden flex flex-col select-none">
              {/* Tab Buttons */}
              <div className="flex gap-1 h-10 lg:h-fit max-w-full overflow-auto scrollbar-hide">
                <a href="#overview" className="border border-blue-900 rounded-t-lg px-1 pt-1 text-sm lg:text-md text-nowrap text-blue-900 font-semibold hover:font-bold hover:bg-blue-900 hover:text-white ">Overview</a>
                <a href="#technology-stack" className="border border-blue-900 rounded-t-lg px-1 pt-1 text-sm lg:text-md text-nowrap text-blue-900 font-semibold hover:font-bold hover:bg-blue-900 hover:text-white ">Technology Stack</a>
                <a href="#features" className="border border-blue-900 rounded-t-lg px-1 pt-1 text-sm lg:text-md text-nowrap text-blue-900 font-semibold hover:font-bold hover:bg-blue-900 hover:text-white ">Features</a>
                <a href="#screenshots" className="border border-blue-900 rounded-t-lg px-1 pt-1 text-sm lg:text-md text-nowrap text-blue-900 font-semibold hover:font-bold hover:bg-blue-900 hover:text-white ">Screenshots</a>
                <a href="#demo" className="border border-blue-900 rounded-t-lg px-1 pt-1 text-sm lg:text-md text-nowrap text-blue-900 font-semibold hover:font-bold hover:bg-blue-900 hover:text-white ">Demo</a>
              </div>
              <div className="grid grid-flow-col auto-cols-max justify-start max-w-full max-h-full overflow-auto lg:w-full gap-2 lg:gap-3 snap-x scrollbar-hide scroll-smooth px-2">
                  {/* Sub Container : Overview */}
                  <div id="overview" className="w-[335px] max-h-full overflow-auto lg:w-[615px] snap-center">
                    {/* Header */}
                    <div className="p-1 w-full bg-indigo-900">
                      <h1 className="text-white text-lg text-center lg:text-left lg:text-2xl font-semibold lg:font-bold">Overview</h1>
                    </div>
                    {/* Body */}
                    <div className="w-full">
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Name</span>
                        <span className="font-normal w-full border px-2">{project.name}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Category</span>
                        <span className="font-normal w-full border px-2">{project.category}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Status</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Start Date</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">End Date</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      {/* Technologies */}
                      <div className="flex flex-col text-md font-semibold">
                        <span className="p-1 text-center text-white w-full bg-indigo-800">Technologies</span>
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
                          <span className="font-normal w-full border px-2 py-1">PHP</span>
                        </div>
                        <div className="flex flex-row text-md font-semibold">
                          <span className="flex p-1 w-full border">
                            <span className="self-center">Client-Side</span>
                          </span>
                          <span className="font-normal w-full border px-2 py-1">HTML, CSS, JavaScript, ReefJS</span>
                        </div>
                      </div>
                      {/* Team Project */}
                      <div className="flex flex-col text-md font-semibold">
                        <span className="p-1 text-center text-white w-full bg-indigo-800">Team Project</span>
                        <div className="flex flex-row text-md font-semibold">
                          <span className="px-1 w-full border">Project Leader</span>
                          <span className="font-normal w-full border px-2">{project.status}</span>
                        </div>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Leader</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  {/* Sub Container : Technology Stack */}
                  <div id="technology-stack" className="w-[335px] max-h-full overflow-auto lg:w-[615px] snap-center">
                    {/* Header */}
                    <div className="p-1 w-full bg-indigo-900">
                      <h1 className="text-white text-lg text-center lg:text-left lg:text-2xl font-semibold lg:font-bold">Technology Stack</h1>
                    </div>
                    {/* Body */}
                    <div className="w-full">
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Name</span>
                        <span className="font-normal w-full border px-2">{project.name}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Category</span>
                        <span className="font-normal w-full border px-2">{project.category}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Status</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Start Date</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">End Date</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      {/* Technologies */}
                      <div className="flex flex-col text-md font-semibold">
                        <span className="p-1 text-center text-white w-full bg-indigo-800">Technologies</span>
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
                          <span className="font-normal w-full border px-2 py-1">PHP</span>
                        </div>
                        <div className="flex flex-row text-md font-semibold">
                          <span className="flex p-1 w-full border">
                            <span className="self-center">Client-Side</span>
                          </span>
                          <span className="font-normal w-full border px-2 py-1">HTML, CSS, JavaScript, ReefJS</span>
                        </div>
                      </div>
                      {/* Team Project */}
                      <div className="flex flex-col text-md font-semibold">
                        <span className="p-1 text-center text-white w-full bg-indigo-800">Team Project</span>
                        <div className="flex flex-row text-md font-semibold">
                          <span className="px-1 w-full border">Project Leader</span>
                          <span className="font-normal w-full border px-2">{project.status}</span>
                        </div>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Leader</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  {/* Sub Container : Features */}
                  <div id="features" className="w-[335px] max-h-full overflow-auto lg:w-[615px] snap-center">
                    {/* Header */}
                    <div className="p-1 w-full bg-indigo-900">
                      <h1 className="text-white text-lg text-center lg:text-left lg:text-2xl font-semibold lg:font-bold">Features</h1>
                    </div>
                    {/* Body */}
                    <div className="w-full">
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Name</span>
                        <span className="font-normal w-full border px-2">{project.name}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Category</span>
                        <span className="font-normal w-full border px-2">{project.category}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Status</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Start Date</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">End Date</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      {/* Technologies */}
                      <div className="flex flex-col text-md font-semibold">
                        <span className="p-1 text-center text-white w-full bg-indigo-800">Technologies</span>
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
                          <span className="font-normal w-full border px-2 py-1">PHP</span>
                        </div>
                        <div className="flex flex-row text-md font-semibold">
                          <span className="flex p-1 w-full border">
                            <span className="self-center">Client-Side</span>
                          </span>
                          <span className="font-normal w-full border px-2 py-1">HTML, CSS, JavaScript, ReefJS</span>
                        </div>
                      </div>
                      {/* Team Project */}
                      <div className="flex flex-col text-md font-semibold">
                        <span className="p-1 text-center text-white w-full bg-indigo-800">Team Project</span>
                        <div className="flex flex-row text-md font-semibold">
                          <span className="px-1 w-full border">Project Leader</span>
                          <span className="font-normal w-full border px-2">{project.status}</span>
                        </div>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Leader</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  {/* Sub Container : Screenshots */}
                  <div id="screenshots" className="w-[335px] max-h-full overflow-auto lg:w-[615px] snap-center">
                    {/* Header */}
                    <div className="p-1 w-full bg-indigo-900">
                      <h1 className="text-white text-lg text-center lg:text-left lg:text-2xl font-semibold lg:font-bold">Screenshots</h1>
                    </div>
                    {/* Body */}
                    <div className="w-full">
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Name</span>
                        <span className="font-normal w-full border px-2">{project.name}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Category</span>
                        <span className="font-normal w-full border px-2">{project.category}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Status</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Start Date</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">End Date</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      {/* Technologies */}
                      <div className="flex flex-col text-md font-semibold">
                        <span className="p-1 text-center text-white w-full bg-indigo-800">Technologies</span>
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
                          <span className="font-normal w-full border px-2 py-1">PHP</span>
                        </div>
                        <div className="flex flex-row text-md font-semibold">
                          <span className="flex p-1 w-full border">
                            <span className="self-center">Client-Side</span>
                          </span>
                          <span className="font-normal w-full border px-2 py-1">HTML, CSS, JavaScript, ReefJS</span>
                        </div>
                      </div>
                      {/* Team Project */}
                      <div className="flex flex-col text-md font-semibold">
                        <span className="p-1 text-center text-white w-full bg-indigo-800">Team Project</span>
                        <div className="flex flex-row text-md font-semibold">
                          <span className="px-1 w-full border">Project Leader</span>
                          <span className="font-normal w-full border px-2">{project.status}</span>
                        </div>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Leader</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  {/* Sub Container : Demo */}
                  <div id="demo" className="w-[335px] max-h-full overflow-auto lg:w-[615px] snap-center">
                    {/* Header */}
                    <div className="p-1 w-full bg-indigo-900">
                      <h1 className="text-white text-lg text-center lg:text-left lg:text-2xl font-semibold lg:font-bold">Demo</h1>
                    </div>
                    {/* Body */}
                    <div className="w-full">
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Name</span>
                        <span className="font-normal w-full border px-2">{project.name}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Category</span>
                        <span className="font-normal w-full border px-2">{project.category}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Status</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Start Date</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">End Date</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                      {/* Technologies */}
                      <div className="flex flex-col text-md font-semibold">
                        <span className="p-1 text-center text-white w-full bg-indigo-800">Technologies</span>
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
                          <span className="font-normal w-full border px-2 py-1">PHP</span>
                        </div>
                        <div className="flex flex-row text-md font-semibold">
                          <span className="flex p-1 w-full border">
                            <span className="self-center">Client-Side</span>
                          </span>
                          <span className="font-normal w-full border px-2 py-1">HTML, CSS, JavaScript, ReefJS</span>
                        </div>
                      </div>
                      {/* Team Project */}
                      <div className="flex flex-col text-md font-semibold">
                        <span className="p-1 text-center text-white w-full bg-indigo-800">Team Project</span>
                        <div className="flex flex-row text-md font-semibold">
                          <span className="px-1 w-full border">Project Leader</span>
                          <span className="font-normal w-full border px-2">{project.status}</span>
                        </div>
                      </div>
                      <div className="flex flex-row text-md font-semibold">
                        <span className="px-1 w-full border">Project Leader</span>
                        <span className="font-normal w-full border px-2">{project.status}</span>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
          {/* Image Project */}
          <div className="flex flex-row justify-between items-center w-full h-full relative border">
            {/* Tombol Prev */}
            <div className="absolute left-[-10px] lg:left-0">
              <button className={`${index() == 0 && 'hidden'} text-2xl text-slate-600 hover:text-slate-800 font-bold px-4 py-2`}
              onclick={() => {
                setIndex((prev) => prev > 0 ? --prev : 0)
                console.log('prev', index())
                console.log('prev', docs[index()]);
              }}>
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
              <button className={`${index() == docs.length - 1 && 'hidden'} text-2xl text-slate-600 hover:text-slate-800 font-bold px-4 py-2`}
              onclick={() => {
                setIndex((prev) => prev < docs.length - 1 ? ++prev : prev)
                console.log('next', index());
                console.log('next', docs[index()]);
              }}>
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
