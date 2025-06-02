import React from "react";
import "../styles/Register.css";
import { FaUser, FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";

const Register = () => {
  return (
    <div className="register-container">
      <img src="/logo.png" alt="Student+ Logo" style={{ width: "100px", height: "auto" }} />

      <h1>Créez votre compte </h1>

      <button className="google-btn">Inscription avec Google</button>
      <p className="separator">OU</p>

      <form>
        <div className="input-container">
          <FaUser className="icon" />
          <input type="text" placeholder="Nom complet" required />
        </div>

        <div className="input-container">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="Email" required />
        </div>

        <div className="input-container">
          <FaLock className="icon" />
          <input type="password" placeholder="Mot de passe" required />
        </div>

        <div className="input-container">
          <FaLock className="icon" />
          <input type="password" placeholder="Confirmer le mot de passe" required />
        </div>

        <button type="submit" className="register-btn">S'inscrire</button>
      </form>

      <p className="login-link">
        <FaSignInAlt className="icon-link" /> Déjà inscrit ? <a href="/login">Se connecter</a>
      </p>
    </div>
  );
};

export default Register;
