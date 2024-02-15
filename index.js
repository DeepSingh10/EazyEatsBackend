const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.port || 5000
const mongoDB = require('./db')
mongoDB();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","https://musical-mousse-1a1301.netlify.app");
    // res.header(
    //     "Access-Control-Allow-Origin"
    // );
    next();
})

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