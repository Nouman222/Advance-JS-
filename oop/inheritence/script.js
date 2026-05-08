// class fruit {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }
//     display() {
//         console.log(`The name of the fruit is ${this.name} and its color is ${this.color}`);
//     }
// }

// class citrus extends fruit {
//     constructor(name, color, sourness) {
//         super(name, color);
//         this.sourness = sourness;
//     }
//     display() {
//         super.display();
//         console.log(`The sourness level of the fruit is ${this.sourness}`);
//     }
// }

// const lemon = new citrus("Lemon", "Yellow", "High");
// lemon.display();


class employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    display() {
        console.log(`Employee Name: ${this.name}, Position: ${this.position}`);
    }
}

class manager extends employee {
    constructor(name, position, department) {
        super(name, position);
        this.department = department;
    }
    display() {        super.display();
        console.log(`Department: ${this.department}`);
    }
}

const manager1 = new manager("Alice", "Manager", "Sales");
manager1.display();