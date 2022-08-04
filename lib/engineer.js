
const Employee = require("./employee.js");


class Engineer extends Employee{
    // name, id, email
   constructor(name, id,email, gitHub){
    super(name, id, email);
    this.gitHub = gitHub;
   }

   // methods
   getGitHub(){
    return this.gitHub;
   }

   gitRole(){
    return "Engineer";
   }
   
}

module.exports = Engineer;