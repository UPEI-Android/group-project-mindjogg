const mongoose = require("mongoose");
const { database_link } = require("../config/server_config");

//Attempt to connect to MongoDB Atlas
function connect() {
  mongoose.connect(
    database_link,
     { useNewUrlParser: true, useUnifiedTopology: true },
     (err) => {
       if (!err) console.log("Connected to Database");
       else console.log(err);
     }
   );}
   function close(){mongoose.connection.close();}
   

   module.exports = {
    connect,
    close
 };


