// Importando as dependências do projeto
const express = require('express');
const cidades = require("./src/controllers/CidadeController");
const usuarios = require("./src/controllers/UsuarioController");
const routes = express.Router();
const jwt = require('jsonwebtoken');

const accessTokenSecret = 'youraccesstokensecret';

//Define autenticação
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

//Define uma rota
routes.get("/cidades", cidades.findAll);
routes.get("/cidades/:id", cidades.show);
routes.post("/cidades", authenticateJWT, cidades.store);
routes.put("/cidades/:id", authenticateJWT, cidades.update);
routes.delete("/cidades/:id", authenticateJWT, cidades.destroy);
routes.post("/login", usuarios.login);

module.exports = routes;