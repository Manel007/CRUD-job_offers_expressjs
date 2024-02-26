const express = require("express");

const job_offer = require("../models/job_offer");

// la rcherche de tous les utilisateurs
async function getall(req, res) {
  try {
   
    const data = await job_offer.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
}

// la recherche par id
async function getbyid(req, res) {
  try {

    const data = await job_offer.findById(req.params.id);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
}
/*l'ajout d'un utilisateur
async function add(req, res, next) {
    try {
      const newJobOffer = new job_offer(req.body);
      await newJobOffer.save();
      res.status(200).send("Job offer added successfully.");
    } catch (err) {
      res.status(400).send({ error: err.toString() });
    }
  }
*/
// l'ajout d'un utilisateur
async function add(req, res, next) {
  try {
  
  const job_offer = new job_offer(req.body);
    await job_offer.save();
    res.status(200).send("add success");
  } catch (err) {
    res.status(400).send({ error: error.toString() });
  }
  
}
// delete
/*
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const contactId = req.params.id;

    // Find the contact to delete
    const contact = await Contact.findByIdAndDelete(contactId);

    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
    } else {
      res.status(200).json({ message: 'Contact deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting contact', error: err.message });
  }
});
*/



//module.exports = { getall, getbyid , add };
module.exports = { getall, getbyid,add  };
