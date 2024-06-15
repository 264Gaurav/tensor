import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here

    console.log("Form submitted:", formData);
  };
  const googleAuth = () => {
    window.open(`http://localhost:8080/auth/google/callback`, "_self");
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login to The App</h2>

      <button onClick={googleAuth} className="login-with-google-btn">
        Sign up with Google
      </button>
    </div>
  );
}

export default Login;
