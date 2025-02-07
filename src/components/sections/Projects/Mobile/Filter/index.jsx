import { createSignal } from "solid-js";

const MobileFilterProject = () => {
  const [openFilter, setOpenFilter] = createSignal(false);

  return (
    <>
      <button
        type="button"
        className="ml-2 mb-2 px-2 bg-indigo-700 hover:bg-indigo-900 rounded-md"
        onClick={() => setOpenFilter((prev) => !prev)}
      >
        {openFilter() ? "close filter" : "open filter"}
      </button>
      <div
        className={`${
          openFilter() ? "flex" : "hidden"
        } flex-col lg:flex-row justify-center xl:justify-between xl:w-full gap-0 xl:gap-5 py-1 xl:py-2 lg:px-20 xl:px-10 bg-slate-950`}
      >
        {/* === PROJECT TYPE === */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-normal gap-0 xl:gap-2 w-full lg:w-1/2 xl:w-full">
          {/* Label */}
          <h1 className="flex self-center text-base lg:self-start xl:[&&]:justify-start px-10 lg:p-0 xl:p-0 font-medium h-fit xl:w-fit lg:h-full xl:h-fit mt-0 xl:mt-2 text-nowrap">
            Types :
          </h1>
          {/* Content */}
          <div className="flex flex-wrap justify-center mt-1 xl:mt-2 gap-2 lg:gap-1 lg:justify-normal xl:items-center w-full xl:w-fit h-fit px-5 lg:p-0">
            {/* === Web === */}
            <button
              type="button"
              className={`h-fit w-fit px-2 text-sm xl:text-base ${
                type() === "Web"
                  ? "bg-indigo-800 hover:bg-indigo-500"
                  : "hover:font-medium hover:text-slate-200 xl:hover:text-indigo-300"
              } rounded-md`}
              onclick={() => {
                setType((prev) => (prev === "Web" ? "" : "Web"));
                setCount(1);
              }}
            >
              Web
            </button>
            {/* === Mobile === */}
            <button
              type="button"
              className={`h-fit w-fit px-2 text-sm xl:text-base ${
                type() === "Mobile"
                  ? "bg-indigo-800 hover:bg-indigo-500"
                  : "hover:font-medium hover:text-slate-200 xl:hover:text-indigo-300"
              } rounded-md`}
              onclick={() => {
                setType((prev) => (prev === "Mobile" ? "" : "Mobile"));
                setCount(1);
              }}
            >
              Mobile
            </button>
            {/* === Hybrid === */}
            <button
              type="button"
              className={`h-fit w-fit px-2 text-sm xl:text-base ${
                type() === "Hybrid"
                  ? "bg-indigo-800 hover:bg-indigo-500"
                  : "hover:font-medium hover:text-slate-200 xl:hover:text-indigo-300"
              } rounded-md`}
              onclick={() => {
                setType((prev) => (prev === "Hybrid" ? "" : "Hybrid"));
                setCount(1);
              }}
            >
              Hybrid
            </button>
            {/* === Server === */}
            <button
              type="button"
              className={`h-fit w-fit px-2 text-sm xl:text-base ${
                type() === "Server"
                  ? "bg-indigo-800 hover:bg-indigo-500"
                  : "hover:font-medium hover:text-slate-200 xl:hover:text-indigo-300"
              } rounded-md`}
              onclick={() => {
                setType((prev) => (prev === "Server" ? "" : "Server"));
                setCount(1);
              }}
            >
              Server
            </button>
          </div>
        </div>
        {/* === end of PROJECT TYPE === */}
        {/* === LANGUAGES === */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-normal xl:justify-center gap-2 w-full lg:w-1/2 xl:w-full">
          <h1 className="flex text-base self-center lg:self-start xl:[&&]:justify-end px-10 lg:p-0 xl:p-0 font-medium h-fit xl:w-fit lg:h-full xl:h-fit mt-2 text-nowrap">
            Languages :
          </h1>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-1 lg:justify-normal w-full xl:w-[50%] px-10 lg:p-0">
            {labels.map((label, i) => (
              <figure key={i}>
                <button
                  type="button"
                  onClick={() => {
                    setLanguage(label.name === language() ? "" : label.name);
                    setBackend("");
                    setType("");
                    setCount(1);
                  }}
                >
                  <img
                    src={label.logo}
                    className={`h-8 w-8 lg:h-10 lg:w-10 p-[1px] xl:p-[2px] rounded-full bg-white ${
                      language() !== label.name ? "opacity-50 grayscale" : ""
                    } cursor-pointer object-fill`}
                    draggable="false"
                  />
                </button>
              </figure>
            ))}
          </div>
        </div>
        {/* === end of LANGUAGES === */}
        {/* === BACKEND === */}
        <div className="flex flex-col justify-center gap-2 w-full text-nowrap">
          <h1 className="flex self-center text-base lg:p-0 font-medium mt-2 h-fit w-fit lg:h-full">
            Backend :
          </h1>
          <div className="flex flex-wrap justify-center gap-1 lg:justify-normal w-full">
            {
              labels.find((label) => label.name === language())?.backend
                .length > 0
                ? labels
                    .find((label) => label.name === language())
                    ?.backend.map((backendItem, i) => (
                      <figure key={i}>
                        <button
                          type="button"
                          onClick={() => {
                            setBackend(backendItem.name);
                          }}
                        >
                          <img
                            src={backendItem.logo}
                            className={`h-10 w-10 p-1 rounded-full bg-white ${
                              backend() != backendItem.name
                                ? "opacity-50 grayscale"
                                : ""
                            } cursor-pointer object-fill`}
                            draggable="false"
                          />
                        </button>
                      </figure>
                    ))
                : "" // Placeholder jika tidak ada framework
            }
          </div>
        </div>
        {/* === end of BACKEND === */}
      </div>
    </>
  );
};

export default MobileFilterProject;
