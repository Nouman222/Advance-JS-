// try {
//     console.log("hello");
//     console.log("Welcome");
// } catch{
//     console.log("Error is occur");
    
// }


// try {
//     console.log("hello");
//     blablabalabla
//     console.log("Welcome");
// } catch{
//     console.log("Error is occur");
    
// }

// try {
//     console.log("hello");
//     qiadjjdh
//     console.log("Welcome");
// } catch(error){
//     // console.log("Error is occur");
//     console.log(error);
// }

// here try catch block will not work because setTimeout is asynchronous function and it will execute after the try catch block is executed. so we can not catch error in this way. we can use try catch block inside the setTimeout function to catch the error.

// try { setTimeout(() => {
//     console.log("hello");
//     qiadjjdh
//     console.log("Welcome");
// }) } catch(error){
//     console.log(error);
// }

// now this will work because we have used try catch block inside the setTimeout function to catch the error.
// setTimeout(() => {
//     try {
//         console.log("hello");
//         qiadjjdh
//         console.log("Welcome");
//     } catch(error){
//         console.log(error);
//     }
// }, 1000);


// we have 7 type of error in JavaScript
// 1. SyntaxError: This error occurs when there is a syntax error in the code. For example, if you forget to close a parenthesis or a curly brace, you will get a SyntaxError.
// 2. ReferenceError: This error occurs when you try to access a variable that is not defined. For example, if you try to access a variable that has not been declared, you will get a ReferenceError.
// 3. TypeError: This error occurs when you try to perform an operation on a value that is not of the expected type. For example, if you try to call a function on a non-function value, you will get a TypeError.
// 4. RangeError: This error occurs when you try to use a value that is out of range. For example, if you try to create an array with a negative length, you will get a RangeError.
// 5. EvalError: This error occurs when there is an error in the eval() function. For example, if you try to use eval() to execute a string of code that contains a syntax error, you will get an EvalError.
// 6. URIError: This error occurs when there is an error in the encodeURI() or decodeURI() functions. For example, if you try to decode a URI that contains invalid characters, you will get a URIError.
// 7. InternalError: This error occurs when there is an internal error in the JavaScript engine. For example, if you try to create an array with a length that is too large, you will get an InternalError.

