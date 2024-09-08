const currentDate = new Date();
const getYear     = currentDate.getFullYear();
const birthYear   = 2005;

console.log(`Current year is: ${getYear}`);
console.log(`Then I'm ${getYear - birthYear} years old.`);
