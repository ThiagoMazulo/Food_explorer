import React from "react";
import poligono from "../../assets/icons/poligono.svg";
// import Receipt from "../../assets/icons/Receipt.svg";
import SignOut from "../../assets/icons/SignOut.svg";
import Bolacha from "../../assets/img/Bolacha.png"
import "./Admin.css";

function Admin() {
  return (
    <div className="background">
      <header className="header">
        <section className="food-explorer">
          <img src={poligono} alt="poligono" />
          <div>
          <h3>food explorer</h3>
          <h5>admin</h5>
          </div>
        </section>
        <section className="seach">
          <h3>Busque por pratos ou ingredientes</h3>
        </section>
        <button className="novo-prato">
          {/* <img src={Receipt} alt="simbolo" /> */}
          <h3>Novo prato</h3>
        </button>
        <button className="sing-out">
          <img src={SignOut} alt="SignOut" />
        </button>
      </header>
      <nav className="nav">
        <img src={Bolacha} alt="bolacha" />
        <section className="titulo">
          <h1>Sabores inigualáveis</h1>
          <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
        </section>
      </nav>
    </div>
  );
}

export default Admin;
