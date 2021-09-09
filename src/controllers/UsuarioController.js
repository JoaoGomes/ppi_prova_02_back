const Cidade = require('../models/Cidade');
const jwt = require('jsonwebtoken');

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
        
            const user = users.find(u => { 
                return u.username === username && u.password === password });
        
            if (user) {
                // Gera um token de acesso
                const accessToken = jwt.sign({ 
                    username: user.username, role:
                    user.role }, 
                    accessTokenSecret);
                    res.json({
                        accessToken
                    });
            } else {
                res.send('Nome de usuário ou senha incorretos');
            }
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}