//var express = require('express');
//var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});

const express = require("express");
const router = express.Router();

// Utilisation DE "CONTROLLER"  C
const userController = require("../Controllers/UserController");

// Utilisation de "Middlewear"
///////////////////const validate = require("../midill/validate");

// Utilisation de "MODEL"  M
const job_offerModel = require("../models/job_offer");

// userController(fichier).getbyid (fonction dans Controller)
//router.get("/get/:id", userController.getbyid);

// Fonction 1: [READ] --> cette fonction à travers un Controlleur userController(fichier).getall (fonction dans Controller)
router.get("/getall", userController.getall);

// Fonction 4: [Ajout] --> cette fonction à travers un Controlleur et le middleware validate 
                               //(car on a des conditions)

// Fonction 4: [Ajout]
router.post("/add", userController.add_job_offer);

//router.post("/new", validate, userController.add);
module.exports = router;
