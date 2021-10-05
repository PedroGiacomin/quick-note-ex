import React from "react";
import Membro from "./Membro";
import Title from "./Title";

const braga = {
  nome: "Arthur Braga",
  idade: 19,
  cargo: "Gerente de Produtos",
  curso: "Engenharia de Sistemas",
};

const lima = {
  nome: "Arthur Lima",
  idade: 19,
  cargo: "Gerente Scrum",
  curso: "Engenharia Elétrica",
};

function App(){

  return(
    <div>
      <Title title={"Membros"}>
        <Membro membro={braga}/>
        <Membro membro={lima}/>
      </Title>
    </div>
  )

}

export default App;

