//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userInput = "";
var validPassword = "ILoveProgramming";

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//using middleware
// var userIsAuthorised = false;
// function passwordCheck(req, res, next) {
//     const password = req.body["password"];
//     if (password === "ILoveProgramming") {
//         userIsAuthorised = true;
//     }
//     next();
// }
// app.use(passwordCheck);


//when user hits submit, form is submitted to /check route using POST method, not /submit
app.post("/check", (req, res) => {
  console.log("password entered: " + req.body.password);
  if (req.body["password"] == validPassword) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    //res.sendFile(__dirname + "/public/index.html");
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
