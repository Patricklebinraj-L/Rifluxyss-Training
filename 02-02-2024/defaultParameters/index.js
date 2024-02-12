function defaultParameters(a=10,b=20,c=30){
    return(a+b+c)
}

let a = defaultParameters(100,200,300)

let b = defaultParameters()

console.log(a)
console.log(b)

