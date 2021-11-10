import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import axios from 'axios';
const initialUsers = [];
const initialFormValues = {
  /// text inputs
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  //checkbox
  terms: false,
}

const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

const initialDisabled = true;

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
  axios.get(`https://reqres.in/api/users`)
    .then( resp => console.log(resp))

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    //axios.post(``)
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
      />

    </div>
  );
}

export default App;
