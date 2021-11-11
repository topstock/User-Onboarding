import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';

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
  


  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    
      .then(res => {
        console.log(res.data);
        setUsers(res.data.data);
      })
      .catch(err => console.error(err))
  }


  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then( res => {
        setUsers([res.data.data, ...users]);
      })
      .catch(err => console.error(err) )
      .finally( () => setFormValues(initialFormValues) )
  }


  const formSubmit = () => {
    postNewUser();

  }

  const validate = (name, value) => {
    yup.reach(schema, name) 
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
 

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])

  return (
    <div className="App">
      <h1>Users App</h1>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  )
}

export default App;
