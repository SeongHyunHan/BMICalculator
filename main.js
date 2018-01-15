const readLines = require('readline-sync');

console.log('**************BMI Calculator**************');

//get input from user
var height = readLines.question('Please enter height in metre: ');
var weight = readLines.question('Please enter weight in kilogram: ');

//calculate BMI
var bmi = weight / (height * height);

//Print output
console.log(`Height(m) ${height} m`);
console.log(`Weight(Kg): ${weight} Kg`);
console.log(`BMI: ${bmi}`);