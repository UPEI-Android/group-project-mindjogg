const express = require("express");
const server = express();

const serverConfig = require("./config/server_config");
const accountManagementApp = require("./account_management/account_management_app");

server.use(accountManagementApp);

//Server will listen on the port specified in the serverConfig
server.listen(serverConfig.port, () => {
  console.log("Server is listening on port: " + serverConfig.port);
  console.log(` Server link: ${serverConfig.hostUrl}:${serverConfig.port}`);
});





