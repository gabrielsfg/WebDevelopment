import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req,res) => {
    res.send("<h1>Email: gabriellfsg00@gmail.com</h1>");
});

app.get("/about", (req,res) => {
    res.send("<h1>My name is Gabriel Ferreira and I'm 23</h1>");
});

app.listen(port, () =>{
    console.log(`Port: ${port}`);
});