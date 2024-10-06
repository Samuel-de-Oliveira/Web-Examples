// Imports
const os = require('os');
const sqlite = require('sqlite3').verbose();

// Sqlite
const Users = new sqlite.Database('users.sql');
Users.serialize( () => {
  // Show the name and the age of user
   Users.each("SELECT * FROM users", (err, row) => {
      if (!err) {
         console.log(`${row["name"]} has ${2024 - row["year"]}.`);
      }
   });
});
Users.close();

// Date 
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
const userBirth = 2005;

// Verify the user's birth date
if (userBirth > currentYear) {
   console.log('Please digit a valid year for the user!');
   process.exit();
}

// Show plaform
var sysNames = {
   "win32":  "Windows",
   "darwin": "MacOS",
   "linux":  "Linux"
}
console.log(
   `You are Runing this on ${sysNames[os.platform()]}`
);

// Get the user Age and print
var userAge = currentYear - userBirth;
console.log(`Your age is ${userAge}`);

// Print a different message
if (userAge <= 14) {
  console.log('Then you are a kid...');
} else if (userAge >= 15 && userAge <= 24) {
   console.log('Then you are a teen...');
} else if (userAge >= 25 && userAge <= 49) {
   console.log('Then you are an adult...');
} else {
   console.log('Then you are an old person...');
}
