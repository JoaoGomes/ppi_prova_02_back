/*
Insituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul
Campus Bento Gonçalves
Prátrica Profissional Integrada I - 2021/01
Aluno: João Eduardo Costa Gomes
Matrícula: 20191130081
Data: 13/09/2021

Prova 02 - Aplicativo de previsão de tempo
*/
const express = require("express");
const routes = require("./routes");
const db = require("./src/db");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(routes);

db.sync().then(() => {
    console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});

app.listen(3333, () => console.log("Servidor iniciado na porta 3333"));