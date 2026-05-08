// function createCounter(startValue) {
//     let count = startValue;

//     return function() {
//         count++;
//         return count;
//     };
// }

// const c1 = createCounter(5);

// console.log(c1()); 
// console.log(c1()); 


function outer() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const a = outer();
const b = outer();

console.log(a());
console.log(a());
console.log(b());
console.log(b());
