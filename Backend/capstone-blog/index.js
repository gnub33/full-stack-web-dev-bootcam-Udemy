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
    const user = req.body["username"];
    const password = req.body["password"];

    res.render("home.ejs", {usr: user, pass: password});
    console.log(req.body);
})

app.post("/submit", (req, res) => {
    const blgpst = req.body["blgpst"]
    
    blogs.push(blgpst);
    
    res.render("home.ejs", {latest : blogs});
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

const blogs = [];

function confirm() {
    var txt;
    if(confirm ("Are for real homeboy?")) {
        txt = "Post Deleted!";
        alert(txt);
    } else {
        pass;
    }
}