const { gql } = require("apollo-server-express")

const projectType = gql`

    enum fase1{
        Iniciado
        EnDesarrollo
        Terminado
    }
    type Usuario {
        _id: ID!   
        nombre:String     
        apellido: String
        correo: String!
        identificacion: String
        contrasena: String!
        rol:Rol   
        idProyecto:[Proyecto]   
    }

    type Rol{
        _id: ID!
        nombreRol: String
        descripcion: String
    }


    type Proyecto {
        _id: ID!
        nombre: String!     
        lider: Usuario!           
        objetivoGeneral:String     
        objetivoEspecifico:[String]   
        presupuesto:String     
        fechaInicio:String 
        fechaTerminacion:String
        estadoIsActive:Boolean
        fase:fase1     
        
        


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
            fechaInicio:String 
            fechaTerminacion:String
            estadoIsActive:Boolean
            fase:fase1  
        ): Proyecto

        updateProject(
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
        ):Proyecto

        deleteProject(_id: ID!):Proyecto

    }

`;
module.exports = { projectType }
