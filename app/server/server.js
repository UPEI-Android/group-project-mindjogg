const app = require("./app");
const serverConfig = require("./config/server_config");


//Server will listen on the port specified in the serverConfig
app.listen(serverConfig.port, () => {
  console.log("Server is listening on port: " + serverConfig.port);
  console.log(` Server link: ${serverConfig.hostUrl}:${serverConfig.port}`);
});





