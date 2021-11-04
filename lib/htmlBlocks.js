const headerBlock = function () {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script src="https://kit.fontawesome.com/20b7bd973d.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Page</title>
    </head>
    
    <body>
        <div class="py-4 text-center bg-primary bg-opacity-75">
            <div class="container">
                <h1 class="display-4 text-light">Team Profile</h1>
                <h1 class="display-4 text-light"><i class="fas fa-users"></i></h1>
            </div>
        </div>

        <!-- Start of Cards -->
        <div class="row justify-content-center">
        `
};
/*================================================================================================================================*/

const managerBlock = function (data) {
    return `
    <!-- MANAGER BLOCK -->
    <div class="card m-2 col-sm-5">
    <div class="card-header">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-briefcase"></i> Manager</h2>
    </div>
    <div class= "card-body">
        <div class="list-group">
            <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${data.id}</span></p>
            <p class="list-group-item list-group-item-action list-group-item-dark">Email: <span>${data.email}</span></p>
            <p class="list-group-item list-group-item-action list-group-item-dark">Office Number: <span>${data.officeNumber}</span></p>
        </div>
    </div>
    </div>
    `
};
/*================================================================================================================================*/

const engineerBlock = function (data) {
    return `
    <!-- ENGINEER BLOCK -->
    <div class="card m-2 col-sm-5">
    <div class="card-header">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-screwdriver"></i> Engineer</h2>
    </div>
    <div class= "card-body">
            <div class="list-group">
                <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${data.id}</span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">Email: <span>${data.email}</span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">GitHub: <span>${data.github}</span></p>
            </div>
    </div>
    </div>
    `
};
/*================================================================================================================================*/

const internBlock = function (data) {
    return `
    <!-- INTERN BLOCK -->
    <div class="card m-2 col-sm-5">
    <div class="card-header">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-university"></i> Intern</h2>
    </div>
    <div class= "card-body">
        <div class="list-group">
            <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${data.id}</span></p>
            <p class="list-group-item list-group-item-action list-group-item-dark">Email: <span>${data.email}</span></p>
            <p class="list-group-item list-group-item-action list-group-item-dark">GitHub: <span>${data.school}</span></p>
        </div>
    </div>
    </div>
    `
};
/*================================================================================================================================*/

const footerBlock = function() {
    return `
    </div> 
    </body>
    </html>`
};

module.exports = {
    manager: managerBlock,
    engineer: engineerBlock,
    intern: internBlock,
    header: headerBlock,
    footer: footerBlock,
}