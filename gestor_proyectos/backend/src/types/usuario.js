const { gql } = require("apollo-server-express")

const userType = gql`
    enum state{
        Pendiente
        Autorizado
        NoAutorizado
    }
    enum fase1{
        Iniciado
        EnDesarrollo
        Terminado
    }

    type Usuario {
        _id: ID!   
        nombre:String!     
        apellido: String!
        correo: String!
        identificacion: String!
        contrasena: String!
        rol:Rol!
        idProyecto:[Proyecto]
        estado:state        
    }

    type Proyecto{
        _id: ID!
        nombre: String!     
        lider: ID           
        objetivoGeneral:String     
        objetivoEspecifico:[String]   
        presupuesto:String     
        fechaTerminacion:String
        estadoIsActive:Boolean
        fase:fase1!         
    }

    type Rol{
        _id: ID!
        nombreRol: String
        descripcion: String
    }

    type Query {
        getUsers: [Usuario]
        getUserById(_id:String): Usuario
    }
    type Mutation {
        createUser(  
            nombre:String!     
            apellido: String!
            correo: String!
            identificacion: String!
            contrasena: String! 
            estado:state=Pendiente 
            rol:ID!
           
               
                  
        ): Usuario
        updateUser(
            _id: ID!   
            nombre:String     
            apellido: String
            correo: String!
            identificacion: String
            contrasena: String!
            estado:state 
        ): Usuario

        deleteUser(_id: ID!): Usuario
    }
`;

module.exports = {userType}