const Employee = require("./Employee");


class Manager extends Employee{
    // name, id, email
   constructor(name, id,email, officeNumber ){
    super(name, id, email);
    this.officeNumber = officeNumber;
   }

   // methods
   getRole(){
    return "Manager";
   }
   getOfficeNumber(){
    return this.officeNumber;
   }
}

module.exports = Manager;