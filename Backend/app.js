
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/customerD-routes')
const route=require("./routes/customerD-routes")

const app = express();
//meddlewares
app.use(express.json());//http://localhost:8000/customerD/
app.use("/api",router)//http:locallhost:8000/customerD


mongoose
  .connect("mongodb+srv://admin:TpZYcEm8Mk3lYSKm@cluster0.idhoqcn.mongodb.net/hardwareStore?retryWrites=true&w=majority")
  .then(() => console.log("Connected to database"))
  .then(() =>{app.listen(8000);
})
.catch((err)=> console.log(err));