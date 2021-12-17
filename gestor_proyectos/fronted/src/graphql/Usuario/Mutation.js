import { gql } from '@apollo/client';

const CREATE_USER = gql`
 mutation CreateUser($nombre: String!, $apellido: String!, $correo: String!, $identificacion: String!, $contrasena: String!, $rol: ID!) {
    createUser(nombre: $nombre, apellido: $apellido, correo: $correo, identificacion: $identificacion, contrasena: $contrasena, rol: $rol) {
      _id
      nombre
      apellido
    }
  }
`;
const UPDATE_USER = gql`
mutation Mutation($nombre: String, $apellido: String, $correo: String!, $identificacion: String, $id: ID!, $contrasena: String!, $estado: state) {
  updateUser(nombre: $nombre, apellido: $apellido, correo: $correo, identificacion: $identificacion, _id: $id, contrasena: $contrasena, estado: $estado) {
    _id
  }
}
`;

export  {
  CREATE_USER,
  UPDATE_USER
}