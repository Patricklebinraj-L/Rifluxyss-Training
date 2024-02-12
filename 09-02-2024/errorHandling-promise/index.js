class PrimeError extends Error{

}

function isPrime(x){
    let c=0
    for(let i=1;i<x;i++){
        if(x%i==0){
            c+=1
        }

    }
    return c==1
}

let prom = new Promise(function(resolve,reject){
    let x = 29
    if(isPrime(x)){
        resolve("Yes, It is prime")
    }
    else{
        reject(new PrimeError("This is Prime Error"))
    }
})
.then((e)=>{
    console.log(e)
})
.catch((e)=>{
    console.log(e.toString())
})