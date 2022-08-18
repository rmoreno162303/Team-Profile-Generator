
const Employee = require("./Employee");


class Intern extends Employee{
    // name, id, email
   constructor(name, id,email, school){
    super(name, id, email);
    this.school = school;
   }

   // methods
   getRole(){
    return "Intern";
   }
   getSchool(){
    return this.school;
   }
   
}

module.exports = Intern;