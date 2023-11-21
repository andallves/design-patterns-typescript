const person = {
  firstName: 'Andre',
  lastName: 'Alves',
  age: 23,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
// Acontece algo
const anotherPerson = Object.create(person);
// Object empty
console.log(anotherPerson); // Object empty
// Here happen a thing knows like shadow, copy all data from object person
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());

// Now I'm insert a name to our object anotherPerson
anotherPerson.firstName = 'Caio';
console.log(anotherPerson);
// It will to be showing the data that I inserted.
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());

// First, JavaScript looking for data inside itself, after he will looking for in prototypes, then it will looking
// in prototype of object.
