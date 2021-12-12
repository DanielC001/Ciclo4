
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery,gql  } from "@apollo/client";
import { queries } from "@testing-library/react";
import { get } from "jquery";

const client = new ApolloClient({
    uri: 'http://localhost:5010/graphql',

    cache: new InMemoryCache()
  }); 

const GET_ROL = gql`
{
    getRols {
        _id
        nombreRol
        descripcion
      }
    }
`;

function GET_ROLS(){
const { loading, error, data } = useQuery(GET_ROL);

if(loading) return <p>Loading...</p>;
if(error) return <p>Error :(</p>;

return data.getRols.map(({ _id, nombreRol, descripcion }) => (
    <div key={_id}>
        <p>{nombreRol}</p>
        <p>{descripcion}</p>
    </div>
));
}




 
   
  

   

  
 


const GetRol = () => {
    return (
        <div>
      
            <ApolloProvider client={client}>
                <GET_ROLS/>
            </ApolloProvider>



        </div>
    )
}

export default GetRol

