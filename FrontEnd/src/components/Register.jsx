import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon, UserIcon, MailIcon, LockClosedIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    // Basic validation
    if (!username || !email || !password) {
      setMessage('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Registration successful! You can now log in.');
        // Reset form fields
        setFormData({ username: '', email: '', password: '' });
      } else {
        setMessage(`Error: ${result.message || 'Registration failed.'}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register for Skill Exchange</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4 relative">
            <UserIcon className="absolute w-6 h-6 text-gray-400 left-2 top-3" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="pl-10 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4 relative">
            <MailIcon className="absolute w-6 h-6 text-gray-400 left-2 top-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <LockClosedIcon className="absolute w-6 h-6 text-gray-400 left-2 top-3" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="pl-10 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-2 top-3 text-gray-500"
            >
              {showPassword ? <EyeOffIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md"
          >
            Register
          </button>
        </form>

        {message && <p className="mt-4 text-center text-green-500 font-semibold">{message}</p>}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;