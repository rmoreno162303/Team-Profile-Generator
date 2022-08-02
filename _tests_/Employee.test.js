const fs = require('fs');
 const questions= [
        {
            type:'input',
            name: 'employee',
            message:"What is the employee's name?",
            validate :(employee) =>{if(employee){ return true;} else{
                return "Please enter employee's name."
            }},
        },
        {
            type: 'input',
            name: 'empID',
            message: 'What is your employee ID?',
            validate:(empID) =>{if(empID){return true;} else{
                return "Please enter your employee ID."
            }},
        },
        {
            type: 'input',
            name: 'empEmail',
            message: 'Please enter employee email.',
            validate:(empEmail) =>{if(empEmail){return true;} else{
                return "Please enter your employee email."
            }},
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "Enter manager's office number.",
            validate:(officeNum) =>{if(officeNum){return true;} else{
                return "Please provide office number for manager of project."
            }},
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information.',
            validate:(usage) =>{if(usage){return true;} else{
                return "Please provide usage information."
            }},
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Provide contribution guidelines.',
            validate:(contributions) =>{if(contributions){return true;} else{
                return "Please enter contributors."
            }},
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions.',
            validate:(test) =>{if(test){return true;} else{
                return "Please enter test instructions."
            }},
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provide information for questions.',
        },
        ];