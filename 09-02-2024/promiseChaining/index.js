let prom = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(1)
    },1000)
})
.then((x)=>{
    console.log(x)
    return(x+1)
})
.then((x)=>{
    console.log(x)
    return(x+1)
})
.then((x)=>{
    console.log(x)
    return(x+1)
})