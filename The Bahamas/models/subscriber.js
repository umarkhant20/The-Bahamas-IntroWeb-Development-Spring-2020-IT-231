"use strict"

const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: String,
        email: String,
        phone: String,
        comments: String
    });

module.exports = mongoose.model("subscriber", subscriberSchema);