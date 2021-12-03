const { gql } = require("apollo-server-express")

const projectType = gql`
    type Usuario {
        _id: ID!   
        nombre:String     
        apellido: String
        correo: String!
        identificacion: String
        contrasena: String!
        rol:[Rol]     
        idProyecto:[Proyecto]   
    }
    type Proyecto {
        _id: ID!
        nombre: String!     
        lider: ID           
        objetivoGeneral:String     
        objetivoEspecifico:[String]   
        presupuesto:String     
        fechaTerminacion:String
        estadoIsActive:Boolean
        fase:String         


    }
    type Query{
        getProjects:[Proyecto]
        getProjectById(_id:String):Proyecto
    }

    type Mutation{
        createProject(
            nombre: String!     
        lider: ID           
        objetivoGeneral:String     
        objetivoEspecifico:[String]   
        presupuesto:String     
        fechaTerminacion:String
        estadoIsActive:Boolean
        fase:String    
        ): Proyecto

        updateProject(
            nombre: String!     
        lider: ID           
        objetivoGeneral:String     
        objetivoEspecifico:[String]   
        presupuesto:String     
        fechaTerminacion:String
        estadoIsActive:Boolean
        fase:String    
        ):Proyecto

        deleteProject(_id: ID!):Proyecto

    }

`;
module.exports = { projectType }