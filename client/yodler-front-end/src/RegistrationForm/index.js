import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { BACKEND_API_URL } from "../backendAPI";
import axios from "axios";
import { Form, Button } from "react-bootstrap";


const INITIAL_STATE = { email: "", firstName: "", lastName: "" }
function RegistrationForm() {
  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let response = await axios.post(`${BACKEND_API_URL}/users`, formData);
    //redirect home after response
    response && history.push("/");
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
    console.log(formData)
  };



  return (
    <>
      <h1>Register!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Add a new person!</Button>
      </Form>
    </>
  );
}

export default RegistrationForm;

