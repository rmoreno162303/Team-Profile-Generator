const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateMyPage = require("./src/generateHtmlFile");

// const genMarkDown = require("./generateMarkdown.js");

var allTeamMembers =[];
const fs = require('fs');
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
        ]).then((response)=>{
             /// destructing an object
             const {teamName, teamID, teamEmail, school} = response;
             const intern = new Intern(teamName, teamID, teamEmail, school);
    
            const addIntern ={
               role: intern.getRole(),
               name: intern.getName(),
               id: intern.getId(),
               email: intern.getEmail(),
               school: intern.getSchool(),
            }

            allTeamMembers.push(addIntern);

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

function startHtml() {
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Team Roster</title>
        <link rel="stylesheet" href="./assets/css/style.css">
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid">
         <div class="container"></div>
        </div>
        </body>
       </html>`;
}


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