function area(){

    function circle(x){
        return 3.14*x*x
    }

    function rectangle(x,b){
        return x*b
    }

    function square(x){
        return 4*x
    }

    return {circle,rectangle,square}

}

let Area = new area()
console.log(Area.square(5))