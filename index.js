const express = require('express')
const app = express()
const port = 3000

let languages = [
    {
        id: 1,
        name: "C",
        creation_date: 1972,
        last_version: "C17"
    },
    {
        id: 2,
        name: "Python",
        creation_date: 1986,
        last_version: "P19"
    },
    {
        id: 3,
        name: "HTML",
        creation_date: 1990,
        last_version: "H5"
    },
    {
        id: 4,
        name: "Javascript",
        creation_date: 1975,
        last_version: "J22"
    },
    {
        id: 5,
        name: "Java",
        creation_date: 1990,
        last_version: "16"
    }
]

app.get('/', (req, res) => {
    res.send("")
})

// app.use(express.json()) --> acepta json como entrada

app.get('/api/v1/languages', (req, res) => {
    res.send(languages)
})

app.get('/api/v1/languages/:id', (req, res) => {
    const id = req.params.id
    const language = languages.find(element => element.id === parseInt(id))
    if(language === undefined){
        res.status(404).send("Language not found")
        return
    } else {
        res.send(language)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})