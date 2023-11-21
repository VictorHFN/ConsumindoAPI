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

  useEffect(() => {
    pedidoGet();
  });

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
        <tbody>
          {data.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.idade}</td>
              <td>{aluno.rg}</td>
              <td>{aluno.statusaluno}</td>
              <td>{aluno.numeromatricula}</td>
              <td>{aluno.areainteresse}</td>
              <td>{aluno.habilidades}</td>
              <td>{aluno.experiencias}</td>
              <td>{aluno.disponibilidadehorario}</td>
              <td>{aluno.curriculo}</td>
              <td>{aluno.cpf}</td>
              <td>{aluno.cidade}</td>
              <td>{aluno.datanascimento}</td>
              <td>{aluno.nivelescolaridade}</td>
              <td>{aluno.telefone}</td>
              <td>{aluno.endereco}</td>
              <td>{aluno.genero}</td>
              <td>{aluno.bairro}</td>
              <td>{aluno.cep}</td>
              <td>
                <button className="btn btn-primary">Editar</button> {"  "}
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
