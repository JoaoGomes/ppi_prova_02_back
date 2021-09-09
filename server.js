const express = require("express");
const routes = require("./routes");
const db = require("./src/db");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.authenticate().then(() => {
    console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));