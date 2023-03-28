const express = require('express');
const db = require('./db')
const Pizza = require('./Models/pizzaModel')
const dotenv=require('dotenv').config();

const app = express();
app.use(express.json());

const pizzasRoute = require('./Routes/pizzaRoutes')

app.get("/", (req, res) => {
    res.send("Server is running...")
})

app.use('/api/pizzas/', pizzasRoute)


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is runnig on port " + port)
})