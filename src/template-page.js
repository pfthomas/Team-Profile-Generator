const createTeam = (team) => {
    const createManagerCard = (manager) => {
        return `
    <div class="card bg-dark">
        <div class="card-body bg-dark">
          <h5 class="card-title">${manager.getName()}</h5>
          <h4 class="card-title">${manager.getRole()}</h4>
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`;
    };

    const createEngineerCard = (engineer) => {
        return `
    <div class="card bg-dark">
        <div class="card-body bg-dark">
          <h5 class="card-title">${engineer.getName()}</h5>
          <h4 class="card-title">${engineer.getRole()}</h4>
          <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a>< li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>`;
    };

    const createInternCard = (intern) => {
        return `
    <div class="card bg-dark">
        <div class="card-body bg-dark">
            <h5 class="card-title">${intern.getName()}</h5>
            <h4 class="card-title">${intern.getRole()}</h4>
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`;
    };

    const html = [];

    html.push(
        team
        .filter((employee) => employee.getRole() ==="Manager")
        .map((manager) => createManagerCard(manager))
    );
    html.push(
        team
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => createEngineerCard(engineer))
            .join("")
    );
    html.push(
        team
            .filter((employee) => employee.getRole() === "Intern")
            .map((intern) => createInternCard(intern))
            .join("")
    );

    return html.join("");
}

module.exports = (team) => {
    return `
<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel = "stylesheet" href ="style.css">
</head>
<body>
    
<div class = "p-5 mb-4 bg-dark rounded-3">
    <div class="container-fluid py-5">
        <h1 class="display-5 text-light text-center fw-bold">My Team</h1>
    </div>
</div>
    
<div class="container">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            ${createTeam(team)}
        </div>
    </div>
</div>
    
</body>
</html>`;
};