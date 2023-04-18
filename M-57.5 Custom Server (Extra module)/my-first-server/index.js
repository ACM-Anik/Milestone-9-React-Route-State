const express = require('express');
const app = express();
const port = 5000


app.get('/', (req, res) => {
    res.send('Hello From My First Ever Server');
})

app.get('/data', (raq, res) => {
    res.send('More data coming sooooon !!!')
})

app.listen(port, () => {
    console.log(`My first server is running on port: ${port}`)
})