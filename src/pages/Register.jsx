import React, { useState } from "react";
import "../styles/Register.css";

function Register() {
  return (
    <div className="register">
      <h1>Inscription 📝</h1>
      <form>
        <input type="text" placeholder="Nom complet" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit" className="register-btn">S'inscrire</button>
      </form>
    </div>
  );
}

export default Register;

