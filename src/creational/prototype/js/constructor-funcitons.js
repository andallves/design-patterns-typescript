function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
} // This function has the property called prototype

const person = {
  firstName: 'Andre',
  lastName: 'Alves',
  age: 23,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(person);
// This make the prototype receive the Person like constructor and it will appear like a Class.
Person.prototype.constructor = Person;

// It possible to make herança
function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'Oiie'; // This only exist inside subclass
}
SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Gustavo', 'Ribeiro');
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson('Helena', 'Vieira');
console.log(person2);
console.log(person2.fullName());
