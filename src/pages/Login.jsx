import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      setIsAuthenticated(true); 
      navigate("/dashboard"); 
    }
  };
  return (
    <div className="login-container">
      <div className="login-card">
      <img src="/logo.png" alt="Student+ Logo" style={{ width: "100px", height: "auto" }} />

        <h1 className="app-name">Se connecter </h1> 
        <p className="welcome-text">Pr&ecirc;t(e) pour acc&eacute;der &agrave; votre espace acad&eacute;mique?</p>

        
        <button className="social-login apple-login">Connexion avec Google</button>

        
        <div className="separator"><span><hr/>OU</span></div>

        
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="login-btn" onClick={handleLogin}>Se connecter</button>
        </form>

        {/* 🔹 Liens secondaires */}
        <p className="forgot-password"><a href="A REMPLIR">Mot de passe oublié ?</a></p>
        <p className="register-link">Pas encore inscrit ? <a href="/register">Créez un compte</a></p>
      </div>
    </div>
  );
};

export default Login;
