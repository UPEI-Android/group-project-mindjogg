//Import dependencies
const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const { userSchema } = require("./database/schema/user_schema")

//ES6
//import userSchema from "../database/schema/user_schema.js";

const app = express()

//allows application accept json
app.use(express.json())

//dummy array of users
const users= []

//get request handler for route 
app.get('/', (req, res) => {
  console.log("Welcome to Mindjogg! app")
  res.send("Welcome to Mindjogg!")
});

//get request handler to show registered users
app.get('/users', (req, res) => {
  res.json(users)
});

//post request handler for registration
app.post('/users/register', async (req, res) => {
  try {

//hashing password that was retrieved from user with Salt 10
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  //adding hashed password to user obj
  const user = { 
     userName : req.body.userName,
     password : hashedPassword,
     userFirstName: req.body.firstName,
     userLastName: req.body.lastName,
     userEmail: req.body.email
  }

  //pushing user object to array, later will push to database
  users.push(user)
} catch (err) {
  console.log(err)
}
});


//post request handler for login
app.post('/users/login', async (req, res) => {
  //checks array if user is registered and retrieving the user details, will later be replaced by function searching database
  const user = users.find(user => user.userName === req.body.userName)
  if (user == null) {
    return res.send('Cannot find user')
  }
  //checking if password match records, note that bycrypt's compare function secures it from timing attacks
  try {
    if(await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success')
    } else {
      res.send('Wrong password')
    }
  } catch (err) {
    console.log(err)
  }
})





//Attempt to connect to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://mindjogg_the_app:Mindj0Gg123@mindjoggcluster.e2dzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Connected to Database");
    else console.log(err);
  }
);

/*
Inform MongoDB about our Schema and create a New Collection for It
Leaving this commented for testing when backend testing is set

const dataModel = new mongoose.model("User Data", userSchema);
*/

//Server listening for Port 3000
app.listen(3000, () => {
  console.log("Connection Made");
});
