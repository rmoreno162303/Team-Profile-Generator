
const Employee = require("./Employee");


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
   getRole(){
    return "Engineer";
   }
    gitName() {return this.getGitHub};
}

module.exports = Engineer;