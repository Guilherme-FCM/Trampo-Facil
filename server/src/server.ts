import express from "express";

const app = express();
app.listen(3000, ()=> {
    console.log("Roda bagaça...")
})

app.get("/", (req, res)=>{
    return res.json("Hello world!")
})