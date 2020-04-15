import React, { useState, useEffect } from 'react';
import { BACKEND_API_URL } from "../backendAPI";
import axios from "axios";
import { Table } from "react-bootstrap";

function AdminView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      let response = await axios.get(`${BACKEND_API_URL}/users`);
      setUsers(response.data);
    }
    getUsers();
  }, [])


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
            </tr>
          )
          )}
        </tbody>
      </Table>
    </>
  )
}

export default AdminView;