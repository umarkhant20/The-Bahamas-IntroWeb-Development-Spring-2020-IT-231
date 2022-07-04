"use strict"

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController  = require("./controllers/homeController"),
  subscribersController = require("./controllers/subscribersController"),
  layouts = require("express-ejs-layouts"),
  mongoose = require("mongoose");

  
  mongoose.connect(
    "mongodb+srv://ukhan17:IT231web@cluster0.hijdx.mongodb.net/thebahamas?retryWrites=true&w=majority", 
     {  useNewUrlParser: true , useUnifiedTopology: true  }
    );
  
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/", (req, res ) => {
    res.render("index");
});
app.get("/atlantis", homeController.showAtlantis);
app.get("/dolphin_cay", homeController.showDolphin_cay);
app.get("/about", homeController.showAbout);

app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);


app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
