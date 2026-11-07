import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke";

// no auth required so no credentials or keys required
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended:true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/", async (req,res) => {
    try {
        const flags = [].concat(req.body.blacklist || []);
        const cat = req.body.cat;
        const response = await axios.get(`${API_URL}/${cat}`, {
            params: {
                blacklistFlags: flags.join(','),
                lang: req.body.lang,
                type: req.body.type,
                contains: req.body.cont,
            },
        });
        res.render("index.ejs", {
            data: response.data
        });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
            error: "No jokes match your criteria",
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});