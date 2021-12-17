
import {Table}  from 'reactstrap';
import GetRol from './GetRol';
import CreateRol from './CreateRol';

function index() {
    return (
        <div>
  
  <Table     bordered={true}>
                <thead>
                    <tr>
                        <th>CREAR</th>
                        <th>GESTIONAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><CreateRol/></td>
                        <td><GetRol/></td>
                    </tr>
                   
                </tbody>


            </Table>
         
        </div>
    );
}


export default index;