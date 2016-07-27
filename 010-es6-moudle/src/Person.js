class Person {
  constructor(name) {
    this.myName = name;
    console.log('my name is ' + this.myName)
  }
  sayName(){
    console.log('hello ' + this.myName);
  }
}
export default Person;
