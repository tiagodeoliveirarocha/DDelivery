import React, { useState } from "react";
import "./assets/dist/css/signin.css";


function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
  }

        return (
<div className="bodylogin">
<main className="form-signin">
  <form onSubmit={handleSubmit}>
    <img className="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
    <h1 className="h3 mb-3 fw-normal">Autenticação</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="floatingInput">Usuário</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
      <label htmlFor="floatingPassword">Senha</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox"  value="remember-me" /> Lembrar senha
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar
    </button>
    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>
            </div>
        )
    }


export default Login;