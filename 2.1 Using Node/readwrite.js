
// using CJS - common js
// refer to docs

const fs = require("fs");

// write to file
// fs.writeFile("message", "Make cash money now. Today.", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!")
// })

// read contents of a file
fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});


import { randomSuperhero } from "superheroes";
const name = randomSuperhero();