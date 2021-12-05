const { gql } = require("apollo-server-express")
const avance = require("../models/avance")

const advanceType = gql`
  
    
    type Avance{ 
        _id: ID!   
        fechaAvance: String
        descripcion:String     
        observaciones: String           
        idProyecto:Proyecto
        
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
 
    type Query {
        getAdvances: [Avance]
        getAdvanceById(_id:String): Avance
    }
    type Mutation {
        createAdvance(
            fechaAvance: String
            descripcion:String     
            observaciones: String 
            idProyecto:ID 

            
        ): Avance
        updateAdvance(
            _id: ID!   
            fechaAvance: String
            descripcion:String     
            observaciones: String  
      
        ): Avance
        deleteAdvance(_id: ID!): Avance
    }
`;

module.exports = {advanceType}