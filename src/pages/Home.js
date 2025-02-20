import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="container"
    >
      <h1 className="header">
        SPS REACT TEST
      </h1>

      <div><Link to={"/users"} className="button">Lista de Usuários</Link></div>
    </div>
  );
}

export default Home;
