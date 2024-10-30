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
    <div className="absolute w-full h-full flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="flex flex-col-reverse lg:flex-row justify-between bg-white rounded-lg p-2 shadow-lg h-full w-full lg:h-[80%] lg:w-[90%] gap-1 relative">
        {/* Container Description & Image */}
        <div className="flex flex-col-reverse lg:flex-row w-full h-full gap-2">
          {/* Description */}
          <div className="w-full h-full">
            {/* Header */}
            <div className="p-1 w-full bg-indigo-900">
              <h1 className="text-white text-2xl font-bold">Project Details</h1>
            </div>
            {/* Body */}
            <div className="">
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
              {/* <h3 className="text-md text-gray-600">
                Status: {project.status}
              </h3> */}
              <div className="mt-4">
                <h4 className="font-semibold">Teknologi:</h4>
                <div className="flex space-x-2">
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
                className=" w-85 h-70 lg:w-full lg:h-full object-cover border"
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
        <div className="self-end lg:self-start absolute top-[-10px] right-[-10px] lg:top-[-25px] lg:right-[-25px]">
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
