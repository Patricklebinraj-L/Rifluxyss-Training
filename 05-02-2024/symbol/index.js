// let sym = Symbol("hello")
// console.log(sym.description)

let obj = {}
let sym1 = Symbol("hi")
let sym2 = Symbol("how are you?")
obj[sym1] = "patrick"
obj[sym2] = "patrick"
let list = Object.getOwnPropertySymbols(obj)
for(let i of list){

    console.log(i.description+" "+obj[i])

}
