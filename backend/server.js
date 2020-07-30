const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config()

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
app.get('/', function (req, res) {
    res.send('hello world');
});



const habitsRouter = require('./routes/habits');
app.use('/habits', habitsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



