import React from "react";
import { useState } from "react";
import "./usuario.css";
import poligono from "../icons/poligono.svg";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function Usuario() {
  const [passowordVisible, setPassowordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({});

  function firstName() {
    if (!name) {
      setErrors({ ...errors, ...{ titular: "por favor, inserir o nome" } });
    }
  }
  function click() {
    setErrors("");
  }

  return (
    <div className="home-screen">
      <div className="home-conteiner">
        <section className="food-explorer">
          <img src={poligono} alt="poligono" />
          <h1>food expolorer</h1>
        </section>
        <aside className="criar-conta">
          <h1> Crie sua conta</h1>
          <div className="forms">
            <div>
              <label htmlFor="code">Seu nome</label>
              <input
                className="input"
                type="text"
                placeholder="Seu nome"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => validateName()}
                onKeyDown={click}
                maxLength={30}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="input"
                type="text"
                placeholder="Exemplo: exemplo@exemplo.com.br"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => validateEmail()}
                onKeyDown={click}
                maxLength={25}
              />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <div className="password-group">
                <input
                  className="input"
                  type={passowordVisible ? "text" : "password"}
                  placeholder="No mínimo 6 caracteres"
                  id="email"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  onBlur={(e) => validateSenha()}
                  //onKeyDown={click}
                  maxLength={15}
                  minLength={6}
                />
                {passowordVisible ? (
                  <button onClick={() => setPassowordVisible(false)}>
                    <AiOutlineEye />
                  </button>
                ) : (
                  <button onClick={() => setPassowordVisible(true)}>
                    <AiOutlineEyeInvisible />
                  </button>
                )}
              </div>
            </div>
            <button className="botao">Criar conta</button>
            <footer>
              <h3>Já tenho uma conta</h3>
            </footer>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Usuario;
