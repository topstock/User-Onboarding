import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';

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
  const [formValues, SetFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
  const inputChange = () => {
    
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
