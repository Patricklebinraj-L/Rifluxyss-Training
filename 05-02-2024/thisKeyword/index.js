function normal(){
    console.log(this)
}
var a = 10
const arrow = ()=>{
    a = 10
    console.log(this)
}

normal()
console.log("-------------------------")
arrow()

