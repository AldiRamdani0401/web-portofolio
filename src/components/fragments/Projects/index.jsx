import ProjectsList from "./ProjectsList";

const Projects = () => {
  return (
    <section id="projects" className="w-full snap-center">
      <div className="bg-indigo-950 text-white">
        <h1 className="text-center font-bold text-4xl py-5">Projects 📱📐</h1>
      </div>
      <div
        className="flex flex-row align-middle lg:flex-row lg:w-full gap-5 overflow-x-auto scrollbar-hide bg-zinc-950 scroll-smooth snap-x snap-mandatory"
      >
        <ProjectsList/>
      </div>
    </section>
  );
};

export default Projects;
