import React, { useState } from 'react';
import styled from 'styled-components';
import Register from './Register';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #9A616D; /* ใส่สีพื้นหลังตามต้องการ */
`;

const LoginForm = styled.form`
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
  border: 1px solid #dbdbdb;
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

const RegisterButton = styled(Button)`
  background-color: #8e44ad; /* เปลี่ยนสีปุ่ม Register ตามต้องการ */
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // เพิ่มโค้ดตรวจสอบผู้ใช้งานที่นี่
  };

  const handleRegister = () => {
    
    
    console.log('Redirect to Register Page');
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Instagram</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        <RegisterButton type="button" onClick={handleRegister}>Register</RegisterButton>
      </LoginForm>
    </Container>
  );
};

export default LoginPage;
