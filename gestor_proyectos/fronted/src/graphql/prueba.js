import { useQuery,gql } from "@apollo/client";

const Proyectos = () => {
    const PROYECTOS = gql`
    query{
      getRols {
        nombreRol
        descripcion
      }
    }
  `;
    const { loading, error, data } = useQuery(PROYECTOS)
    if (loading) return "<h1>Cargando</h1>"
    console.log(data)
  
    const datosTabla = data.getRols.map(({nombreRol,descripcion})=>(
      <tr>
        <td>{nombreRol}</td>
        <td>{descripcion}</td>
      </tr>
    ));
  
    return <table>{datosTabla}</table>
  }

export default Proyectos;