const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth');
dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify : false },
        ()=> console.log('Connected to database !')
        );

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use('/',authRoute);
app.listen(port, ()=>console.log('Server running at port ',port));
