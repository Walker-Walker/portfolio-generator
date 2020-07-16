const inquirer = require('inquirer');


inquirer
.prompt([
  {
  type: 'input',
  name: 'name',
  message: 'What is your name?'
  }
])
.then(answers => console.log(answers));




// start Capture input
// const fs = require("fs");

// const generatePage = require('./src/page-template.js');

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const [name, github] = profileDataArgs;



// fs.writeFile("index.html", generatePage(name, github), (err) => {
//   if (err) throw err;
  
//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

// const printProfileData = (profileDataArr) => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }
//   console.log('================');
//   profileDataArr.forEach(profileItem => console.log(profileItem));

//   //   profileDataArr.forEach(function(profileItem) {
// //       console.log(profileItem);
// //   })
// };

// printProfileData(profileDataArgs);
//End Capture Input

//Start Generate Webpage
// example for non multi line
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));
// Multi Line:
