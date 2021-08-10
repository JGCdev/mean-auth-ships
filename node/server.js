const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const url = process.env.MONGO_URL || "mongodb://mongo-db:27017/ships";

// Express APIs
const authRoutes = require('./routes/auth.routes');
const mailRoutes = require('./routes/email.routes');

// MongoDB conection
mongoose.Promise = global.Promise;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected')
},
    error => {
        console.log("Database can't be connected: " + error)
    }
)

// Remvoe MongoDB warning error
mongoose.set('useCreateIndex', true);

// Express settings
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static resources
// app.use('/public', express.static('public'));

app.use('/api/auth', authRoutes)
app.use('/api/mail', mailRoutes)

// Define PORT
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Express error handling
app.use((req, res, next) => {
    
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});