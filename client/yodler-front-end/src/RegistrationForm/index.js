import React, { useState } from 'react';
import { BACKEND_API_URL } from "../backendAPI";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const INITIAL_STATE = { email: "", firstName: "", lastName: "" }
function RegistrationForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let response = await axios.post(`${BACKEND_API_URL}/users`, formData);
    console.log("RESPONSE!!!!", response);
    // console.log("Check out state ->", formData);
    // POST to /users w/ form data
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
    <div>
      <h1>REGISTRATIONFORMPAGE PAGE!</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          />
        <button>Add a new person!</button>
      </form>
    </div>
  );
}

export default RegistrationForm;

// import React, { useState } from "react";

// const NameForm = () => {
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     console.log("Check out state ->", formData);
//     // do something with the data submitted
//   };

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: ""
//   });

//   const handleChange = evt => {
//     const { name, value } = evt.target;
//     setFormData(fData => ({
//       ...fData,
//       [name]: value
//     }));
//   };
//   // end handleChange

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label htmlFor="firstName">First:</label>
  //     <input
  //       id="firstName"
  //       name="firstName"
  //       value={formData.firstName}
  //       onChange={handleChange}
  //     />

  //     <label htmlFor="lastName">Last:</label>
  //     <input
  //       id="lastName"
  //       name="lastName"
  //       value={formData.lastName}
  //       onChange={handleChange}
  //     />
  //     <button>Add a new person!</button>
  //   </form>
  // );
// };
// end

// export default NameForm;
