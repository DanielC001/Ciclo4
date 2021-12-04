const { gql } = require("apollo-server-express")

const inscripcionType=gql`
    type Inscripcion{
        _id:ID!
        idProyecto:[Proyecto]
        idEstudiante:[Usuario]
        aceptadoIsActive:Boolean
        fechaIngreso:Date
        fechaEgreso:Date
    }
    type Query{
        getInscripciones:[Inscripciones]
        getInscripcionById(_id:String):Inscripcion
    }
    type Mutation{
        createInscripcion{
            idProyecto:[Proyecto]
            idEstudiante:[Usuario]
            aceptadoIsActive:Boolean
        }:Inscripcion
        updateInscripcion{
            _id:ID!
            aceptadoIsActive:Boolean
            fechaEgreso:Date
        }
        deleteInscripcion(_id: ID!):Inscripcion
    }
`
module.exports = { inscripcionType }