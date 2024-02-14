function add(a,b){

    return a+b

}

function addition(a,b,callback){

    let res = callback(a,b)
    console.log(res)
}

function math(x){

    x(100,400,add)

}

math(addition)
