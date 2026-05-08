const human = {
  speak() {
    console.log("Human can speak");
  }
};

const student = {
  study() {
    console.log("Student studies");
  }
};

student.__proto__= human
student.speak();
student.study();