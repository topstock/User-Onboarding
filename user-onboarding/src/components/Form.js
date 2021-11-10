import React from 'react';

const Form = (props) => {
  const {
  values,
  submit,
  change,
  disabled,
  errors,   
  } = props
  
  const onSubmit = evt => {
  evt.preventDefault();
  submit();
  }


  const onChange = evt => {
  const { name, value, checked, type } = evt.target;
  const realValue = type === 'checkbox' ? checked : value;
  change(name, realValue)
  }

  return (
  <form className='form container' onSubmit={onSubmit}>
    <div className='formSubmitErrors'>
    <h2>Add User</h2>
      <button disabled={disabled}>submit</button>
      <div className="Errors">
        <div>{errors.firstName}</div>  
        <div>{errors.lastName}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>
      </div>
    </div>

    <div className='formInputs'> 

    <h3>User Info</h3>

    <label name="firstName">First Name&nbsp;
      <input
        type="text"
        name="firstName"
        maxLength="40"
        onChange={onChange}
        value={values.firstName}
      />
    </label>

    <label name="name">Last Name&nbsp;
      <input
        type="text"
        name="lastName"
        maxLength="40"
        onChange={onChange}
        value={values.lastName}
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
    </label> 

    {/* Checkbox  */}

    <label name="terms">
      <input
      type="checkbox"
      name="name"
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