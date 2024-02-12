let obj = {
        name:"patrick",
        age:"22",
        degree:"B.Tech",
        dob:"12-10-2001"
        }

let s = JSON.stringify(obj)
let r = ''
for(let i of s){
    if((i=="{") || (i=="}")){
        continue
    }
    else{
        r+=i
    }
}

console.log(r)

let newObj = "[1,2,3,4,5]"

let arr = JSON.parse(newObj)

console.log(typeof arr)
