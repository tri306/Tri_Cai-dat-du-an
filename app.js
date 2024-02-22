const express = require("express");
const contactRouter = require("./app/routes/contact.route");

const app = express();

app.use("/api/contacts", contactRouter);
app.use(express.json());

app.get("/", (req,res) => {
    res.json({message:"Wellcome to contact book application. "});
});

module.exports = app;