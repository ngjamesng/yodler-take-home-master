import React, { useState, useEffect } from 'react';
import { BACKEND_API_URL } from "../backendAPI";
import axios from "axios";
import { Table } from "react-bootstrap";

function AdminView() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading ] = useState(true);
  
  const deleteUser = async (id) =>{
    let response = await axios.delete(`${BACKEND_API_URL}/users/${id}`);
    response.status === 204 && setUsers((users) => users.filter(u=> u.id !== id));
  }

  useEffect(() => {
    async function getUsers() {
      let response = await axios.get(`${BACKEND_API_URL}/users`);
      setUsers(response.data);
      response && setIsLoading(false);
    }
    getUsers();
  }, [])

  if (isLoading){
    return (<h1>"Loading..."</h1>)
  }

  return (
    <>
      <h1>ADMIN VIEW PAGE!</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>State</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.email}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.state}</td>
              <td><button onClick={()=>deleteUser(u.id)}>delete</button></td>
            </tr>
          )
          )}
        </tbody>
      </Table>
    </>
  )
}

export default AdminView;