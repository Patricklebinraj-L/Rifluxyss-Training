let obj = {name:"pdf"}

let permission1 = {canview:true}
let permission2 = {canview:false}



function setView(){
    Object.assign(obj,permission1)
}

function cancelView(){
    Object.assign(obj,permission2)
}

for(let i=0;i<2;i++){

let inp = "true"
inp = Boolean(inp)
if(inp){
  setView()
}
else{
    cancelView()
}

console.log(obj)

}