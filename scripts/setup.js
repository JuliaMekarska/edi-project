let language_array = [];

var apiUrl = 'https://my.api.mockaroo.com/users.json?key=d7b24450';
fetch(apiUrl).then(response => {
    return response.json();
}).then(jsondata => {
    console.log(jsondata)
    jsondata.map(item =>{
        language_array.push(item.language)
    })
    console.log(language_array,999)

    let unique_languages = []
    let lang_count = []

    language_array.map(item1 =>{
        if (!unique_languages.includes(item1)){
            unique_languages.push(item1)

            count = 0
            language_array.map(item2 => {
                
                if (item1 == item2){
                    count += 1
                }
            })
            lang_count.push(count)
        }

    })


    console.log(unique_languages,998) //działa
    console.log(lang_count,998)


}).catch(err => {
  // Do something for an error here
});





const data = {labels: unique_languages,
datasets: [{
label: '# of Votes',
data: [lang_count],
backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
],
borderColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
],
borderWidth: 2
}]}


