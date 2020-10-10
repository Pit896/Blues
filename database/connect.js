const mongoose = require('mongoose');

async function connect(){
    console.log('Connecting to database...');
    await mongoose.connect("mongodb+srv://Pietro2008:Pit2008@cluster0.xej2f.mongodb.net/<dbname>?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Connected to Database!');
}

//User Name:
//Pietro2008


//Password:
//Pit2008

module.exports = connect();

