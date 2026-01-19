// utilizing nodemon to build multi page web apps and navigation using endpoints in to web apps built with node and express...


import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.get("/contact", (req,res) => {
    res.send("<h1>Contact Me</h1><p> Number: 483-xxx-3922</p>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me<h1>");
})

app.listen(3000, ()=> {
    console.log("Server running on port 3000.");
})