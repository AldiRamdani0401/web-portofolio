import { createSignal } from "solid-js";
import {
  logoJS,
  logoNodeJS,
  logoPHP,
  logoTypeScript,
} from "../../../assets/logos";
import { languageMap } from "../../../store/language";
import ProjectsList from "./ProjectsList";

const logos = [
  { name: "PHP", logo: logoPHP },
  { name: "JavaScript", logo: logoJS },
  { name: "NodeJS", logo: logoNodeJS },
  { name: "TypeScript", logo: logoTypeScript },
];

const Projects = () => {
  const [category, setCategory] = createSignal("PHP");
  return (
    <section
      id="projects"
      className="bg-gray-950 h-dvh w-full text-slate-200 snap-start snap-mandatory"
    >
      <h1 className="text-center font-bold text-4xl pt-10">
        {languageMap().content[3]}
      </h1>
      {/* Sub Container 1 */}
      <div className="flex flex-col lg:flex-row">
        {/* === Languages === */}
        <div className="flex justify-center py-2 items-center gap-2 w-full">
          <h1 className="text-xl font-medium">Languages :</h1>
          {logos.map((logo, i) => (
            <figure key={i}>
              <a href={`#container-${i}`}>
                <img
                  src={logo.logo}
                  className={`h-10 w-10 p-1 rounded-full bg-white ${
                    category() !== logo.name ? "opacity-50 grayscale" : ""
                  } cursor-pointer object-fill`}
                  draggable="false"
                  onclick={() => setCategory(logo.name)}
                />
              </a>
            </figure>
          ))}
        </div>
        {/* === end of Languages === */}
        {/* === Frameworks === */}
        <div className="hidden lg:flex justify-center py-2 items-center gap-2 w-full">
          <h1 className="text-xl font-medium">Frameworks :</h1>
          {logos.map((logo, i) => (
            <figure key={i}>
              <a href={`#container-${i}`}>
                <img
                  src={logo.logo}
                  className={`h-10 w-10 p-1 rounded-full bg-white ${
                    category() !== logo.name ? "opacity-50 grayscale" : ""
                  } cursor-pointer object-fill`}
                  draggable="false"
                  onclick={() => setCategory(logo.name)}
                />
              </a>
            </figure>
          ))}
        </div>
        {/* === end of Frameworks === */}
      </div>
      {/* Sub Container 2 */}
      <div className="h-[80%] flex flex-row align-middle justify-start lg:flex-row lg:w-full gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-x-hide">
        <ProjectsList />
      </div>
    </section>
  );
};

export default Projects;
