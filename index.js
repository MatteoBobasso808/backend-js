const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const user_agent = req.get('user-agent')
    res.header('Server', 'Intro al Des. de Software')
    res.header('Content-Type', 'text/html')
    let body = ""
    if (user_agent.includes("Linux")){
        body = `<h1>El link de descarga para Linux es: ....</h1>`
    } else if (user_agent.includes("Windows")){
        body = `<h1>El link de descarga para Windows es: ...</h1>`
    } else if (user_agent.includes("Mac Os")){
        body = `<h1>El link de descarga para MacOS es: ...</h1>`
    } else{
        body = `No conozco tu software`
    }
    
    res.send(body)
})

app.get('/download', (req, res)=> {
    res.send('Iniciando descarga...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})