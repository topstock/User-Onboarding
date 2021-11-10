import React from 'react';

const Form = ({onChange, onSubmit, formValues}) => {
    return (
        <div className='Form' key='Form'>
            <h2>Form</h2>
            <form className="form"/>
            <label name="name">Name
                <input
                type="text"
                name="name"
                maxLength="40"
                onChange={onChange}
                value={formValues.name}
                >Name:
                </input>
            </label>
            <label name="email">email
                <input
                type="email"
                name="email"
                maxLength="40"
                onChange={onChange}
                value={formValues.email}
                >Email:
                </input>
            </label>            
            <label name="terms">
                <input
                type="checkbox"
                name="name"
                onChange={onChange}
                value={formValues.checked}
                />
                <p>I have read and agree to the 
                    <a href="#">Terms of Service</a>
                </p>
            </label>            
        
        </div>
    )
}

export default Form