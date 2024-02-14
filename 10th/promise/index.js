function timer(){
    let c=1

    interval = setInterval(function(){
    
        if(c==3){
            clearInterval(interval)
        }
        console.log(c)
        c+=1
    },1000)


}


let prom = new Promise(function(resolve,reject){
    let inp = 400
    if(inp>300){
        timer()
        resolve("success")
    }
    else{
        reject("failure")
    }
})

prom.then(
    function(){
        promise.then(onFulfilled);
    },function(){
        console.log("retiu")
    }
)


function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'Patrick', email: 'lpatricklebinraj@gmail.com' },
          { username: 'Lebinraj', email: 'batch24@gmail.com' },
        ]);
      }, 4000);
    });
  }
  
  function onFulfilled(users) {
    console.log(users);
  }
  
  const promise = getUsers();









