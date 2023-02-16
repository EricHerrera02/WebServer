const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo nueva ruta')
  })
  
app.get('*', (req, res) => {
    res.send('404 | page no fund')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })