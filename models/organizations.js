const { Double } = require("mongodb")
const mongoose = require("mongoose")
const organizationSchema = mongoose.Schema({
    // organizationName: String,
    // location: String,
    // industry: String,
    // numberOfEmployees: Number,
    // revenue: Number,
    // website: String


    organizationName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    numberOfEmployees: {
        type: Number,
        required: true,
        min: 0,
        max: 100000
    },
    revenue: {
        type: Number,
        required: true,
        min: 0
    },
    website: {
        type: String
    }
});
module.exports = mongoose.model("organizations", organizationSchema)