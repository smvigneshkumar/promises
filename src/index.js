const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("failure");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 500);
});

// promise1.then(console.log('promise1')).catch(console.log('promiose1'));

Promise.allSettled([promise1, promise2]).then(console.log).catch(console.log);
// Promise.all([promise1,promise2]).then(console.log).catch(console.log);
// Promise.race([promise1,promise2]).then(console.log).catch(console.log);
// Promise.any([promise1,promise2]).then(console.log).catch(console.log);
