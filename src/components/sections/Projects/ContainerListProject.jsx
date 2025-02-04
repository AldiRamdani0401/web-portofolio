import Project from "./Project";

const ContainerListProject = (props) => {
  const { datas, onShowDetail } = props;

  return (
    <>
      {datas.map((project, i) => (
        <Project project={project} />
      ))}
    </>
  );
};

export default ContainerListProject;
