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
    async findAll(req, res) {
        try {
            const cidades = await Cidade.findAll();
            return res.json(cidades);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async show(req, res) {
        try {
        const cidade = await Cidade.findByPk(req.params.id);
        return res.json(cidade);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    },

    async store(req, res) {
        try {
        const cidade = await Cidade.create(req.body);
        return res.json(cidade);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
        const cidade = await Cidade.findByPk(req.params.id);
        await cidade.update(req.body);
        return res.json({ client });
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    },

    async destroy(req, res) {
        try {
        const cidade = await Cidade.findByPk(req.params.id);
        await cidade.destroy();
        return res.json();
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }
}