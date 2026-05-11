const user = {
  name: "Nouman",
  age: 22
}

localStorage.setItem("user", JSON.stringify(user));

const userData = localStorage.getItem("user");
const userObj = JSON.parse(userData);

console.log(userObj.name);