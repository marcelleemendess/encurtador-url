class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // create a func to not access the varibles outside the class
    getName = () => {
        return this.name;
    };

    getAge = () => {
        return this.age;
    };
}

let Person1 = new Person("Pedro", 19);
let Person2 = new Person("Marcelle", 29);
console.log(Person1.getName());
console.log(Person2.getName());
