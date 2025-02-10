import { createEffect, createSignal } from "solid-js";
import Project from "./Project";

const ContainerListProject = (props) => {
  const { datas } = props;
  return (
    <>
      {datas.map((project, i) => {
        if (i < 10) {
          return <Project key={i} project={project} />;
        }
        return null;
      })}
    </>
  );
};

export default ContainerListProject;
