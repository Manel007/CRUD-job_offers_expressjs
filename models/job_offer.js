const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");
const Schema = mongo.Schema;


const job_offer = new Schema({
  //id: Number,
  title: String,
  description: String,
  status:String,
  deadline:String,
  field:String,
  //company: { type: mongo.Schema.Types.ObjectId, ref: 'Company' }, // Reference to the 'Company' model
  
});


module.exports = mongoose.model("job_offer", job_offer,"manel");
