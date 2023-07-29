import React, { useState } from 'react';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* Add background image styles here */
  background-image: url('https://static.vecteezy.com/system/resources/previews/000/702/086/non_2x/shopping-online-on-website-vector.jpg');
  background-size: cover;
`;

const LoginFormContainer = styled.div`
display: flex;
flex-direction: column; /* Align form items in a column */
align-items: center;
margin-bottom: 400px; /* Adjust the top margin as per your requirement */
margin-left: 600px;
`;

const LoginForm = styled.form`
margin: 20px; /* Add margin to the entire form container */
padding: 20px; /* Add padding for spacing inside the form container */
max-width: 500px; /* Set a maximum width for the form container */
`;

const Button = styled.button`
  margin-top: 20px; /* Add margin to the buttons for spacing */
  margin-right: 20px;
`;

const Label = styled.label`
  font-size: 25px; /* Increase the font size for the labels */
  margin-bottom: 10px; /* Add spacing between labels and inputs */
`;

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Call the onLogin function passed from the App component
    onLogin(username, email, password);
  };

  return (
    <LoginPageContainer>
      <LoginFormContainer>
        <LoginForm>
          <div>
            <Label>Enter your username:</Label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Label>Enter your email : </Label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label>Enter your password:</Label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="btn btn-primary" onClick={handleLogin}>
            Login
          </Button>
          <Button className="btn btn-secondary">Signup</Button>
        </LoginForm>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export { LoginPage };
