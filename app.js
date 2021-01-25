const express = require('express')
const session = require('express-session')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

// MIDDLEWARES
app.use(cors())
app.use(bodyParser.json())

// IMPORT ROUTES
const rulesRoute = require('./routes/rules')
const peopleRoute = require('./routes/people')


// ROUTES
app.use('/rules', rulesRoute)
app.use('/people', peopleRoute)


app.get('/', (req, res) => {
    res.send('We are home!')
});

app.use(session({
    secret: 'cute cats',
    resave: true,
    saveUninitialized: false
}))

// CONNECT TO DB
const initiateMongoServer = async () => {
    try {
        mongoose.connect(
            process.env.DB_CONNECTION,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log('Connected to MongoDB')
        )
    }catch(err){
        console.log(err)
    }
}

initiateMongoServer()

// LISTEN TO SERVER
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))