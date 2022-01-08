function getData() {
  //============================== JĘZYKI ===========================
  const language_data = {
    labels: languages.items,
    datasets: [
      {
        label: "Języki",
        data: languages.count,
        backgroundColor: [
          "#FFD878",
          "#FFB368",
          "#EB7360",
          "#FF8A91",
          "#FFD3AA",
          "#FF8422",
          "#FFB5B9",
        ],
        borderColor: [
          "#FFC43C",
          "#FF9A4A",
          "#FF6E64",
          "#FF5E74",
          "#FFB77A",
          "#FF6B00",
          "#FF8C90",
        ],
        borderWidth: 2,
      },
    ],
  };

  const lang_config = {
    type: "pie",
    data: language_data,

    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {},
    },
  };
  //================================================================================
  // ============================== MIASTA =======================================
  const city_data = {
    labels: city.items,
    datasets: [
      {
        label: "Miasta",
        data: city.count,
        backgroundColor: [
          "#C1E7FD",
          "#1D85F5",
          "#515AE0",
          "#72BBFF",
          "#7B94C7",
          "#73C1CC",
          "#2C4885",
          "#4978E0",
          "#CFD9FA",
        ],
        borderColor: [
          "#A5DBFD",
          "#007AF5",
          "#414AE0",
          "#54A1FF",
          "#6D88C7",
          "#50C4CC",
          "#1E3D85",
          "#2D60E0",
          "#B5C7F8",
        ],
        borderWidth: 2,
      },
    ],
  };

  const city_config = {
    type: "pie",
    data: city_data,

    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {},
    },
  };

  //=======================================================================
  //============================ WIEK =====================================

  const age_data = {
    labels: age.items,
    datasets: [
      {
        label: "Liczba osób w tym wieku",
        data: age.count,
        backgroundColor: [
          "#ff5400",
          "#7400b8",
          "#00b4d8",
          "#ef476f",
          "#caffbf",
          "#d4a276",
          "#ffd60a",
        ],
        borderColor: ["#2B4480"],
        borderWidth: 2,
      },
    ],
  };

  const age_config = {
    type: "line",
    data: age_data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {},
    },
  };

  //=====================================================================
  //=============================== Zatrudnienie =========================

  const employment_data = {
    labels: is_employed.items,
    datasets: [
      {
        label: "Zatrudnienie",
        data: is_employed.count,
        backgroundColor: ["#8EC7E0", "#FF7C72"],
        borderColor: ["#74BCE0", "#FF584C"],
        borderWidth: 2,
      },
    ],
  };

  const employment_config = {
    type: "bar",
    data: employment_data,

    options: {
      responsive: true,
      maintainAspectRatio: false,
      maxBarThickness: 250,
      scales: {},
    },
  };

  //=====================================================================
  //=============================== Edukacja =========================

  const education_data = {
    labels: education.items,
    datasets: [
      {
        label: "Wykształcenie",
        data: education.count,
        backgroundColor: ["#FF9D87", "#F5E38F", "#78E076", "#80DDFF"],
        borderColor: ["#FF7B5D", "#F5D960", "#54E051", "#67D2FF"],
        borderWidth: 2,
      },
    ],
  };

  const education_config = {
    type: "bar",
    data: education_data,

    options: {
      responsive: true,
      maintainAspectRatio: false,
      maxBarThickness: 250,
      scales: {},
    },
  };

  return {
    language: lang_config,
    city: city_config,
    age: age_config,
    is_employed: employment_config,
    education: education_config,
  };
}
