const area = (shape,x,y=1)=>{

    if(shape=="circle"){
        return(3.14*(x*x))

    }
    else if(shape == "rectangle"){

        return(x*y)

    }
    else{

        return("invalid shape")

    }


}

let circle = area("circle",50)
let rectange = area("rectangle",50,40)

console.log("Area of circle : "+circle)
console.log("Area of rectange :"+rectange)