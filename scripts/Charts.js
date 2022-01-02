
async function loadData(){
    let language_array = [];
    let age_array = [];
    let city_array = [];
    let is_employed_array = [];
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
            is_employed_array.push(item.is_employed)
            education_array.push(item.education)
        })

        languages = sort(language_array) //sortowanie
        age = sortList(age_array)
        city = sort(city_array)
        is_employed = sort(is_employed_array)
        education = sort(education_array)

        let config = getData()

        const pieChartLang = new Chart(document.getElementById('pieChart').getContext('2d'),config.language)
        const pieChartCity = new Chart(document.getElementById('myChart').getContext('2d'),config.city)
        const lineChartAge = new Chart(document.getElementById('lineChart').getContext('2d'),config.age)
        const barChartEmployed = new Chart(document.getElementById('barChart').getContext('2d'),config.is_employed)
        const barChartEducation = new Chart(document.getElementById('barChart2').getContext('2d'),config.education)
    
    }).catch(err => {
        // Do something for an error here
    });
}

loadData()




