var moment = require("moment");

tempo = moment("25012005", "DDMMYYYY")

console.log(
   `I've born in: ${tempo.fromNow()}`
);

console.log(
   moment().locale()
);
