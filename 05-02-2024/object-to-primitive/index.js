let obj = {
    valueOf:function(){
        return(100)
    },
    toString:function(){
        return("This is")
    }
}

let objectToString = String(obj)+" string"
let objectToNumber = obj+50

console.log(objectToString)
console.log(objectToNumber)