/**
 * properties structure (props)
* filter : {
      "type": "",
      "core": "",
      "backend": ""
    }
* counter : {
    number: 1,
    set: function
  },
* projects : {
    state: {
        start: 0,
        end: 10,
        limit: 10,
        max: 0,
        count: 0,
        currentPage: 1,
        totalPage: 1,
    },
    setState: function
  }
 */

const HAF_Filtered_Projects = (
  { properties, datas },
  { signal, set_signal },
  callback
) => {
  // Filter properties
  const filter_core = properties.filter.core;
  const filter_type = properties.filter.type;
  const filter_backend = properties.filter.backend;

  // Counter (props)
  const counter_number = properties.counter.number;
  const counter_set = properties.counter.set;

  // Projects (props)
  const init_projects_state = properties.projects.state;

  // Signals (props)
  const signal_state = signal;
  const set_signal_state = set_signal;

  // Filter data
  let result_filtered_project = datas.flatMap((project) =>
    !filter_core || project.core === filter_core ? project.list_projects : []
  );

  // Filter berdasarkan type
  if (filter_type) {
    result_filtered_project = result_filtered_project.filter(
      (p) => p.type === filter_type
    );
  }

  // Filter berdasarkan backend
  if (filter_backend) {
    result_filtered_project = result_filtered_project.filter(
      (p) => p.backend === filter_backend
    );
  }

  // Urutkan ascending berdasarkan maintenance
  result_filtered_project.sort((a, b) => a.maintenance - b.maintenance);

  // Ambil data sesuai pagination
  const values = result_filtered_project.slice(
    signal_state.start,
    signal_state.end
  );

  // Perbarui nilai maksimum jika berbeda
  if (signal_state.max !== result_filtered_project.length) {
    set_signal_state((prev) => ({
      ...prev,
      max: result_filtered_project.length,
    }));
  }

  // Perbarui total halaman
  set_signal_state((prev) => ({
    ...prev,
    totalPage: Math.ceil(result_filtered_project.length / prev.limit),
  }));

  console.log("HANDLERS :", values);

  // Perbarui jumlah data yang sedang ditampilkan
  set_signal_state((prev) => ({ ...prev, count: values.length }));

  // Eksekusi callback dengan data hasil filter
  callback(values);
};

export default HAF_Filtered_Projects;
