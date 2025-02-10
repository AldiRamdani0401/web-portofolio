const HEF_Format_Projects = (projects, url, rules) => {
  const RULES = rules;
  return projects.map((project) => ({
    ...project,
    list_projects: project.list_projects.map((listProjectItem) => ({
      ...listProjectItem,
      cover: RULES[listProjectItem.cover]
        ? url + RULES[listProjectItem.cover]
        : listProjectItem.cover,
      logo: RULES[listProjectItem.logo]
        ? url + RULES[listProjectItem.logo]
        : listProjectItem.logo,
    })),
  }));
};

export default HEF_Format_Projects;

// VERSION 1
// const HEF_Format_Projects = (projects, url, rules) => {
//   const RULES = rules;
//   console.log(rules);
//   return projects.map((project) => ({
//     ...project,
//     list_projects: project.list_projects.map((listProjectItem) => ({
//       ...listProjectItem,
//       cover: RULES[listProjectItem.cover]
//         ? url + RULES[listProjectItem.cover]
//         : listProjectItem.cover,
//       logo: RULES[listProjectItem.logo]
//         ? url + RULES[listProjectItem.logo]
//         : listProjectItem.logo,
//     })),
//   }));
// };

// export default HEF_Format_Projects;
