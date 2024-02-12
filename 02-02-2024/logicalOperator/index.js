var a = 10
var b = 10
if(a!=b){
    console.log("this is not equal")
}
else if(a==b){
    console.log("it is equal")
    if(typeof a == typeof b){
        console.log("Even those datatypes are same")
    }
    else{
        console.log("Equal but those datatypes are not same")

    }
}