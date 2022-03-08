//This file holds the schema for the Emergency Support Services
//Check out the support_schema.md documentation for mor information

const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema({
  name: String,
  type: String,
  phone: String,
  email: String,
  address: String,
  description: String,
});

const SupportService = mongoose.model("SupportService", supportSchema);
module.exports = SupportService;