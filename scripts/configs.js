function getData(){
    //============================== JĘZYKI ===========================
    const language_data = {labels: languages.items,
        datasets: [{
        label: '# of Votes',
        data: languages.count,
        backgroundColor: [
           '#7f4f24',
           '#936639',
           '#a68a64',
           '#c2c5aa',
           '#a4ac86',
           '#656d4a',
           '#414833'


        ],
        borderColor: [
            '582f0e',
            '#7f4f24',
            '#936639',
            '#a68a64',
            '#656d4a',
            '#414833',
            '#333d29'

            
        ],
        borderWidth: 2
        }]
    }
    
    const lang_config = {
        type: 'pie',
        data: language_data,
        options: {
            scales: {
            }
        }
    }
//================================================================================
// ============================== MIASTA =======================================
const city_data = {labels: city.items,
    datasets: [{
    label: '# of Votes',
    data: city.count,
    backgroundColor: [
        '#9b9b7a',
        '#baa587',
        '#d9ae94',
        '#f1dca7',
        '#ffcb69',
        '#e8ac65',
        '#d08c60',
        '#b58463',
        '#997b66'
    ],
    borderColor: [
        '#5e503f',
        '#9b9b7a',
        '#baa587',
        '#d9ae94',
        '#e8ac65',
        '#d08c60',
        '#b58463',
        '#774936'
        
    ],
    borderWidth: 2
    }]
}

const city_config = {
    type: 'pie',
    data: city_data,
    options: {
        scales: {
        }
    }
}

//=======================================================================
//============================ WIEK =====================================

const age_data = {labels: age.items,
    datasets: [{
    label: 'Occurrences',
    data: age.count,
    backgroundColor: [
        '#ff5400',
        '#7400b8',
        '#00b4d8',
        '#ef476f',
        '#caffbf',
        '#d4a276',
        '#ffd60a'

    ],
    borderColor: [
        '#03045e',
    ],
    borderWidth: 2
    }]
}

const age_config = {
    type: 'line',
    data: age_data,
    options: {
        scales: {
        }
    }
}

//=====================================================================
//=============================== Zatrudnienie =========================


const employment_data = {labels: is_employed.items,
    datasets: [{
    label: 'Occurrences',
    data: is_employed.count,
    backgroundColor: [
        '#90a955',
        '#31572c'
    ],
    borderColor: [
        '#4f772d',
        '#132a13'
    ],
    borderWidth: 2
    }]
}

const employment_config = {
    type: 'bar',
    data: employment_data,
    options: {
        scales: {
        }
    }
}


//=====================================================================
//=============================== Edukacja =========================


const education_data = {labels: education.items,
    datasets: [{
    label: 'Wykształcenie',
    data: education.count,
    backgroundColor: [
        '#d5896f',
        '#dab785',
        '#70a288',
        '#04395e'
    ],
    borderColor: [
        '#f15152',
        '#edb183',
        '#566e3d',
        '#031d44'
    ],
    borderWidth: 2
    }]
}

const education_config = {
    type: 'bar',
    data: education_data,
    options: {
        scales: {
        }
    }
}




    return {"language":lang_config,"city":city_config,"age":age_config,"is_employed":employment_config,"education":education_config}
}
