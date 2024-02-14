let controller = new AbortController();
setTimeout(() => controller.abort(), 10);

try {

    let response = fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json', {
    signal: controller.signal
  });

} catch(err) {
    console.log("error")
}