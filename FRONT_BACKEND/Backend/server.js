import express from "express"

const app = express();
const PORT = process.env.port || 4000

app.get("/", (req,res) =>{
    res.send("<h1> hey prabhu </h1>")
})

app.get("/login", (req,res) =>{
    res.send("<h2> Log in here </h2>")
})



app.listen(PORT, ()=>{
    console.log(`App is live on port ${PORT}`)
})
