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

app.use(express.json()) // --> acepta json como entrada

app.get('/api/v1/languages', (req, res) => {
    res.send(languages)
})

app.get('/api/v1/languages/:id', (req, res) => {
    const language = languages.find(element => element.id === parseInt(req.params.id))
    if(language === undefined){
        res.status(404).send('<h1>Language not found<h1/>')
        return
    } else {
        res.send(language)
    }
})

app.post('/api/v1/languages', (req, res) => {
    if(req.body.name === undefined || req.body.creation_date === undefined || req.body.last_version === undefined){
        res.status(404).send('<h1>Te falta completar un campo<h1/>')
        return
    }

    if(req.get("Authentication") === undefined){
        res.sendStatus(401)
        return
    }

    if(req.get("Authentication") !== "manu"){
        res.sendStatus(403)
        return
    }

    languages.push({
        id: languages[languages.length - 1].id + 1,
        name: req.body.name,
        creation_date: req.body.creation_date,
        last_version: req.body.last_version
    })
    res.sendStatus(201)
})

app.delete('/api/v1/languages/:id', (req, res) => {
    if(req.get("Authentication") === undefined){
        res.sendStatus(401)
        return
    }

    if(req.get("Authentication") !== "manu"){
        res.sendStatus(403)
        return
    }

    const language = languages.find(element => element.id === parseInt(req.params.id))
    if(language === undefined){
        res.sendStatus(404)
        return
    } else {
        languages = languges.filter((elemnt) => element.id !== language.id)
        res.sendStatus(201)
    }
})


app.put('/api/v1/languages/:id',(req, res) => {
    if(req.get("Authentication") === undefined){
        res.sendStatus(401)
        return
    }

    if(req.get("Authentication") !== "manu"){
        res.sendStatus(403)
        return
    }

    const language = languages.find(element => element.id === parseInt(req.params.id))
    if(language === undefined){
        res.sendStatus(404)
        return
    }
    
    const { name, creation_date, last_version } = req.body;
    if (name) language.name = name;
    if (creation_date) language.creation_date = creation_date;
    if (last_version) language.last_version = last_version;
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})