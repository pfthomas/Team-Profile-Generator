const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createTeam = require("./src/template.js");

const teamData = [];

const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is the team managers name?",
            name: "name",
        }, {
            type: "input",
            message: "What is the team manager's id?",
            name: "id",
        }, {
            type: "input",
            message: "What is the team managers's email?",
            name: "email",
        }, {
            type: "input",
            message: "What is the team manager's office number?",
            name: "officeNumber",
        },
        
        ])
        const createManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
        );
        teamData.push(createManager);
};

const eQuestions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name",
        }, {
            type: "input",
            message: "What is the engineer's id?",
            name: "id",
        }, {
            type: "input",
            message: "What is the team engineer's email?",
            name: "email",
        }, {
            type: "input",
            message: "What is the engineer's github username?",
            name: "github",
        },
        
        ])
        const createEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        teamData.push(createEngineer);
            listConditional();
}

const iQuestions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name",
        }, {
            type: "input",
            message: "What is the intern's id?",
            name: "id",
        }, {
            type: "input",
            message: "What is the intern's email?",
            name: "email",
        }, {
            type: "input",
            message: "What is the interns university?",
            name: "school",
        },
        
        ])
        
        const createIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
        );
        teamData.push(createIntern);
        listConditional();
}

async function listConditional () {
    const addOrFinish = await inquirer
    .prompt([
        {
            name: 'addFinish',
            type: 'list',
            choices: ['Add engineer', 'Add intern', 'Finish creating my team'],
            message: "What would you like to do next?"
        }
    ])
    if(addOrFinish.addFinish === 'Add engineer'){
        return eQuestions();
    }
    if(addOrFinish.addFinish ==='Add intern'){
        return iQuestions();
    } else makeProfile();
}

async function promptUser() {
    await questions()

    listConditional();
}

promptUser();

function makeProfile () {
    fs.writeFileSync(
        "./dist/index.html",
        createTeam(teamData),
        "utf-8"
    );
}