import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ Ajout de Framer Motion
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
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="login-card">
        <img src="/logo.png" alt="Student+ Logo" style={{ width: "100px", height: "auto" }} />

        <h1 className="app-name">Se connecter</h1>
        <p className="welcome-text">Prêt(e) pour accéder à votre espace académique?</p>

        <button className="social-login microsoft-login">Connexion avec Microsoft</button>

        <div className="separator"><span><hr />OU</span></div>

        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
          <button type="submit" className="login-btn" onClick={handleLogin}>Se connecter</button>
        </form>

        <p className="forgot-password"><a href="A REMPLIR">Mot de passe oublié ?</a></p>
        <p className="register-link">Pas encore inscrit ? <a href="/register">Créez un compte</a></p>
      </div>
    </motion.div>
  );
};

export default Login;
