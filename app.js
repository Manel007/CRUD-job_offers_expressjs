const express = require("express");
const http = require("http");
var path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');


const mongo = require("mongoose");

const mongoconnection = require("./database/mongod.json");

var app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST','PUT','DELETE'], // Allow only GET and POST requests
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
  credentials: true 



}));

app.use(express.urlencoded({ extended: true })); 

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
  app.use(express.json());

  const server = http.createServer(app);

//Lancement du serveur
//server.listen(3000, () => console.log("server is running!!!"));

module.exports = app;

