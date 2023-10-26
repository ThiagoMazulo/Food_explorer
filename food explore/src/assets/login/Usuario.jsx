import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./usuario.css";
import poligono from "../icons/poligono.svg";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";

function Usuario() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const schema = yup.object({
    name: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Minimo 6 caracteres"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const save = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log({ errors });
  }, [errors]);

  return (
    <div className="home-screen">
      {loading ? (
        <DotLoader color={"#750310"} loading={loading} size={90} />
      ) : (
        <div className="home-conteiner">
          <section className="food-explorer">
            <img src={poligono} alt="poligono" />
            <h1>food expolorer</h1>
          </section>
          <aside className="criar-conta">
            <h1> Crie sua conta</h1>
            <form onSubmit={handleSubmit(save)} className="forms">
              <div>
                <label htmlFor="name">Seu nome</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Seu nome"
                  {...register("name")}
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={30}
                />
                {errors && errors?.name && (
                  <p style={{ color: "red" }}>{errors?.name?.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Exemplo: exemplo@exemplo.com.br"
                  {...register("email")}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={25}
                />
                {errors?.email && (
                  <p style={{ color: "red" }}>{errors?.email?.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="senha">Senha</label>
                <div className="password-group">
                  <input
                    className="input"
                    type={passwordVisible ? "text" : "password"}
                    id="senha"
                    value={senha}
                    placeholder="No mínimo 6 caracteres"
                    {...register("password")}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  {passwordVisible ? (
                    <button onClick={() => setPasswordVisible(false)}>
                      <AiOutlineEye />
                    </button>
                  ) : (
                    <button onClick={() => setPasswordVisible(true)}>
                      <AiOutlineEyeInvisible />
                    </button>
                  )}
                </div>
                {errors?.password && (
                  <p style={{ color: "red" }}>{errors?.password?.message}</p>
                )}
              </div>

              <button type="submit" className="botao">
                <Link className="h3" to="/singIn">
                  Criar conta
                </Link>
              </button>
              <footer>
                <Link className="h3" to="/singIn">
                  Já tenho uma conta
                </Link>
              </footer>
            </form>
          </aside>
        </div>
      )}
    </div>
  );
}

export default Usuario;
