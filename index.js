const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateMyPage = require("./src/generateHtmlFile");

// const genMarkDown = require("./generateMarkdown.js");

var allTeamMembers =[];
const fs = require('fs');
const generateHtmlFile = require("./src/generateHtmlFile");
//const { doesNotMatch } = require('assert');
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
        ]).then((response)=>{
             /// destructing an object
             const {teamName, teamID, teamEmail, officeNum} = response;
             const manager = new Manager(teamName, teamID, teamEmail, officeNum);
            const addManager ={
               role: manager.getRole(),
               name: manager.getName(),
               id: manager.getId(),
               email: manager.getEmail(),
               extrafield: manager.getOfficeNumber(),


            }

            allTeamMembers.push(addManager);

         promptotherquestions();



        })


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
        ]).then((response)=> {
             /// destructing an object
             const {teamName, teamID, teamEmail, gitHub, repeat} = response;
             const engineer = new Engineer(teamName, teamID, teamEmail, gitHub);
    
            const addEngineer ={
               role: engineer.getRole(),
               name: engineer.getName(),
               id: engineer.getId(),
               email: engineer.getEmail(),
               extrafield: engineer.getGitHub(),

            }
            allTeamMembers.push(addEngineer);

            if (repeat === true) {
                promptotherquestions();
            //allTeamMembers.push(addEngineer);
            } else {
                Done();
            }
        });
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
        ]).then((response)=>{
             /// destructing an object
             const {teamName, teamID, teamEmail, school, repeat} = response;
             const intern = new Intern(teamName, teamID, teamEmail, school);
    
            const addIntern ={
               role: intern.getRole(),
               name: intern.getName(),
               id: intern.getId(),
               email: intern.getEmail(),
               school: intern.getSchool(),
            }

            allTeamMembers.push(addIntern);

            if (repeat === true) {
                promptotherquestions();
            } else {
                Done();
            }
            })
        }
    }

// Function call to initialize app
init();

const Done =()=>{
    console.log(allTeamMembers);
    const generateHtmlContent = generateMyPage(allTeamMembers);
    console.log(generateHtmlContent)
    fs.writeFileSync("./dist/index.html", generateHtmlContent);
}
// "./dist/index.html", gen...
// output_dir
//output path 

const generateHtmlContent = (allTeamMembers) => {
    return
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">       
        <title>Team Roster</title>
      </head>

      <body>
        <div class="card" style="width:18rem;">
            <div class="card-header"> Manager </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${allTeamMembers[0].teamName}</li>
                    <li class="list-group-item">${allTeamMembers[0].teamID}</li>
                    <li class="list-group-item"><a href= "mailto:${allTeamMembers[0].teamEmail}">${allTeamMembers[0].teamEmail}</a></li>
                    <li class="list-group-item">${allTeamMembers[0].office}</li>
                </ul>
        </div>
        ${engineerInfo(allTeamMembers)}
        ${internInfo(allTeamMembers)}

      </body>
    </html>`
}
//return generateHtmlContent;

const createEngineers = (allTeamMembers) => {
    let engineerInfo = ""
    for(i=0; i < allTeamMembers.length; i++) {
        if(allTeamMembers[i].getRole() === "Engineer") {
            engineerInfo += `<div class="card" style="width: 18rem;"
            <div class="card-header"> Engineer </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${allTeamMembers[i].teamName}</li>
                    <li class="list-group-item">${allTeamMembers[i].teamID}</li>
                    <li class="list-group-item"><a href = "https://github.com/${team[i].getGitHub}">${team[i].getGitHub}</a></li>
                </ul>
            </div>`
        }
    }
    return engineerInfo;
}

const createIntern = (allTeamMembers) => {
    let internInfo = ""
    for(i=0; i < allTeamMembers.length; i++) {
        if(allTeamMembers[i].getRole() === "Intern") {
            internInfo += `<div class="card" style="width: 18rem;"
            <div class="card-header"> Engineer </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${allTeamMembers[i].teamName}</li>
                    <li class="list-group-item">${allTeamMembers[i].teamID}</li>
                    <li class="list-group-item">${allTeamMembers[i].school}</li>
                </ul>
            </div>`
        }
    }
    return internInfo;
}

module.exports = generateHtmlContent;

 // const generateHTML = ({ manager, , github, linkedin }) =>
    // `<!DOCTYPE html>
    //   <html lang="en">
    //   <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    //     <title>Document</title>
    //   </head>
    //   <body>
    //     <div class="jumbotron jumbotron-fluid">
    //     <div class="container">
          
    //     </div>
    //   </div>
    //   </body>
    //   </html>`;



// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then( (response) =>{
//         //console.log(response);
//         const teamMembers = generateHtmlFile(allTeammE);
//       fs.writeFile("./generateREADME/README.md", readmecontent);
//     })
// }