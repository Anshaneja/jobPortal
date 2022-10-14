// ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const url = require('url');

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
// const jobs = [
//   {title: 'Full Stack Developer', company: 'Google',location: 'London', salary: '£100,000', description: 'Full Stack Developer required for a leading tech company in London', apply: 'https://www.google.com/jobs'},
// ];

// create an array with 10 jobs to work as the database (temporary solution)
// for (let i = 0; i < 10; i++) {
//     jobs.push({
//         title: `Full Stack Developer ${i}`,
//         company: `Google ${i}`,
//         location: `London ${i}`,
//         salary: `£100,000 ${i}`,
//         description: `Full Stack Developer required for a leading tech company in London ${i}`,
//         apply: `https://www.google.com/jobs ${i}`,
//     });



// create array with technical jobs with different data
const jobs = [
    {title: 'Full Stack Developer', company: 'Google',location: 'Bengaluru', salary: '£100,000', description: 'Full Stack Developer required for a leading tech company in London', apply: 'https://www.google.com/jobs', experienceLevel : "Entry Level" ,  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']},
    {title: 'Front End Developer', company: 'Facebook',location: 'Hyderabad', salary: '£80,000', description: 'Front End Developer required for a leading tech company in London', apply: 'https://www.facebook.com/jobs', experienceLevel : "Experienced" ,skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']},
    {title: 'Back End Developer', company: 'Amazon',location: 'Gurugram', salary: '£90,000', description: 'Back End Developer required for a leading tech company in London', apply: 'https://www.amazon.com/jobs', experienceLevel : "Experienced" ,skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB']},
    {title: 'DevOps Engineer', company: 'Microsoft',location: 'Bengaluru', salary: '£70,000', description: 'DevOps Engineer required for a leading tech company in London', apply: 'https://www.microsoft.com/jobs', experienceLevel : "Internship" ,skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS', 'Docker']},
    {title: 'Technical Support', company: 'Apple',location: 'Hyderabad', salary: '£60,000', description: 'Technical Support required for a leading tech company in London', apply: 'https://www.apple.com/jobs',experienceLevel : "Internship" , skills:  ['HTML', 'CSS', 'JavaScript', 'React',]},
    {title: 'Software Engineer', company: 'IBM',location: 'Bengaluru', salary: '£50,000', description: 'Software Engineer required for a leading tech company in London', apply: 'https://www.ibm.com/jobs', experienceLevel : "Entry Level" ,skills: ['HTML', 'CSS', 'JavaScript', 'Linux', 'C#']},
    {title: 'Data Scientist', company: 'Oracle',location: 'Bengaluru', salary: '£40,000', description: 'Data Scientist required for a leading tech company in London', apply: 'https://www.oracle.com/jobs', experienceLevel : "Experienced" ,skills: [ 'Python', 'R', 'SQL', 'Tableau', 'Power BI']},
    {title: 'UX Designer', company: 'Twitter',location: 'Gurugram', salary: '£30,000', description: 'UX Designer required for a leading tech company in London', apply: 'https://www.twitter.com/jobs', experienceLevel : "Experienced" ,skills: ['HTML', 'CSS', ,'Adobe XD']},
    {title: 'UI Designer', company: 'Netflix',location: 'Gurugram', salary: '£20,000', description: 'UI Designer required for a leading tech company in London', apply: 'https://www.netflix.com/jobs', experienceLevel : "Entry Level" ,skills: ['HTML', 'CSS', 'Adobe XD', 'Adobe Photoshop']},
    {title: 'QA Engineer', company: 'Spotify',location: 'Hyderabad', salary: '£10,000', description: 'QA Engineer required for a leading tech company in London', apply: 'https://www.spotify.com/jobs', experienceLevel : "Internship" ,skills: [ 'Selenium', 'Jira', 'Confluence']},
];



// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/jobs', async(req, res) => {
  
  await new Promise( (resolve) =>  setTimeout( resolve, 3000));

  const current_url = new URL(req.url, 'http://localhost:3000');
  const search_params = current_url.searchParams;
  const search = search_params.get('search');
  
  const response = jobs.filter(job => {
    return job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase()) || job.location.toLowerCase().includes(search.toLowerCase()) || job.salary.toLowerCase().includes(search.toLowerCase()) || job.description.toLowerCase().includes(search.toLowerCase()) || job.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()));
  });
  res.send(response);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
// starting the server
app.listen(PORT, () => {
  console.log('listening');
});

