import express from 'express';
import exphps  from 'express-handlebars';
import path    from 'path';
import { body, validationResult } from "express-validator";

const __dirname = path.resolve(path.dirname(""));
const app = express();
const PORT = 3000;
const hbs  = exphps.create();

app.set('view engine', 'hbs');
app.engine('handlebars', hbs.engine);

///// Root path /////
// Main page
app.get('/', (req, res) => {
  res.render('index', {
    task_list: "<li>Testing...</li>",
  });
});

// Static
app.use('/static', express.static(__dirname + "/static"));
//////////////////////

// Listener
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server is running at http://127.0.0.1:${PORT}/`);
});
