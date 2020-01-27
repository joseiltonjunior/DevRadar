const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:Junior1901@cluster0-kgcvl.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, ()=>{
    console.log("Servindo rodando em http://localhost:3333")
});