function sum(name, ...numbers) {
    console.log(`Hello ${name}`);
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum("Alice", 1, 2, 3, 4, 5)); // Hello Alice \n 15