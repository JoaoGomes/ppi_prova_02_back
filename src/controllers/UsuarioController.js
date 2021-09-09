const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const accessTokenSecret = 'youraccesstokensecret';

const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];

module.exports = {
    async login(req, res){
        try{
            const { username, password } = req.body;
            // Filtra o usuário(user) do array de usuários(users) por nome de usuário e senha
        
            const findUser = users.find(u => { 
                return u.username === username && u.password === password });
        
            if (findUser) {
                // Gera um token de acesso
                const accessToken = jwt.sign({ 
                    username: findUser.username, role: findUser.role }, 
                    accessTokenSecret, {expiresIn: '2m'});
                    const user = { username: findUser.username};
                    res.json({
                        accessToken, user
                    });
            } else {
                res.send('Nome de usuário ou senha incorretos');
            }
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}