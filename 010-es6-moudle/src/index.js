import Person from './Person.js';

class Man extends Person{
  sayHaha(){
    console.log('hahaha');
  }
}
let zhaozhuo = new Man('zhaozhuo');
zhaozhuo.sayName();
zhaozhuo.sayHaha();
