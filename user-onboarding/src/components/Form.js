import React from 'react';

const Form = (props) => {
  const {
    values,
    submit,
    change,
    disabled,
    errors,   
  } = props
  

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const newVal = type === 'checkbox' ? checked : value;
    change(name, newVal);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
  <form className='form container' onSubmit={onSubmit}>
    <div className='formSubmitErrors'>
    <h2>Add User</h2>
      <button id="submitBtn" disabled={disabled}>submit</button>
      <div className="Errors">
        <div>{errors.first_name}</div>  
        <div>{errors.last_name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>
      </div>
    </div>

    <div className='formInputs'> 

    <h3>User Info</h3>

    <label name="first_name">First Name&nbsp;
      <input
        type="text"
        name="first_name"
        maxLength="40"
        onChange={onChange}
        value={values.first_name}
      />
    </label>

    <label name="name">Last Name&nbsp;
      <input
        type="text"
        name="last_name"
        maxLength="40"
        onChange={onChange}
        value={values.last_name}
      />
    </label>

    <label name="email">Email&nbsp;
      <input
        type="text"
        name="email"
        maxLength="40"
        onChange={onChange}
        value={values.email}
      /> 
      <h5>We'll never share your email!</h5>
    </label>

    {/* password */}

    <label name="name">Password&nbsp;
      <input
        type="password"
        name="password"
        maxLength="40"
        onChange={onChange}
        value={values.password}
      />
    </label> 

    {/* Checkbox  */}

    <label name="terms">
      <input
      type="checkbox"
      name="terms"
      onChange={onChange}
      checked={values.terms}
    />
      <p>I have read and agree to the Terms of Service</p>
    </label>  
  
  </div>
  </form>
  )
}

export default Form