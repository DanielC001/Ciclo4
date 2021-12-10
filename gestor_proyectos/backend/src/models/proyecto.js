const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Usuario = require('./usuario')


const ProyectoSchema = new  Schema({
    
    nombre:{
        type:String
    },
    objetivoGeneral:{
        type:String
    },
    objetivoEspecifico:[{
        type:String
    }],
    presupuesto:{
        type:String
    },
    fechaInicio:{
        type:Date
    },
    fechaTerminacion:{
        type:Date
    },
    lider:{
        type:Schema.Types.ObjectId,
        ref:"Usuario"
    },
    estadoIsActive:{
        type:Boolean
    },
    fase:{ 
        type:String,
        required:true,
        enum:["Iniciado","EnDesarrollo","Terminado"]
        //default:"Iniciado"
    }
})

module.exports = mongoose.model("Proyecto",ProyectoSchema)
