import {gql} from '@apollo/client';

const GET_user = gql`
{
    getUsers {
        _id
        nombre
        apellido
        correo
        identificacion
        rol{
            nombreRol
        }
        estado
      }
    }
`;
export default GET_user