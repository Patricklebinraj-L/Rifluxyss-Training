let a = 10
let b = 20
let l = [1,2,3]

function passbyvalue(a,b,l){

    a=30
    b=40
    l = [10,20,30]
    console.log(a,b,l)

}

console.log(a,b,l)

passbyvalue(a,b,l)

console.log(a,b,l)