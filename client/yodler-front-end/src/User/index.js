import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../backendAPI";
import axios from "axios";
import { Form, Button } from "react-bootstrap";



function User() {
  const { id }  = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser(id) {
      let response = await axios.get(`${BACKEND_API_URL}/users/${id}`);
      setUser(response.data);
    }
    getUser(id);
  }, [])


  return `Hello, ${user.firstName} ${user.lastName}`;

}

export default User;

