const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const http = require('http');
const cors = require('cors');
const { setUpWebSocket } = require('./websocket')


const app = express();
const server = http.Server(app);

setUpWebSocket(server);

mongoose.connect('mongodb+srv://dave:88169976@cluster0-xoc3j.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);