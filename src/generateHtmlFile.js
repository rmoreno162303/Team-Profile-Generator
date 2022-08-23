const createTeam = team => {
    const createManager = manager => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
    </div>`};

    const createEngineer = engineer => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
        </ul>
    </div>
    </div>`};

    const createIntern = intern => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
    </div>`};

    const teamInfo = [];

    teamInfo.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
        );
    teamInfo.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
        );
    teamInfo.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
        );
    
    return teamInfo.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">       
        <title>Team Roster</title>
      </head>

      <body>
      <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron md-3 team-heading">
              <div>${createTeam(team)}</div>
        </div>
        </div>
        </div>
      </body>
    </html>
    `
}
//createTeam();

// <div class="card" style="width:18rem;">
// <div class="card-header"> Manager </div>
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">${allTeamMembers[0].teamName}</li>
//         <li class="list-group-item">${allTeamMembers[0].teamID}</li>
//         <li class="list-group-item"><a href= "mailto:${allTeamMembers[0].teamEmail}">${allTeamMembers[0].teamEmail}</a></li>
//         <li class="list-group-item">${allTeamMembers[0].office}</li>
//     </ul>
// </div>

// <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">       
//         <title>Team Roster</title>
//       </head>

//       <body>
//       <div class="container-fluid">
//       <div class="row">
//           <div class="col-12 jumbotron md-3 team-heading">
//               <div>${team}</div>
//         </div>
//         </div>
//         </div>
//       </body>
//     </html>




// function generateHtmlFile(data) {
//     return `
//     ${JSON.stringify (data)}`;
// }

// module.exports = generateHtmlFile