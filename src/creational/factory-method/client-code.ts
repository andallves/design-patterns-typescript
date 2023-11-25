import { randomCarAlgorith } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";
const customerNames = ['Ana', 'Joana', 'Helena', 'João'];
for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorith();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('---');

}
