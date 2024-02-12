l = []
const a = function(){
    console.log("patrick")
}
const b = function(){
    console.log("lebin")
}
const c = function(){
    console.log("raj")
}
l.push(a)
l.push(b)
l.push(c)
console.log(l)
for(let i of l){
    i()
}