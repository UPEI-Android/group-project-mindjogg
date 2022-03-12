const mongoose = require("mongoose");
const { database_link } = require("../config/server_config");

//Attempt to connect to MongoDB Atlas
function connect () {
  mongoose.connect(
    database_link,
     { useNewUrlParser: true, useUnifiedTopology: true },
     (err) => {
       if (!err) console.log("");
       else console.log(err);
     }
   );}

    async function close(){await mongoose.disconnect();}
   

   module.exports = {
    connect,
    close
 };


