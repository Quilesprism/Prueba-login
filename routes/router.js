const express = require("express")
const router = express.Router()

const controler = require('../controladores/controler')

//home
router.get('/', (req, res)=>{
    res.render('index')
})
//login
router.get('/login', (req, res)=>{
    res.render('login')
})
//register
router.get('/register', (req, res)=>{
    res.render('register')
})

router.post('/register', function(req, res){
    controler.register()
})

module.exports = router