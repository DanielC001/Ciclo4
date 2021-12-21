const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer } = require("apollo-server-express")
const { resolvers } = require('./resolvers')
const { types } = require('./types')
const { validarToken } = require('./tools/token')
const dotenv = require('dotenv');
dotenv.config();
const { BD_URI } = process.env;

const obtenerData = (token) => {
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Il9pZCI6IjYxYmE4ZTA0NGMzZmQ0ZTdiOWQ5ODNlMCIsIm5vbWJyZSI6InBydWViYTEiLCJhcGVsbGlkbyI6InBydWViYTEiLCJjb3JyZW8iOiJwcnVlYmE0NjU0NDRAY29ycmVvIiwiaWRlbnRpZmljYWNpb24iOiIwMDE1NTQ1NTQ0NDQiLCJjb250cmFzZW5hIjoiJDJiJDEwJC9QaVRCOEZ5aWxtbnpCeUpNYU4xTi5kdjJLb2pYQjJEQkF1Z2h0bFJPODlRMVBBVlc5WWZLIiwicm9sIjoiNjFiZDI2ZGNlOTFiZjlkOWE2M2ZlNjk4IiwiZXN0YWRvIjoiUGVuZGllbnRlIiwiaWRQcm95ZWN0byI6W10sIl9fdiI6MH0sImlhdCI6MTY0MDAxNTQ0NCwiZXhwIjoxNjQwMTAxODQ0fQ.KXIqcgDRd9kBVhkeo7jM4lVweXBtjWYQ1l9BBlGW-DY"
    const verificar = validarToken(token.split(' ')[1]);
    if (verificar.data) {
        return verificar.data
    } else {
        return null;
    }
}

const server = new ApolloServer({
    typeDefs: types,
    resolvers: resolvers,
    context: ({ req }) => {
        const token = req.headers?.authorization ?? null;
        if (token) {
            const userData = obtenerData(token);
            if (userData) {
                return { userData };
            }
        }
        return null;
    },
});

const app = express()
mongoose.connect(BD_URI, async () => {
    console.log("conexión a bd exitosa");
    app.listen(5010, async () => {
        await server.start()
        server.applyMiddleware({ app })
        console.log("Servidor inicializado en puerto 5010");
    })
})