const { gql } = require("apollo-server-express")

const projectType = gql`

enum stateProject {
    Iniciado
    En_desarrollo
    Terminado
     }

     type Proyecto {
        _id: ID!
        nombre: String!  
        objetivoGeneral:String     
        objetivoEspecifico:[String]   
        presupuesto:String 
        fechaInicio:String    
        fechaTerminacion:String
        lider: ID       
        estadoIsActive:Boolean
        fase:stateProject!
        
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
        
        ): Proyecto

        updateProject(
            nombre: String!     
        lider: ID           
        objetivoGeneral:String     
        objetivoEspecifico:[String]  
        fechaInicio:String 
        presupuesto:String     
        fechaTerminacion:String
        estadoIsActive:Boolean
        fase:stateProject!
      
        ):Proyecto

        deleteProject(_id: ID!):Proyecto

    }

`;
module.exports = { projectType }