const HAF_Filtered_Projects = (
  { properties, datas },
  { signal, set_signal },
  callback
) => {
  const { core, type, backend } = properties?.filter || {};
  let filteredProjects = datas.flatMap((project) =>
    !core || project.core === core ? project.listProjects : []
  );

  if (signal.max !== filteredProjects.length) {
    set_signal((prev) => ({ ...prev, max: filteredProjects.length }));
  }

  if (signal.totalPage === 1) {
    set_signal((prev) => ({
      ...prev,
      totalPage: Math.ceil(filteredProjects.length / prev.limit),
    }));
  }

  if (type) {
    filteredProjects = filteredProjects.filter((p) => p.type === type);
  }

  if (backend) {
    filteredProjects = filteredProjects.filter((p) => p.backend === backend);
  }

  // Ascending
  filteredProjects.sort((a, b) => a.maintenance - b.maintenance);

  const values = filteredProjects.slice(signal.start, signal.end);

  callback(values);
};

export default HAF_Filtered_Projects;
