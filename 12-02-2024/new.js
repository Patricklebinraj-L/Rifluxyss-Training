// const promise2 = 40;
// const promise1 = Promise.resolve(3);
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 7000, 'foo');
// });

// Promise.race([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

 promise1 = Promise.resolve(3);
 promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 4000, 'foo'),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);
