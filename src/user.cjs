// const getName=()=>{
//   return "Bob"
// }
// const getAge=()=>{
//   return 100;
// }
// exports.getName = getName;
// exports.getAge = getAge;

class User{
  constructor(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
  }
  getUser(){
    return `Name:${this.name} Age:${this.age} Email:${this.email}`
  }
}

module.exports = User;


