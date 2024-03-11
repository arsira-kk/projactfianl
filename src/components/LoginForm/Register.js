import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #9A616D;
`;

const RegisterForm = styled.form`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid ${({ error }) => (error ? 'red' : '#dbdbdb')};
  border-radius: 3px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: #0095f6;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notification, setNotification] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setNotification('Passwords do not match');
      return;
    }
    try {
      // Replace the endpoint with your register API endpoint
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, name, phone, address }),
      });
      if (response.ok) {
        setNotification('Registration successful');
        // Optionally, redirect the user to login page after successful registration
      } else {
        setNotification('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setNotification('An error occurred during registration. Please try again later.');
    }
  };

  return (
    <Container>
      <RegisterForm onSubmit={handleRegister}>
        <h2>Register</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={password !== '' && password !== confirmPassword}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          error={confirmPassword !== '' && password !== confirmPassword}
        />
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button type="submit">Register</Button>
        {notification && <div>{notification}</div>}
      </RegisterForm>
    </Container>
  );
};

export default Register;
