// Importando as dependências do projeto
const express = require('express');
const cidades = require("./src/controllers/CidadeController");
const usuarios = require("./src/controllers/UsuarioController");
const routes = express.Router();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();

routes.use(express.json());
routes.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());
routes.all('*', cors());

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
routes.get("/cidades", cors(), cidades.findAll);
routes.get("/cidades/:nome", cors(), cidades.show);
routes.post("/cidades", cors(), cidades.store);
routes.put("/cidades/:nome", cors(), cidades.update);
routes.delete("/cidades/:nome", cors(), cidades.destroy);

routes.post("/login", cors(), usuarios.login);
routes.post("/usuarios", cors(), usuarios.insert);

module.exports = routes;
