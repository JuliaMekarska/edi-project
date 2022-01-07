async function loadData() {
  let language_array = [];
  let age_array = [];
  let city_array = [];
  let is_employed_array = [];
  let education_array = [];

  var apiUrl = "https://my.api.mockaroo.com/users.json?key=d7b24450"; //link do mockaroo
  return fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      console.log(jsondata);
      jsondata.map((item) => {
        language_array.push(item.language); //json => tablica (array)
        age_array.push(item.age);
        city_array.push(item.city);
        is_employed_array.push(item.is_employed);
        education_array.push(item.education);
      });

      languages = sort(language_array); //sortowanie, zwraca słownik np. languages.items i langages.count
      age = sortList(age_array);
      city = sort(city_array);
      is_employed = sort(is_employed_array);
      education = sort(education_array);

      let config = getData();

      toHtml(languages, "lang");
      toHtml(city, "city");
      toHtml(is_employed, "work");
      toHtml(education, "edu");
      toHtml2(age)

      for (var i = 1;i <=5;i++){
        document.getElementById(`loading${i}`).innerHTML = ""
      }

      const pieChartLang = new Chart(document.getElementById("language-chart").getContext("2d"),config.language);
      const pieChartCity = new Chart(document.getElementById("city-chart").getContext("2d"),config.city);
      const lineChartAge = new Chart(document.getElementById("age-chart").getContext("2d"),config.age);
      const barChartEmployed = new Chart(document.getElementById("work-chart").getContext("2d"),config.is_employed);
      const barChartEducation = new Chart(document.getElementById("education-chart").getContext("2d"),config.education);
    })
    .catch((err) => {
      // Do something for an error here
    });
}

loadData();
