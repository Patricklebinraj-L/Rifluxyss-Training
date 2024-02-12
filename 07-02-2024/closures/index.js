let a = 10
function global(){
    a+=1
}

global()
global()
console.log(a)

// even though the expression is inside the function , it can access the parent scope