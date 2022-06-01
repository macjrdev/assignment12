// STEP 1
function Cat() {

}

const Dog = function() {

}

// STEP 2
// const cat1 = new Cat()
// const dog1 = new Dog()

// STEP 3
// class Animal {
    // constructor(num) {
        // this.num = num;
    // }
    // roar = function() {
        // console.log(this.num)
    // }
// }
// const animal1 = new Animal(0)
// animal1.roar()

// STEP 4
// class Animal {
    // constructor(type) {
        // console.log(`The new Animal ${type} has been created`);
    // }
// }
// const animal1 = new Animal('Lion')
// STEP 5
// class Animal { 
    // constructor(type, breed, color, height, length) {
        // this.type   = type;
        // this.breed  = breed;
        // this.color  = color;
        // this.height = height;
        // this.length = length;
    // }
    // zoo = function() {
        // console.log(`${this.type}, ${this.breed}, ${this.color}`)
    // }
// }
// const lion = new Animal('Lion','Big Cat','Light Brown');
// lion.zoo()


// STEP 6
// for(let i = 0; i < Animal.length; i++) {
    // console.log(Animal[i]);
// }

// STEP 7
// function Animal(type, breed, color, height, length) { 
        // this.type   = type;
        // this.breed  = breed;
        // this.color  = color;
        // this.height = height;
        // this.length = length;
    // }
// Animal.prototype.speak = function() {
    // if (this.type == "dog") {
        // console.log(`The ${this.color} dog is barking`);
    // } else if (this.type == "cat") {
        // console.log(`The ${this.color} cat is meowing`)
    // }
// }
// const dog = new Animal('dog', '', 'brown','','');
// const cat = new Animal('cat', '', 'grey','','');
// dog.speak();
// cat.speak();

// STEP 8
// function Animal(type, breed, color, height, length) { 
    // let _type   = type;
    // let _breed  = breed;
    // let _color  = color;
    // let _height = height;
    // let _length = length;
    // let checkType = function() {
        // if (_type == "dog") {
            // return _type
        // } else {
            // return _type
        // }
    // }
    // console.log(`The ${_type} has made a noise`)
    // this.speak = function() {
        // checkType();
    // }
// }
// 
// const dog = new Animal('dog')
// const cat = new Animal('cat')

// STEP 9