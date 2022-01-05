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