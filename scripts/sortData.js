function sort(array){
    let unique_items = []
    let item_count = []
    
    //tworzenie tablicy unique_items z unikalnymi "itemami" oraz liczbe ich wystąpień  w tablicy item_count
    array.map(item1 =>{
        if (!unique_items.includes(item1)){
            unique_items.push(item1)

            count = 0
            array.map(item2 => {
                
                if (item1 == item2){
                    count += 1
                }
            })
            item_count.push(count)
        }

    })

    var next = true;
    //sortowanie bąbelkowe
    while(next){
        var skip = true;
        for (var i = 0; i < item_count.length; i++){
            if (item_count[i] < item_count[i+1]){
                temp = item_count[i]
                item_count[i] = item_count[i+1]
                item_count[i+1] = temp

                temp = unique_items[i]
                unique_items[i] = unique_items[i+1]
                unique_items[i+1] = temp
                skip = false;
            }
        }

        if (skip){
            next = false;
        }

    }
    return {"items": unique_items,"count":item_count}
}

function sortList(array){
    let unique_items = []
    let item_count = []

    array.map(item1 =>{
        if (!unique_items.includes(item1)){
            unique_items.push(item1)

            count = 0
            array.map(item2 => {
                
                if (item1 == item2){
                    count += 1
                }
            })
            item_count.push(count)
        }

    })

    var next = true;

    while(next){
        var skip = true;
        for (var i = 0; i < item_count.length; i++){
            if (unique_items[i] > unique_items[i+1]){
                temp = unique_items[i]
                unique_items[i] = unique_items[i+1]
                unique_items[i+1] = temp

                temp = item_count[i]
                item_count[i] = item_count[i+1]
                item_count[i+1] = temp
                skip = false;
            }
        }

        if (skip){
            next = false;
        }

    }
    console.log()
    return {"items": unique_items,"count":item_count}
}