import { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };

  return (
    <Container>
      <FormContainer>
        <Title>Register</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="text"
              name="Email"
              value={inputs.Email || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Input
              type="password"
              name="Password"
              value={inputs.Password || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Confirm Password:</Label>
            <Input
              type="password"
              name="ConfirmPassword"
              value={inputs.ConfirmPassword || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Tel:</Label>
            <Input
              type="tel"
              name="Tel"
              value={inputs.Tel || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type="submit">Register</Button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default Register;
