function sort(language_array){
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
    return {"items": unique_languages,"count":lang_count}
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