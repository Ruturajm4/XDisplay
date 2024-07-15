import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    // Initialize your form fields here
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Handle your form data here, for example:
    console.log('Form submitted with data:', formData);
    // You can also perform any additional actions like API calls here
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter your username"
      />

      {/* Add more input fields as needed */}
      <button type="submit">Submit</button>
      
    </form>
  );
}

export default MyForm;
