const moment = require("./node_modules/moment/moment");
const FS     = require('fs');

var currentDate = {
  Year:  parseInt(moment().format('YYYY')),
  Month: parseInt(moment().format('MM')),
  Day:   parseInt(moment().format('Do')),
  WeekDay: moment().format('dddd'),
};
var userBirthYear = 2010;
FS.readFile( 'nomes.json', 'utf8', ( err, data ) => {
  var pessoas = JSON.parse(data);
  console.log(pessoas);
});

console.log(
  `Year: ${currentDate.Year}`
);
console.log(
  `Month: ${currentDate.Month}`
);
console.log(
  `Day: ${currentDate.Day} ${currentDate.WeekDay}`
);
// console.log(pessoas);
