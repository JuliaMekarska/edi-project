function toHtml(data,name_id){
    item_names = data.items
    item_count = data.count

    let map_count = 1
    item_names.map(item =>{
        document.getElementById(`${name_id}-name-${map_count}`).innerHTML = item
        map_count += 1
    })

    map_count = 1
    item_count.map(item =>{
        document.getElementById(`${name_id}-val-${map_count}`).innerHTML = item
        map_count += 1
    })
}

function toHtml2(data){
    var table = "<div class='age-grid'>"
    console.log(data)

    const count_sum = data.count.reduce((a, b) => a + b, 0);
    let age_sum = 0

    let index = 0

    data.items.map(item => {
        age_sum += (item * data.count[index])
        table += `<div><span class="table-item">${item} lat</span> - <span class="table-count">${data.count[index]} osób</span></div>`;
        index += 1
    })
    table += `<div><span class="table-item">Średnia</span> : <span class="table-count">${age_sum/count_sum}</span></div>`
    table += "</div>"

    var ageTable = document.getElementById("age-table")
    ageTable.onclick = () => {
        ageTable.innerHTML = table
    }
}