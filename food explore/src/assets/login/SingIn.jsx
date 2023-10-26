import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import poligono from "../icons/poligono.svg";
import DotLoader from "react-spinners/DotLoader";
import "./SingIn.css";

function SingIn() {
  const [passowordVisible, setPassowordVisible] = useState(false);
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const schema = yup.object({
    name: yup.string().required("Campo obrigatório!"),
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
    <div className="bg-singIng">
       {loading ? (
        <DotLoader color={"#750310"} loading={loading} size={90} />
      ) : (
      <div className="screen">
        <section className="explorer">
          <img src={poligono} alt="poligono" />
          <h1>food expolorer</h1>
        </section>
        <aside className="conta">
          <h1> Faça login</h1>
          <form onSubmit={handleSubmit(save)} className="forms2">
            <div>
              <label htmlFor="code">Seu nome</label>
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
              <label htmlFor="senha">Senha</label>
              <div className="password-group2">
                <input
                  className="input"
                  type={passowordVisible ? "text" : "password"}
                  id="senha"
                  value={senha}
                  placeholder="No mínimo 6 caracteres"
                  {...register("password")}
                  onChange={(e) => setSenha(e.target.value)}
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
              {errors?.password && (
                <p style={{ color: "red" }}>{errors?.password?.message}</p>
              )}
            </div>
            <button type="submit" className="entrar">
              Entrar
            </button>
            <footer>
              <Link className="h3" to="/usuario">
                Criar conta
              </Link>
            </footer>
          </form>
        </aside>
        
      </div>
      )}
    </div>
  );
}

export default SingIn;
