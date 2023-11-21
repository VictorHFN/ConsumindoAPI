import React, { useState, useEffect } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import logo from "./assets/Logo.png";

function App() {
  const baseUrl = "https://localhost:7188/api/Aluno";

  const [data, setData] = useState([]);

  const pedidoGet = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <br />
      <h3>Cadastro de Alunos</h3>
      <header>
        <img src="{logo}" alt="Cadastro" />
        <button className="btn btn-success">Incluir novo aluno</button>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Rg</th>
            <th>StatusAluno</th>
            <th>NumeroMatricula</th>
            <th>AreaInteresse</th>
            <th>Habilidades</th>
            <th>Experiencias</th>
            <th>DisponibilidadeHorario</th>
            <th>Curriculo</th>
            <th>Cpf</th>
            <th>Cidade</th>
            <th>DataNascimento</th>
            <th>NivelEscolaridade</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Endereco</th>
            <th>Genero</th>
            <th>Bairro</th>
            <th>Cep</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default App;
