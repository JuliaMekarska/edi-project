let language_array = [];
let lang_count = [1,3]
//let unique_languages = ["PL","EN"]

async function checkLanguages(){
    var apiUrl = 'https://my.api.mockaroo.com/users.json?key=cb21e350';
    return fetch(apiUrl).then(response => {
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
    
    
        console.log(unique_languages,998)
        console.log(lang_count,999)

        var next = true;

        while(next){
            var skip = true;
            for (var i = 0; i < lang_count.length; i++){
                if (lang_count[i] < lang_count[i+1]){
                    temp = lang_count[i]
                    lang_count[i] = lang_count[i+1]
                    lang_count[i+1] = temp

                    temp = unique_languages[i]
                    unique_languages[i] = unique_languages[i+1]
                    unique_languages[i+1] = temp
                    skip = false;
                }
            }

            if (skip){
                next = false;
            }

        }

        console.log(lang_count,998)
        console.log(unique_languages,998)

        
        const data = {labels: unique_languages,
            datasets: [{
            label: '# of Votes',
            data: lang_count,
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
            }]
        }

        const config3 = {
            type: 'pie',
            data: data,
            options: {
                scales: {
                }
            }
        }

        const pieChart = new Chart(document.getElementById('pieChart').getContext('2d'),config3)

        return pieChart
    
    }).catch(err => {
        // Do something for an error here
    });
}

const pieChart = checkLanguages()




