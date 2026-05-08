class hello {
    // The constructor method is called when a new instance of the class is created. It initializes the properties of the class.
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
    sorry() {
        return `Sorry, I can't talk right now.`;
    }
}

let person = new hello("Alice");
console.log(person.greet());

let person2 = new hello("Bob");
console.log(person2.sorry());


