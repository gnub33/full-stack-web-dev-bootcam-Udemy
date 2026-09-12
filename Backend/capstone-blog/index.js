import express from "express";
import bodyParser from "body-parser"
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/about", (req, res) => {
    res.send("about.ejs");
})

app.get("/settings", (req, res) => {
    res.send("settings.ejs");
})
app.get("/help", (req, res) => {
    res.send("help.ejs");
})

app.post("/submit", (req, res) => {
    res.send("index.ejs", )
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})