// fetch("readme.txt")
// .then((response) => {
//     return response.text();
// }
// )
// .then((data) => {
//     console.log(data);
//     document.write(data);
// })
// .catch((error) => {
//     console.log(error);
// }
// )

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
