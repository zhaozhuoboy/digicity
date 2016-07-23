class Person {
  constructor(name){
    this.myName = name;
    console.log('hi' + this.myName);
  }
  sayHello(){
    console.log("hello "+ this.myName);
  }
}

class Man extends Person {
  sayHo(){
    console.log("Hoooooo");
  }
}
let zhaozhuo = new Man('zhaozhuo');
zhaozhuo.sayHello();
zhaozhuo.sayHo();
