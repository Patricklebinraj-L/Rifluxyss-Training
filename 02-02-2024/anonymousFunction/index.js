let c=0
let interval = setInterval(function(){

    if(c==5){
        clearInterval(interval)
    }
    console.log("hii hello"+c)
    c+=1

},2000)