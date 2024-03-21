import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    /*Callback function */console.log(`Server running on port ${port}.`);
});