
async function loadData(){
    let language_array = [];
    let age_array = [];
    let city_array = [];
    let job_array = [];
    let education_array = [];

    var apiUrl = 'https://my.api.mockaroo.com/users.json?key=d7b24450'; //link do mockaroo
    return fetch(apiUrl).then(response => {
        return response.json();
    }).then(jsondata => {
        console.log(jsondata)
        jsondata.map(item =>{
            language_array.push(item.language) //json => tablica (array)
            age_array.push(item.age)
            city_array.push(item.city)
            job_array.push(item.job)
            education_array.push(item.education)
        })

        languages = sort(language_array) //sortowanie
        age = sort(age_array)
        city = sort(city_array)
        job = sort(job_array)
        education = sort(education_array)

        let config = getData()

        const pieChartLang = new Chart(document.getElementById('pieChart').getContext('2d'),config.language)
        const pieChartCity = new Chart(document.getElementById('myChart').getContext('2d'),config.city)
        const lineChartAge = new Chart(document.getElementById('lineChart').getContext('2d'),config.age)
    
    }).catch(err => {
        // Do something for an error here
    });
}

loadData()




