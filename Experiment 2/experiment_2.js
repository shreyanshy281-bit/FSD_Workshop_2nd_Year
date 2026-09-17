const fs =require('fs')

// Create /Write
fs.writeFileSync('student.txt','B.Tech Node.js Lab');

//Read
const data= fs.readFileSync('Student.txt','utf8');

console.log(data);

//Write
fs.writeFileSync('student.txt','Name: Shreyansh\nSubject: Full Stack Development');

console.log('File created successfully');

//update

fs.appendFileSync('student.txt','\nExperiment 2 completed.');