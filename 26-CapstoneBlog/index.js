import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const posts = [];

//Making the css Dinamic
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {currentPage: "home", posts: posts});
});

app.get("/about", (req, res) => {
    res.render("about.ejs", {currentPage: "about"});
});

app.get("/submit", (req,res) =>{
    res.render("index.ejs", {currentPage: "home", posts: posts});
})

app.get("/post/:postTitle", (req,res) =>{
    const postTitle = req.params.postTitle;
    const post = posts.find(post => post.title === postTitle);
    res.render("post.ejs", {currentPage: "post", post:post});
});



app.post("/submit", (req,res) => {
    res.render("create.ejs", {currentPage: "create"});
});

app.post("/create", (req, res) =>{
    const postTitle = req.body.postTitle;
    const postText = req.body.postText;
    const postAuthor = req.body.postAuthor;
    const postEmail = req.body.postEmail;

    const newPostItem = new Post(postTitle, postText, postAuthor, postEmail);
    posts.push(newPostItem);
    res.redirect("/");
    console.log(posts);
})

app.listen(port, ()=>{
    console.log(`Listening on port:${port}`);
});

class Post {
    constructor(title, text, author, email){
        this.title = title;
        this.text = text;
        this.author = author;
        this.email = email;
    };
};
