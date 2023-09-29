import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Table, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Read = () => {
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get('https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData')
        .then((response)=>{
            console.log(response.data);
            setAPIData(response.data);
        })
    });

    const setData = (data) =>{
        let {id,firstName,lastName,checkbox} = data;
        localStorage.setItem('ID',id);
        localStorage.setItem('Nombre',firstName);
        localStorage.setItem('Apellido',lastName);
        localStorage.setItem('Autorización',checkbox)
    }

    const getData = ()=>{
      axios.get('https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData')
      .then((getData)=>{
          setAPIData(getData.data);
      })
    };

    const oneDelete = (id)=>{
      axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        .then((response)=>{
            getData();
        })
    }

  return (
    <>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            APIData.map((data)=>{
              return(
                <Table.Row>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                  <Link to='/update'>
                    <Table.Cell>
                      <Button onClick={()=> setData(data)}>Actualizar</Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Button onClick={()=> oneDelete(data.id)}>Eliminar</Button>
                    </Table.Cell>
                  </Link>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    </>
  )
}

export default Read
