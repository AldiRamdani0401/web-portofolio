const ContainerListProject = (props) => {
  const { datas, onShowDetail } = props;

  return (
    <>
      {datas.map((project, i) => (
        <div
          key={`project-${project.id}`}
          id={`project-${project.id}`}
          className="relative bg-blue-950 w-85 md:w-75 lg:w-56 h-56 rounded-lg shadow-lg hover:shadow-black hover:z-20 transition-transform transform hover:scale-110 cursor-pointer snap-center"
          onClick={() => onShowDetail(project)}
        >
          <h1 className="absolute bg-blue-950 px-1 top-3 lg:top-1 right-1 rounded-none lg:rounded-md select-none">
            {project.status}
          </h1>
          {/* Tech Logos */}
          {/* <div className="absolute flex flex-row justify-center gap-2 bg-slate-800 w-full py-2 bottom-2 select-none">
            {project.stack.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className="object-cover h-8 w-8 p-[3px] bg-white lg:h-6 lg:w-6 rounded-full"
                alt="stack-logo"
                draggable="false"
              />
            ))}
          </div> */}
          {/* Project */}
          <div className="absolute flex flex-row justify-center gap-2 bg-slate-800 w-full py-2 bottom-[-35%] md:bottom-[-25%] lg:bottom-2 select-none">
            {project.name}
          </div>
          {/* Project Cover */}
          <img
            src="https://placehold.co/200x200"
            className="object-cover h-fit w-full rounded-lg"
            alt="project-image"
            draggable="false"
          />
        </div>
      ))}
    </>
  );
};

export default ContainerListProject;
