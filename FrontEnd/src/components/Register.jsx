import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState(''); // State for displaying messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      username: username,  // Assuming these are your form state variables
      email: email,        // Same here
      password: password   // Same here
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // This header is crucial
        },
        body: JSON.stringify(formData), // This will ensure you're sending JSON
      });
  
      const result = await response.json();
      if (response.ok) {
        setMessage('Registration successful!');
      } else {
        setMessage(`Error: ${result.message || result.error}`);
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
    }
  };
  
  
  
  

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>} {/* Display message */}
    </div>
  );
}

export default Register;
