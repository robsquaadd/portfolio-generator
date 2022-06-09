const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/generatePage.js");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "about",
      message: "Enter some information about yourself: \n\n",
    },
  ]);
};

const promptProject = () => {
  console.log(`
  ==========================
      Add a new project     
  ==========================
  `);
  return inquirer.prompt([
    {
      type: "input",
      name: "project-name",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "project-description",
      message: "Write a description for your project. (Required)\n\n",
    },
    {
      type: "checkbox",
      name: "project-languages",
      message: "What languages did you use for the project?",
      choices: ["HTML", "CSS", "Javascript", "Python", "Ruby", "C++"],
    },
    {
      type: "input",
      name: "project-github-link",
      message: "Please paste the github link to your project here (Required): ",
    },
    {
      type: "confirm",
      name: "feature",
      message: "Would you like to feature this project?",
      default: false,
    },
  ]);
};

// promptUser()
//   .then((answers) => {
//     console.log(answers);
//   })
//   .then(promptProject)
//   .then((projectAnswers) => {
//     console.log(projectAnswers);
//   });
// const [profileName, profileGithub] = profileDataArgs;
// const generatedHTML = generatePage(profileName, profileGithub)

// fs.writeFile("index.html", generatedHTML, (err) => {
//   err ? console.error(err) : console.log("html file created! :)");
// });

const onLoad = async () => {
  var userAnswers = await promptUser();
  var answersProject = await promptProject();
  console.log(userAnswers);
  console.log(answersProject);
};

onLoad();
