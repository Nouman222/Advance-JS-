let name = "sachin";
let course = "javascript";
// old way of creating object 
// const obj = {
//     name:name,
//     course:course
// }
// console.log(obj);

// new way of creating object
const obj = {
    name,
    course
}
// console.log(obj);

// same result but less code and more readable.

// let obj1 = {
//     name:"sachin",
//     age:30,
//     show: function(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// obj1.show();

let obj1 = {
    name:"sachin",
    age:30,
    show(){
        console.log(`Hello ${this.name}`);
    }
}
obj1.show();