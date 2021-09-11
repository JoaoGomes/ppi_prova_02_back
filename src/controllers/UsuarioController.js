const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const Usuario = require('../models/Usuario');

const accessTokenSecret = 'youraccesstokensecret';

module.exports = {
    async login(req, res){
        try{
            const { username, password } = req.body;
            // Filtra o usuário(user) do array de usuários(users) por nome de usuário e senha
        
            const findUser = await Usuario.findOne({where: {nome: username}});
        
            if (findUser) {
                // Gera um token de acesso
                const accessToken = jwt.sign({ 
                    username: findUser.username, role: findUser.role }, 
                    accessTokenSecret, {expiresIn: '2m'});
                    const user = { username: username};
                    res.json({
                        accessToken, user
                    });
            } else {
                console.log(findUser.username);
                res.send('Nome de usuário ou senha incorretos 2');
            }

        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    },

    async insert(req, res) {
        try {
            const usuario = await Usuario.create(req.body);
            return res.json(usuario);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

}