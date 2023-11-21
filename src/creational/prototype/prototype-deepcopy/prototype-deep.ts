export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(
    public name: string,
    public age: number,
  ) {}
  clone(): Person {
    const newObj: Person = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item: Address) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(
    public street: string,
    public number: number,
  ) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address2: Address = new Address('Av. 09', 102);
const person3: Person = new Person('Andre', 23);
person3.addAddress(address2);
const person4: Person = person3.clone();

person3.addresses[0].street = 'bla';

person3.name = 'Joana';
console.log(person3);
console.log(person3.addresses);

console.log(person4);
console.log(person4.addresses);
