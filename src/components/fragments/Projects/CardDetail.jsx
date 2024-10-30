const CardDetail = ({ project, onClose }) => {
  console.log(project);
  return (
    <div className="absolute w-full h-full flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="flex flex-col-reverse lg:flex-row justify-between bg-white rounded-lg p-2 shadow-lg h-full w-full lg:h-[80%] lg:w-[90%] gap-1 relative">
        {/* Container Description & Image */}
        <div className="flex flex-col-reverse lg:flex-row w-full h-full gap-2 border">
          {/* Description */}
          <div className="w-full h-full border">
            {/* Header */}
            <div className="px-2 py-1 bg-black">
              <h1 className="text-white text-2xl font-bold">Project Details</h1>
            </div>
            {/* Body */}
            <div className="px-2 my-1">
              {/* Logo Project */}
              {/* <div className="w-full border">
                <img
                  src="https://placehold.co/100x100"
                  className="h-full"
                  alt="project-image"
                  draggable="false"
                />
              </div> */}
              <h2 className="text-lg font-semibold">
                Project Name: {project.name}
              </h2>
              <h3 className="text-md text-gray-600">
                Status: {project.status}
              </h3>
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
              <button className="text-2xl font-bold px-4 py-2">
                {'<'}
              </button>
            </div>

            {/* Gambar */}
            <div className="w-full h-full">
              <img
                src="https://placehold.co/100x100"
                className=" w-85 h-70 lg:w-full lg:h-full object-cover border"
                alt="project-image"
                draggable="false"
              />
            </div>

            {/* Tombol Next */}
            <div className="absolute right-[-10px]  lg:right-0">
              <button className="text-2xl font-bold px-4 py-2">
                {'>'}
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
