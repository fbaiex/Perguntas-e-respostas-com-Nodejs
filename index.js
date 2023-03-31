const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.set('view engie','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",(req,res) =>{
    res.render("index.ejs");

});

app.get("/perguntar",(req,res) =>{
    res.render("perguntar.ejs");

});

app.post("/salvarpergunta",(req,res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido! com o titulo: " + titulo + " e com a descricao: " + descricao);

});

app.listen(8080,() =>{

    console.log("App rodando!");
});