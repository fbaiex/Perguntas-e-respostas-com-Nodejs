const express = require("express");
const app = express();

app.set('view engie','ejs');


app.get("/",(req,res) =>{

    res.render("index.ejs");
});

app.listen(8080,() =>{

    console.log("App rodando!");
});