import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/api/login`,
        formData
      );
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      // Set an error message to display to the user
      setError("Login failed. Please check your credentials and try again.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
        <p>
          <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
