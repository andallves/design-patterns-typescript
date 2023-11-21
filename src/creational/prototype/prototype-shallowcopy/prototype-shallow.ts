export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(
    public street: string,
    public number: number,
  ) {}
}
// OBS: How we can see if we use that possibly we'll have a problem because the
// another data person will change too.
const address1: Address = new Address('Av. 09', 102);
const person1: Person = new Person('Andre', 23);
person1.addAddress(address1);
person1.addresses[0].street = 'Bla bla bla'

const person2: Person = person1.clone();
person2.name = 'Joana';
console.log(person2);
console.log(person2.addresses);
