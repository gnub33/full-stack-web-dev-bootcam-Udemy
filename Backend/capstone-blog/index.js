import express from "express";
import bodyParser from "body-parser"
import formatTime from "./formatTime.js"
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {usr :'p_nut', latest: allBlogs, formatTime});
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/settings", (req, res) => {
    res.render("settings.ejs");
})

app.get("/help", (req, res) => {
    res.render("help.ejs");
})

app.post("/home", (req, res) => {
    //for login page
    const user = req.body["username"];
    const password = req.body["password"];

    res.render("index.ejs", {usr: user, pass: password});
    console.log(req.body);
})

app.post("/submit", (req, res) => {
    const blgpst = {
        id: Date.now(), 
        content:req.body.postItem, 
        time: new Date()
    }
    allBlogs.push(blgpst);
    res.redirect("/");
})

app.post("/posts/:id/delete", (req, res) => {
    const id = parseInt(req.params.id);
    allBlogs = allBlogs.filter(post => post.id !== id);
    res.redirect("/"); 
})

app.post("/posts/:id/edit", (req, res) => {
    const newId = parseInt(req.params.id)
    const post = allBlogs.find(post => post.id === newId);

    if (post) {
        post.content = req.body.postItem;
    }
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

let allBlogs = [];

function confirm() {
    var txt;
    if(confirm ("Are for real homeboy?")) {
        txt = "Post Deleted!";
        alert(txt);
    } else {
        pass;
    }
}


