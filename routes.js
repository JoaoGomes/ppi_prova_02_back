// Importando as dependências do projeto
const express = require('express');
const routes = express.Router();

//Define uma rota
routes.get("/", (req, res) => {
    return res.send({ name: "Ciclano Fulano" });
});

module.exports = routes;