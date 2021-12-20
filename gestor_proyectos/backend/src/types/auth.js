const { gql } = require("apollo-server-express")

const authType = gql`
    type Token{
        token:String!
    }
    type Mutation{
        autenticar(correo:String!,contrasena:String!):Token
    }

`;
module.exports = { authType }