const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send('My Phone Information Coming Soon !!!')
})

app.get('/phones', (req, res) => {
    res.send('phones.json');
})

app.listen(port, () => {
    console.log(`My Phone server is running on port: ${port}`)
});