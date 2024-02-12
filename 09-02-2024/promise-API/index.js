let db = new Map()

function addLink(key,value){
    db.set(key,value)
}

function retrieve(key){

    let isAvail = db.has(key)
    if(isAvail){

        new Promise(function(resolve,reject){

            let u = db.get(key)

            fetch("https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/link-example.json")
            .then(r => resolve(r.text()))


    
        })
        .then((res)=>{
            console.log(res)
        })
        
    }
    else{

        console.log("There is no data like that!")

    }

}

addLink("link","./text.txt")
retrieve("link")
console.log(db)
