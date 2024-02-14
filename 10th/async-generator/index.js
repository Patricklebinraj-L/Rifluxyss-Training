async function* randomNum(n) {
    for (let i = 0; i < n; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield Math.random()*10;
    }
  }
  
  const inp = 5; 
  async function asyncGenerator(){
    const arr = randomNum(inp);
  
    for await (let n of arr) {
      console.log(n);
    }
  }
  
  asyncGenerator()