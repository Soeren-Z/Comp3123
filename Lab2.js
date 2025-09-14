'use strict';

// Exercise 1
const gretter = (myArray) => {
    let greetText = "Hello";
    for (const person of myArray) {
        console.log(`${greetText} ${person}`);
    }
}
console.log("\n Exercise 1");
gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"]);

// Exercise 2
const capitalize = (str) => {
    const [initial, ...rest] = str;
    const capital = initial.toUpperCase();
    return capital + rest.join("");
}
console.log("\n Exercise 2");
console.log(capitalize("foobar"));
console.log(capitalize("nodeJs"));

// Exercise 3
const colours = ["red", "green", "blue"];
const capitilizedColours = colours.map(colour => capitalize(colour));
console.log("\n Exercise 3");
console.log(capitilizedColours);

// Exercise 4
const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(value => value < 20);
console.log("\n Exercise 4");
console.log(filterLessThan20);

// Exercise 5
const array = [1, 2, 3, 4];
const calculateSum = array.reduce((accumulator, currentValaue) => accumulator + currentValaue);
const calculateProduct = array.reduce((accumulator, currentValaue) => accumulator * currentValaue);
console.log("\n Exercise 5");
console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

console.log("\n Exercise 6");
const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());

const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());