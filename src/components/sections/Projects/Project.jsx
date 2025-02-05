import { developmentGif } from "../../../assets/gif";

function toProject(link) {
  window.location.href = link;
}

const Project = (props) => {
  return (
    <div
      key={`project-${props.project.id}`}
      id={`project-${props.project.id}`}
      className={
        "relative " +
        (parseInt(props.project?.maintenance) === 1
          ? ""
          : "hover:shadow-black hover:z-20 transition-transform transform hover:scale-105 lg:hover:scale-110 cursor-pointer ") +
        "project-item bg-blue-950 w-85 md:w-75 lg:w-56 h-56 rounded-lg shadow-lg snap-center animate-fadeIn"
      }
      {...(parseInt(props.project?.maintenance) !== 1
        ? { onClick: () => toProject(props.project?.link) }
        : {})}
    >
      {parseInt(props.project?.maintenance) === 1 && (
        // === Maintenance (MUTED) === //
        <div className="absolute h-full w-full z-50">
          <div className="h-full w-full bg-black opacity-40 z-50"></div>
          <div className="absolute flex flex-row items-center py-1 justify-center gap-2 top-[40%] w-full text-center bg-yellow-500 ">
            <img src={developmentGif} className="h-10 w-10 rounded-full" alt="maintenance"/>
          <h1 className="text-slate-700 font-semibold">
            Maintenance
          </h1>
          </div>
        </div>
      )}
      {/* === Container 1 : Project Type & Status === */}
      <div className="absolute flex flex-row justify-between text-base xl:text-sm w-full px-2 top-3 lg:top-2">
        {/* === Project Type === */}
        <h1
          className={`${
            (props.project.type === "Web" && "bg-blue-700") ||
            (props.project.type === "Mobile" && "bg-orange-600") ||
            (props.project.type === "Server" && "bg-green-800") ||
            (props.project.type === "Hybrid" && "bg-purple-800")
          } px-1 rounded-none lg:rounded-sm select-none`}
        >
          {props.project.type}
        </h1>
        {/* === Project Status === */}
        <h1
          className={`${
            (props.project.status === "Completed" && "bg-green-600") ||
            (props.project.status === "On Progress" && "bg-yellow-600") ||
            (props.project.status === "Server" && "bg-green-800") ||
            (props.project.status === "Hybrid" && "bg-purple-800")
          } px-1 rounded-none lg:rounded-sm select-none`}
        >
          {props.project.status}
        </h1>
      </div>
      {/* === end of Container 1 : Project Type & Status === */}
      {/* === Container 2 : Active === */}
      <div className="absolute flex flex-row justify-between text-base xl:text-sm w-full px-2 top-3 lg:top-10">
        {/* === Project Type === */}
        <h1
          className={`${
            parseInt(props.project?.maintenance) === 1
              ? "bg-slate-700"
              : "bg-emerald-700"
          } text-xs font-light px-1 rounded-none lg:rounded-sm select-none`}
        >
          {parseInt(props.project?.maintenance) !== 1 && "Active"}
        </h1>
      </div>
      {/* === end of Container 2 : Active === */}
      {/* === Project === */}
      <div className="absolute flex flex-row justify-center gap-2 bg-slate-800 w-full py-2 bottom-[-35%] md:bottom-[-25%] lg:bottom-2 select-none">
        <img
          src={props.project.logo}
          className="object-cover h-8 w-8 p-[1px] bg-white lg:h-6 lg:w-6 rounded-full"
          alt="stack-logo"
          draggable="false"
        />
        {props.project.name}
      </div>
      {/* Project Cover */}
      <img
        src="https://placehold.co/200x200"
        className="object-cover h-fit w-full rounded-lg"
        alt="project-image"
        draggable="false"
      />
    </div>
  );
};

export default Project;
