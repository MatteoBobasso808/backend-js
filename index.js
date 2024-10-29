const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const user_agent = req.get('user-agent')
    res.header('Server', 'intro al Des. de Software')
    res.send(`Hola! Tu user agent es: ${user_agent}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})