const Employee = require("./employee.js");


class Manager extends Employee{
    // name, id, email
   constructor(name, id,email, officeNumber ){
    super(name, id, email);
    this.officeNumber = officeNumber;
   }

   // methods
   getOfficeNumber(){
    return this.officeNumber;
   }

   gitRole(){
    return "Manager";
   }
   
}

module.export = Manager;