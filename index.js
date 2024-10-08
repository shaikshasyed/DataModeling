require('dotenv').config()
const express = require("express");

const app = express();
app.use(express.json())

const port = process.env.PORT || 4000

app.get("/",(req, res) => {
  res.send("Hello World");
});

app.get("/login", (req, res) => {
    res.send("hello shaiksha")
})


app.listen(port, (req,res) => {
    console.log(`Server is running on localhost:${process.env.port}`);
    
});
