const express = require("express");
const http = require("http");
var path = require("path");
const bodyParser = require("body-parser");

const mongo = require("mongoose");

const mongoconnection = require("./database/mongod.json");


var app = express();

mongo.connect(
  mongoconnection.url, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("it works");
  })
  .catch((err) => {
    console.log(err);
  });

  const UserRouter = require("./routes/users");
  app.use("/job_offer", UserRouter);


  const server = http.createServer(app);

//Lancement du serveur
//server.listen(3000, () => console.log("server is running!!!"));

module.exports = app;

