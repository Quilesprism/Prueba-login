const express = require("express")
const dotenv = require("dotenv")
const cookieParser= require("cookie-parser")
const session = require("express-session")

const app = express()
//Ejs
app.set('view engine', "ejs")
//usos
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//dotenv
dotenv.config({path: './env/.env'})
//cookie
//app.use(cookieParser)
//router
app.use("/", require("./routes/router"))


app.listen(3000, () => {console.log("corriendo")})
