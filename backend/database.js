const mongoose = require('mongoose');
const connection = "mongodb+srv://murali:murali1889@cluster0.ev7pbcx.mongodb.net/test";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));