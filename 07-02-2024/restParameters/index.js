function restParameters(...args){
    let count=0
    for(let i of args){
        count+=i
    }
    return(count)
}

console.log(restParameters(40,33,89))

// spread syntax


let list = [1,2,6,345,787,23]
let obj = {name:"patrick",
            age:22,
            l:[1,2,4]        
}

function spread(obj){


        obj[l] = [...l,3]
        console.log(obj)

    


}
spread(obj)