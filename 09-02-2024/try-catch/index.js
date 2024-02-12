try{

    console.log("hello")

    function doSomething(){
        console.log("function is running")
    }
    doSomething()

}
catch(err){
    console.log(err.toString())
}
finally{
    console.log("this code is ended")
}