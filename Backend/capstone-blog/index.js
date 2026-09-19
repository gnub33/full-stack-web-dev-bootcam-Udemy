import express from "express";
import bodyParser from "body-parser"
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {usr :'p_nut', latest: allBlogs});
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

app.post("/home", (req, res) => {
    //for login page
    const user = req.body["username"];
    const password = req.body["password"];

    res.render("index.ejs", {usr: user, pass: password});
    console.log(req.body);
})

app.post("/submit/post", (req, res) => {
   
    const blgpst = {id: allBlogs.length + 1, content:req.body.postItem} // may need to change to let??
    
    allBlogs.push(blgpst);
    
    res.render("index.ejs", {latest : allBlogs});

    console.log()
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

app.post("/posts/:id/delete", (req, res) => {
    const id = parseInt(req.params.id);
    allBlogs = allBlogs.filter(post => post.id !== id);
    res.redirect("/"); 
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

function addButtons(index, array) {
    let updateBtn = document.createElementButton("button");
    updateBtn.innerHTML = "Edit";

    let delBtn = document.createElementButton("button");
    delBtn.innerHTML = "Delete"
}

