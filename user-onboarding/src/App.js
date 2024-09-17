import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialUsers = [];
const initialFormValues = {
  /// text inputs
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  //checkbox
  terms: false,
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: ''
}

const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);
  


  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    
      .then(res => {
        setUsers(res.data.data);
      })
      .catch(err => console.error(err))
  }

  const formSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then( res => {
        setUsers([res.data, ...users]);
      })
      .catch(err => console.error(err) )
      .finally( () => {
        setFormValues(initialFormValues) ;
    }
      )
  }

  const validate = (name, value) => {
    yup.reach(schema, name) 
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
 

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
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
      <div id="allUsers">
        {users.map( user => (
          <div className="userBox" key={user.id}>
            <p>{user.first_name} {user.last_name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
   );
}

export default App;
