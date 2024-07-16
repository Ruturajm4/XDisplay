import React, { useState } from 'react';

const DisplayName = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [display, setDisplay] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        setDisplay(true); // Set display to true on form submission
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h3>Full Name Display</h3>
                    <label htmlFor='FirstName'>
                        First Name:{' '}
                    </label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={handleFirstName}
                            required="required"
                            aria-label="First Name"
                            id='FirstName'
                        />
                    
                    <label htmlFor="LastName">
                        Last Name:{' '}
                    </label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={handleLastName}
                            required="required"
                            aria-label="Last Name"
                            id="LastName"
                        />
                  
                    <button type="submit">Submit</button>
                </form>
            </div>
            <p>Full Name: {display && `${firstName} ${lastName}`}</p>
        </div>
    );
};

export default DisplayName;