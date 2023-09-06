import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Eduardo', age: 23 });
myDatabaseClassic.add({ name: 'Joana', age: 60 });
myDatabaseClassic.add({ name: 'Carlos', age: 64 });
myDatabaseClassic.show();
console.log(myDatabaseClassic === myDatabaseFromModuleA);
