const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require ("path");


var allTeamMembers =[];
const fs = require('fs');

const dir_name = path.resolve(__dirname, "dist")
const distPath = path.join(dir_name, "team.html")



const generateHtmlFile = require("./src/generateHtmlFile");
function init () {
    inquirer.prompt( [
        {
            type:'input',
            name: 'teamName',
            message:"What is the manager's name?",
            validate :(teamName) =>{if(teamName){ return true;} else{
                return "Please enter project manager's name."
            }},
        },
        {
            type: 'input',
            name: 'teamID',
            message: 'What is your manager ID?',
            validate:(teamID) =>{if(teamID){return true;} else{
                return "Please enter manager ID."
            }},
        },
        {
            type: 'input',
            name: 'teamEmail',
            message: 'Please enter manager email.',
            validate:(teamEmail) =>{if(teamEmail){return true;} else{
                return "Please enter manager email."
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
        ]).then((response) => {
            const manager = new Manager (
               //response.getRole,
               response.teamName,
               response.teamID,
               response.teamEmail,
               response.officeNum);

               allTeamMembers.push(manager);

               promptotherquestions();


            })



        }

    function promptotherquestions () {
        inquirer.prompt( [
            {
                type:"list",
                name: "typeEmp",
                message:"Which type of team member would you like to add?",
                choices: ["Engineer", "Intern","Done"],
            },
        ]).then( (userChoice) => {
        
                 if( userChoice.typeEmp === "Engineer") { collectEngineerInfo(); } 
                 if( userChoice.typeEmp === "Intern"){ collectInternInfo(); } 
                 if( userChoice.typeEmp === "Done"){ Done(); }

        })
    }
        function collectEngineerInfo() {
        inquirer.prompt( [
        {
            type:'input',
            name: 'teamName',
            message:"What is the Engineer's name?",
            validate :(teamName) =>{if(teamName){ return true;} else{
                return "Please enter Engineer's name."
            }},
        },
        {
            type: 'input',
            name: 'teamID',
            message: "What is your Engineer's ID ?",
            validate:(teamID) =>{if(teamID){return true;} else{
                return "Please enter Engineer's ID."
            }},
        },
        {
            type: 'input',
            name: 'teamEmail',
            message: "Please enter engineer's email.",
            validate:(teamEmail) =>{if(teamEmail){return true;} else{
                return "Please enter engineer's email."
            }},
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Enter engineer's GitHub username.",
            validate:(gitHub) =>{if(gitHub){return true;} else{
                return "Please provide GitHub username."
            }},
        },
        {
            type:"confirm",
            message: "Do you want to add another team member?",
            name: "repeat",
        },
        ]).then((response) => {
             const engineer = new Engineer (
               response.teamName,
               response.teamID,
               response.teamEmail,
               response.gitHub);

               allTeamMembers.push(engineer);

               if (response.repeat === true) {
                promptotherquestions();
            } else {
                Done();
            }

            })
        }
    
        function collectInternInfo() {
        inquirer.prompt( [
        {
            type:'input',
            name: 'teamName',
            message:"What is the interns's name?",
            validate :(teamName) =>{if(teamName){ return true;} else{
                return "Please enter intern's name."
            }},
        },
        {
            type: 'input',
            name: 'teamID',
            message: "What is your interns's ID ?",
            validate:(teamID) =>{if(teamID){return true;} else{
                return "Please enter intern's ID."
            }},
        },
        {
            type: 'input',
            name: 'teamEmail',
            message: "Please enter intern's email.",
            validate:(teamEmail) =>{if(teamEmail){return true;} else{
                return "Please enter intern's email."
            }},
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school.",
            validate:(school) =>{if(school){return true;} else{
                return "Please provide intern's school."
            }},
        },
        {
            type:"confirm",
            message: "Do you want to add another team member?",
            name: "repeat",
        },
        ]).then((response) => {
             const intern = new Intern (
               response.teamName,
               response.teamId,
               response.teamEmail,
               response.school);
            
            allTeamMembers.push(intern);

            if (response.repeat === true) {
                promptotherquestions();
            } else {
                Done();
            }
            })
            
        }

function Done() {
    console.log(allTeamMembers);
    fs.writeFileSync("team.html", generateHtmlFile(allTeamMembers), "utf-8");

}


init();




