const mongoose = require('mongoose')

const database_connection = ''; // MongoDB URI

const db = () =>{
    try {
        mongoose.connect(database_connection, {
            useNewUrlParser: true
        })
    }catch (e) {
        console.log('error: ', e)
    }

}

module.exports ={
    db
}
