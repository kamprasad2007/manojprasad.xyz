const express = require('express');
const app = express()
const port = 8080

app.use(express.static('www'))

app.get('/', (req, res) => res.send('Hey There !'))

app.listen(port, () => console.log(`Listening on port ${port}!`))