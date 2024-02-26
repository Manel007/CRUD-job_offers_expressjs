const mongo = require("mongoose");
const Schema = mongo.Schema;


const company= new Schema({
  companyid: Number,
  companyfield: String,
  companyname: String,
  location:String,
  country:String,
 

  
});


module.exports = mongo.model("company",company);
