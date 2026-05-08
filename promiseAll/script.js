let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1 * 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2 * 1000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3 * 1000);
});

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log("All promises resolved with values:", values);
  })
  .catch((error) => {
    console.log("One or more promises rejected with reason:", error);
  });
