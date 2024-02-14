let prom = new Promise(function(resolve,reject){
    let x = 10
    if(x>5){
        resolve("greater")
    }
    else{
        reject("lesser")
    }
})
.then(
    (v)=>console.log(v),
    (e)=>console.log(e)
)