var a = null
var type = typeof a

switch(type){

    case('string'):{
        console.log("this is string")
        break
    }

    case('number'):{
        console.log("this is number")
        break
    }

    case('object'):{
        console.log("this is object")
        break
    }

    default:{
        console.log("this is one of the datatype")
    }

}