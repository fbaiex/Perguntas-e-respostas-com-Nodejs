const express = require("express");
const app = express();

app.set('view engie','ejs');


app.get("/:nome/:lang",(req,res) =>{

    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos",preco: 3.14},
        {nome: "Salada de batata",preco:5},
        {nome: "Coca-Cola",preco:1.45}
    ]

    res.render("index.ejs",{
        nome: nome,
        lang: lang,
        empresa: "Stack X",
        inscritos: 0800,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080,() =>{

    console.log("App rodando!");
});