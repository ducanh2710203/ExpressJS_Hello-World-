const express = require ("express")
const path = require ("path")
const app = express()
const port = 3131
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"./views"))
let name = "ducAnh";
app.get("/",(req, res)=>{
    res.render("home",{name : name})
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})