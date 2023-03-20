const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const conexion = require('../DB/DB')
const {promisify} = require('util')

exports.register = async (req, res) => {
    const name = req.body.name
    const user = req.body.user
    //const tipo = req.body.tipo
    const pass = req.body.pass
    console.log(name + user + pass)

}
