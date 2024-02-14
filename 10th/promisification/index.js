function promisify(fn) {
    return function(...args) {
      return new Promise((resolve, reject) => {
        fn(...args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };
  }
  
  function callbackBasedFunction(input, callback) {
    setTimeout(() => {
      if (input) {
        callback(null, 'Success!');
      } else {
        callback(new Error('Failed!'));
      }
    }, 1000);
  }
  
  const promiseBasedFunction = promisify(callbackBasedFunction);
  
  promiseBasedFunction(false)
    .then(result => {
      console.log('Result:', result);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  