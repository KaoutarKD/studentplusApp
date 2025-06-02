import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="app-name">Se connecter à Student +</h1> 
        <p className="welcome-text">Pr&ecirc;t(e) pour acc&eacute;der &agrave; votre espace acad&eacute;mique?</p>

        {/* 🔹 Connexion rapide */}
        <button className="social-login apple-login">Connexion avec Google</button>

        {/* 🔹 Ligne de séparation */}
        <div className="separator"><span>OU </span></div>

        {/* 🔹 Formulaire de connexion */}
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="login-btn">Se connecter</button>
        </form>

        {/* 🔹 Liens secondaires */}
        <p className="forgot-password"><a href="A REMPLIR">Mot de passe oublié ?</a></p>
        <p className="register-link">Pas encore inscrit ? <a href="/register">Créez un compte</a></p>
      </div>
    </div>
  );
};

export default Login;
