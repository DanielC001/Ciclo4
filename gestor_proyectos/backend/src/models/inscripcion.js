const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Usuario= require('./usuario')
const Proyecto= require('./proyecto')

const InscripcionSchema = new Schema({
    idProyecto:{
        type:Schema.Types.ObjectId,
        ref:"Proyecto"
    },
    idEstudiante:{
        type:Schema.Types.ObjectId,
        ref:"Usuario"
    },
    aceptadoIsActive:{
        type:Boolean
    },
    fechaIngreso:{
        type:Date
    },
    fechaEgreso:{
        type:Date
    }
})

module.exports = mongoose.model("Inscripcion",InscripcionSchema)