const Cidade = require('../models/Cidade');

const accessTokenSecret = 'youraccesstokensecret';

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
            //const cidade = await Cidade.findByPk(req.params.nome);
            const cidade = await Cidade.findOne({where: {nome: req.params.nome}});
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
        } catch (err) {}/*
           return res.status(400).json({ error: err.message });
        }*/
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