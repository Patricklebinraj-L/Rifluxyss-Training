let obj = {name:"patrick",
            age:21,
            subject:undefined
            }

for(let i of Object.entries(obj)){
    
    switch(typeof i[1]){
        case 'string':
            console.log("string")
            break
        case 'number':
            console.log("number")
            break
        default:
            console.log("something else")
            break

    }

}

// let l = [[1,2],[3,4],[5,6]]
// l = l.flat()
// console.log(l)

