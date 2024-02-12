class MyError extends Error{

}

try{

    let a = 8797
    console.log(a.length())

}
catch(err){
    if(err instanceof TypeError){

        throw new MyError("This error caused by me!");
    }
}