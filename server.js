// setting up express server on port 8080, setting up body parser,
// setting up view engine for ejs, requiring route files
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 8080;

// Middlewares so I can read/write json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Where I'll put my servable assets
app.use(express.static('./public'));

// Setting ejs as my view engine
app.set('view engine', 'ejs');

require('./routes/html-routes.js')(app);

app.listen(port, function (err) {
  if (err) throw err;
  console.log("You're tuning in on port: " + port);
});
