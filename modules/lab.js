export let message = "Hello from the module!";

export function greet(name) {
    return `Hello, ${name}!`;
}

export class Person {
    constructor(name) {
        this.name = name;
    }}