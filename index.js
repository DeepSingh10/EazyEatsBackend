const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
const port = process.env.port || 5000
const mongoDB = require('./db')
mongoDB();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://eazyeats.netlify.app");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// deep singh yadav