let obj = {
    name:"patrick"
}
obj.me = obj

function makeClone(obj){
    let newObj = {}
    for(let i in obj){
        newObj[i] = obj[i]==obj?newObj:obj[i]
    }
    return newObj
}

let clone = makeClone(obj)
if(clone.me===clone){
    console.log(clone)
}