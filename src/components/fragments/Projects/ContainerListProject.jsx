const ContainerListProject = (props) => {
  const { datas, onShowDetail } = props;

  return (
    <>
      {datas.map((project, i) => (
        <div
          key={`project-${project.id}`}
          id={`project-${project.id}`}
          className="project relative bg-blue-950 w-85 md:w-75 lg:w-fit h-fit rounded-lg shadow-lg lg:hover:shadow-black lg:hover:z-20 transition-transform transform lg:hover:scale-110 cursor-pointer snap-center"
          onClick={() => onShowDetail(project)}
        >
          <h1 className="absolute bg-blue-950 px-1 top-3 lg:top-0 right-0 rounded-none lg:rounded-tr-md select-none">
            {project.status}
          </h1>
          <div className="absolute flex flex-row justify-center gap-2 bg-slate-800 w-full py-2 bottom-11 select-none">
            {project.stack.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className="h-8 w-8 p-[3px] bg-white lg:h-6 lg:w-6 rounded-full"
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
    </>
  );
};

export default ContainerListProject;
