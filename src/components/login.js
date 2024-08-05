// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Importa o arquivo CSS para estilizar o componente

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');

  }

 
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"  />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
