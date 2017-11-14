const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const mysql = require("mysql");

const app = express();

const routes = require("./routes/routes");

const sqlCon = require("./config/database");
const db = sqlCon.connection;
db.connect((error)=>{
    if(error){
        console.log(error);
    } else{
        console.log("Connected to the database");
    }
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/routes", routes);

app.get('/',(req,res)=>{
    res.send("Invalid Endpoint");
});

app.get('*',(req,res)=>{
    res.send("Invalid Endpoint");
});

app.listen(3000, ()=>{
    console.log("Server running...");
});