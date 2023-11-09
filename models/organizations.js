const mongoose = require("mongoose")
const organizationSchema = mongoose.Schema({
    organizationName: String,
    location: String,
    industry: String,
    numberOfEmployees: Number,
    revenue: Number,
    website: String
})
module.exports = mongoose.model("organizations", organizationSchema)