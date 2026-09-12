import express from "express";
import bodyParser from "body-parser"
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {name :'hop'});
})

// app.get("/about", (req, res) => {
//     res.render("about.ejs");
// })

// app.get("/settings", (req, res) => {
//     res.render("settings.ejs");
// })

// app.get("/help", (req, res) => {
//     res.render("help.ejs");
// })

app.post("/login", (req, res) => {
    const user = "email";
    const pass = "0000";
    res.render("home.ejs", {username: user, password: pass});
    console.log(req.body);
})

app.post("/submit", (req, res) => {
    res.render("home.ejs" );
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})