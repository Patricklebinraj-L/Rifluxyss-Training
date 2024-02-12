function loader(){
    let  l =[]
    let c=1
    timer = setInterval(function(){

        if(c==4){
            console.log(l)
            clearInterval(timer)
        }
        l.push(c)
        c+=1

    },1000)
}


async function box(){

   await loader()

}

box()
