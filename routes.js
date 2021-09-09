// Importando as dependências do projeto
const express = require('express');
const cidades = require("./src/controllers/CidadeController")
const routes = express.Router();

//Define uma rota
routes.get("/cidades", cidades.findAll);

routes.get("/cidades/:id", cidades.show);
routes.post("/cidades", cidades.store);
routes.put("/cidades/:id", cidades.update);
routes.delete("/cidades/:id", cidades.destroy);
module.exports = routes;