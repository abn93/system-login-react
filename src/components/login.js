import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken) {
      navigate("/dashboard");
    }
  }, [accessToken, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });

      const { acess, refresh, is_admin } = response.data;
      localStorage.setItem("accessToken", acess);
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("isAdmin", is_admin);

      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Erro ao autenticar:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuário:</label>
          <input
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
