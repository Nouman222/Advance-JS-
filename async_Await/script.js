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

async function test() {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
  }
}
// test().then((res) => console.log(res));
const user = test();

const box = document.getElementById("container");

user.then((res) => {
  res.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h2>${element.title}</h2>
        <p>${element.description}</p>
        <img src=${element.image} alt="image" width="100px" height="100px"/>
        `;
    box.appendChild(div);
  });
});
