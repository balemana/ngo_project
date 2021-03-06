const express = require('express')
const bodyParser = require('body-parser')
const { db } = require('./db/index')

db()
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({extend: true}))
app.use(bodyParser.json({}))
app.get("/", (req, res) =>{
    res.send('Hello World')
})

//routes
const organization = require('./routes/organization.route')
const user = require('./routes/user.route')
app.use(organization, user)

app.listen(port, () => {
    console.log('Server running at: ', port)
});
