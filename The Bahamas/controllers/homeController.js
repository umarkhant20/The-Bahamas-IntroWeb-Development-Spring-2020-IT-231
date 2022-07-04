"use strict"

var atlantis = [
    {
        atlantis: "The Atlantis Paradise",
        class: "World-Class Accommodations"
    }
]

var dolphin_cay =[
    {
        dolphin: "Dolphin Cay",
        trainer: "Trainer for a day",
        experience: "Experience Information",
        age: "Age Limit",
        cost: "Cost to Travel to the Bahamas"
    }
]

var about = [
    {
        history: "History of The Bahamas",
        settlement: "First Settlement",
        piracy: "Age of Piracy",
        nassau: "Nassau Struggles",
        civil: "Civil War and Prohibition",
        tourism: "Tourism and Independence"
    }
]

exports.showAtlantis = (req, res) => {
    res.render("atlantis",{
        Atlantis: atlantis
    });
};

exports.showDolphin_cay= (req, res) => {
    res.render("dolphin_cay",{
        Dolphin_cay: dolphin_cay
    });
};

exports.showAbout = (req, res) => {
    res.render("about",{
        About: about
    });
};

exports.showSignUp = (req, res) => {
    res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};

exports.logRequestPaths = (req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
};
