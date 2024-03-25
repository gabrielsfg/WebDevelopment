import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

//Making the css Dinamic
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {currentPage: "home"});
});

app.get("/about", (req, res) => {
    res.render("about.ejs", {currentPage: "about"});
});

app.post("/submit", (req,res) => {
    const postTitle = req.body.pTitle;
    console.log(postTitle);
    if(postTitle === ""){
        res.render("index.ejs", {error:"Post Title must be filled", currentPage: "home"})
    } else {
        res.render("create.ejs", {postTitle: postTitle, currentPage: "create"});
    };
});

app.listen(port, ()=>{
    console.log(`Listening on port:${port}`);
});

