import express from "express";
import connection from "./database";
import routes from "./routes";
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors())
app.use(routes)
app.listen(process.env.PORT || 8080, init)

async function init() {
    console.log("API em Execução ✅")
    do {
        await connect()
    } while (!connection.isInitialized)
}

async function connect() {
    try {
        await connection.initialize()
        console.log('Conexão com Banco ✅')
    } catch (error) {}
}