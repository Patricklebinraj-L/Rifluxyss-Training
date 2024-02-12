function* generator(){
    while(true){
        yield Math.floor(Math.random()*100)
    }
}

let gen = generator();
let c = gen.next()
while(!c.done){

    if(c.value==0){
        break
    }
    console.log(c.value)
    c=gen.next()
}