const { gql } = require("apollo-server-express")

const inscripcionType=gql`
    type Inscripcion{
        _id:ID!
        idProyecto:[Proyecto]
        idEstudiante:[Usuario]
        aceptadoIsActive:Boolean
        fechaIngreso:String
        fechaEgreso:String
    }
    type Proyecto{
        _id: ID!
        nombre: String!     
        lider: ID           
        objetivoGeneral:String     
        objetivoEspecifico:[String]   
        presupuesto:String     
        fechaInicio:String 
        fechaTerminacion:String
        estadoIsActive:Boolean
        fase:fase1     
    }
    type Usuario {
        _id: ID!   
        nombre:String     
        apellido: String
        correo: String!
        identificacion: String
        contrasena: String!
        rol:[Rol]     
        idProyecto:[Proyecto]
        estado:state!   
    }
    type Query{
        getInscripciones:[Inscripcion]
        getInscripcionById(_id:String):Inscripcion
    }
    
    type Mutation{
        createInscripcion(
            idProyecto:ID
            idEstudiante:ID
            aceptadoIsActive:Boolean
        ):Inscripcion

        updateInscripcion(
            _id:ID!
            aceptadoIsActive:Boolean
            fechaEgreso:String
        ):Inscripcion

        deleteInscripcion(_id: ID!):Inscripcion
    }
`
module.exports = { inscripcionType }