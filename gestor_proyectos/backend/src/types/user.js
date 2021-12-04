const { gql } = require("apollo-server-express")





const userType = gql`

 enum state{
   Pendiente
   Autorizado
   NoAutorizado
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
        fase:stateProject!       
    }

    type Rol{
        _id: ID!
        nombreRol: String
        descripcion: String
        user: [Usuario]
    }

    type Query {
        getUsers: [Usuario]
        getUserById(_id:String): Usuario
    }
    type Mutation {
        createUser(
            _id: ID!   
            nombre:String     
            apellido: String
            correo: String!
            identificacion: String
            contrasena: String! 
            estadoIsActive:Boolean
                     
        ): Usuario
        updateUser(
            _id: ID!   
            nombre:String     
            apellido: String
            correo: String!
            identificacion: String
            contrasena: String!
            estadoIsActive:Boolean
        ): Usuario

        deleteUser(_id: ID!): Usuario
    }
`;

module.exports = {userType}