const express = require('express');   // Include the HTTP module.
const bodyParser = require('body-parser');   // Include the body-parser module.
const fs = require('fs');  // Include the file system module.
const user = express();   // Creates an instance of the express() function and assigns it to a constant variable user.

user.set('view engine', 'ejs');  // Setting up the Ejs template engine.
user.set('views', 'views');  // View the files of view directory.
user.use(bodyParser.urlencoded({ extended: false }));  // Parsing the URL-encoded data.

const users = [];  // Declaring an emty array. 

// '/' Route 
user.get('/', (req, res) => {             
  res.render('index', { title: 'Add User'});  // Render index.ejs file.
});

// Call POST request to "/add" and store user name in an Array & a text file.
user.post('/add', (req, res) => {
  const name = req.body.userName;
  users.push(name);    // Push the names in to an array.
  res.redirect('/');  // After storing the data redirect to "/" route.
  console.log(users);
});

// 'Users' route 
user.get('/users', (req, res) => {
  res.render('usernames', { 
    title: 'Show User', 
    users: users });  // Render usernames.ejs file to the users page.
});
// Spin Node.js server on port 3030.
user.listen(3030, () => {
  console.log('Server listening on port 3030!');
});