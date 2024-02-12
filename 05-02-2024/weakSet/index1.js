function wks(){

let w = new WeakSet()
let l = []

function add(obj){
    w.add(obj)
    l.push(obj)

}

function show(){

    for(let i of l){
        if(w.has(i)){
            console.log(i)
        }
    }

}

return {
    add,show
}


}

let ws = new wks()

let obj1 = {}
let obj2 = {}
let obj3 = {}

ws.add(obj1)
ws.add(obj2)
ws.add(obj3)
ws.show()