import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/register", formData); // Replace with your actual API endpoint URL
      navigate("/login");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Username" name="username" onChange={handleChange} />
        <input type="password" placeholder="Enter password" name="password" onChange={handleChange} />
        <button type="submit">Register</button>
        <p>
          <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
