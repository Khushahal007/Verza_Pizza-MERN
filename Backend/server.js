const express = require('express');
const db = require('./db')
const Pizza = require('./Models/pizzaModel')
const dotenv = require("dotenv");
const pizzasRoute = require('./Routes/pizzaRoutes')
const userRoute = require('./Routes/userRoute')
const ordersRoute = require('./Routes/ordersRoute')
const bodyParser = require("body-parser"); 
const cors=require('cors')
dotenv.config();

const app = express();
// Middleware for parsing JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
const allowedOrigins = ['http://localhost:3000', 'https://verza-pizza-webapp.onrender.com'];

// Configure CORS middleware to allow access from the specified origins.
app.use(cors({
  origin: (origin, callback) => {
    // Check if the origin is in the list of allowed origins.
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Deny the request
    }
  }
}));


app.get("/", (req, res) => {
    res.send("Server is running...")
})

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/', ordersRoute)


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is runnig on port " + port)
})
