async function subscribe() {
    let response = await fetch("https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json");
  
    if (response.status == 502) {

      await subscribe();
    } else if (response.status != 200) {

      console.log(response.statusText);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await subscribe();
    } else {

      let message = await response.text();
      console.log(message);

      await subscribe();
    }
  }
  
  subscribe();