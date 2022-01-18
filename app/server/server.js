const express = require('express')
const app = express()

app.get("/",(req,res) => {
    console.log("Welcome to mindjogg!")
    res.send("Welcome to mindjogg!")
})
app.listen(3000)