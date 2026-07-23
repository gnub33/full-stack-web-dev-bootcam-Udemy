import express from "express";
const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();
let msg = "Hey! It's a weekday, it's time work hard!";

function printMessage() {
    if (day === 0 || day === 6) {
        msg = "Hey! It's the weekend, it's time have fun!";
    }
}

printMessage();

app.get("/", (req, res) => {
    res.render("index.ejs",
        { msg: msg }
    );
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})