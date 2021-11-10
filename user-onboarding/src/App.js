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
  first_name: '',
  last_name: '',
  email: '',
  password: ''
}

const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, SetFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  return (
    <div className="App">
      <Form />

    </div>
  );
}

export default App;
