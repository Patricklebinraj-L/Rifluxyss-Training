
function* random(n){
    
    for(let i=0;i<n;i++){

        yield Math.random()*10
    }
   
}

let arr = random(5)
for(let e of arr){
    console.log(e)
}



