
const Employee = require("./employee.js");


class Intern extends Employee{
    // name, id, email
   constructor(name, id,email, school){
    super(name, id, email);
    this.school = school;
   }

   // methods
   getSchool(){
    return this.school;
   }

   gitRole(){
    return "Intern";
   }
   
}

module.export = Intern;