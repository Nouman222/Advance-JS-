// async function test() {
//     console.log("1");
//    await console.log("2");
//     console.log("3");
//     console.log("4");
// }
// console.log("5");

// test();
// console.log("6");

// async function test() {
//   const data = await fetch("https://fakestoreapi.com/products");
//   const res = await data.json();
//   return res;
// }

// let a = test();
// console.log(a);

// console.log("6");

// async function test() {
//   const data = await fetch("https://fakestoreapi.com/products");
//   const res = await data.json();
//   return res;
// }

// test().then((res) => console.log(res)).catch((err) => console.log(err));

// async function test() {
//   try {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const res = await data.json();
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// }
// // test().then((res) => console.log(res));
// const user = test();

// const box = document.getElementById("container");

// user.then((res) => {
//   res.forEach((element) => {
//     const div = document.createElement("div");
//     div.innerHTML = `
//         <h2>${element.title}</h2>
//         <p>${element.description}</p>
//         <img src=${element.image} alt="image" width="100px" height="100px"/>
//         `;
//     box.appendChild(div);
//   });
// });

// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("User data loaded");
//     }, 2000);
//   });
// }

// async function getUser() {
//   const user = await fetchUser();

//   console.log(user);
// }

// getUser();

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 1000);

// Promise.resolve().then(() => {
//   console.log("3");
// });

// console.log("4");


// async function users() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );

//     const data = await response.json();

//     const names = data.map(user => user.name);

//     console.log(names);

//   } catch (err) {
//     console.log(err);
//   }
// }

// users();


