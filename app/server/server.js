const express = require("express");
const server = express();

const accountManagementApp = require("./account_management/account_management_app");

server.use(accountManagementApp);

//Server listening for Port 3000
server.listen(3000, () => {
  console.log("Connection Made");
});





