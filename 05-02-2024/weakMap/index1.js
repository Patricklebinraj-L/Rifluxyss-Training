
function weakmap(){

    let wm = new WeakMap()
    let l = []

    function add(key,val){

        wm.set(key,val)
        l.push(key)

    }

    function show(){

        for(let i of l){
            if(wm.has(i)){
                console.log(i.name?i.name:i+"=>"+wm.get(i))
            }
        }

    }

    return {
        add,show
    }


}

let obj = new weakmap()
obj.add("name of yourself","how are you?")
obj.add({name:"lebin"},"how are you?")
obj.add({name:"raj"},"how are you?")
obj.show()