let user = ["sachin", 30, "javascript"];

// old way of destructuring array
// let name = user[0];
// let age = user[1];
// let course = user[2];
// console.log(name, age, course);

// new way of destructuring array
// let [name, age, course] = user;
// console.log(name, age, course);


// const skills = ["HTML", "CSS", "JS"]
// const [html, css, ] = skills;
// console.log(html, css);

// Create two arrays and merge them using spread operator.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArr = [...arr1, ...arr2];
// console.log(mergedArr);

// Create a function using rest operator that prints all arguments.
// function printArgs(...args) {
//   console.log(args);
// }
// printArgs(1, "Hello", true, [1, 2, 3]);

// Use template literals to print:
// My name is YOUR_NAME and I am YOUR_AGE years old
// const name = "Nouman";
// const age = 22;
// console.log(`My name is ${name} and I am ${age} years old`);

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];


products.map(product => {
  console.log(`Product: ${product.name}, Price: ${product.price}`);
});

products.filter(product => product.price > 400){
    console.log(`Expensive Product: ${product.name}, Price: ${product.price}`);
}

products.reduce((total, product) => total + product.price, 0){
    console.log(`Total Price: ${total}`);
}

products.find(product => product.name === "Phone"){
    console.log(`Found Product: ${product.name}, Price: ${product.price}`);
}

products.some(product => product.price < 200){
    console.log(`Found affordable product: ${product.name}, Price: ${product.price}`);
}

products.every(product => product.price > 100){
    console.log(`All products are expensive`);
}

