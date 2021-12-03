const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RolSchema = new Schema({
    nombreRol:{
        type:String
    },
    descripcion:{
        type:String
    }
})

module.exports = mongoose.model("Rol",RolSchema)