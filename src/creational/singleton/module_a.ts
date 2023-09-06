import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Andre', age: 23 });
myDatabaseClassic.add({ name: 'Celsa', age: 60 });
myDatabaseClassic.add({ name: 'José', age: 64 });

export { myDatabaseClassic };
