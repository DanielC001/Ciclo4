const { gql } = require("apollo-server-express")





const rolType = gql`

    type Rol{
        _id: ID!
        nombreRol: String
        descripcion: String
         
    }

    type Query {
        getRols: [Rol]
        getRolById(_id:String): Rol
    }
    type Mutation {
        createRol(
            _id: ID!
        nombreRol: String
        descripcion: String      
        ): Rol

        updateRol(_id: ID!, nombreRol: String, descripcion: String): Rol


        

        deleteRol(_id: ID!): Rol
    }
`;

module.exports = {rolType}