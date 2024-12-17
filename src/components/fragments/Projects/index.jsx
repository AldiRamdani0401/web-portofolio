import { languageMap } from "../../../store/language";
import ProjectsList from "./ProjectsList";

const Projects = () => {
  return (
    <section id="projects" className="h-fit w-full snap-center">
      <div className="bg-indigo-950 text-white">
        <h1 className="text-center font-bold text-4xl py-5">{languageMap().content[3]} 📱📐</h1>
      </div>
      <div
        className="h-dvh flex flex-row align-middle justify-start lg:flex-row lg:w-full gap-5 overflow-x-auto scrollbar-hide bg-zinc-950 scroll-smooth snap-x snap-mandatory"
      >
        <ProjectsList/>
      </div>
    </section>
  );
};

export default Projects;
