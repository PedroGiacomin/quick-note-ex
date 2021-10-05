import React, { useState } from "react";

function App() {

  //useState retorna um vetor de 2 parametros:
  // - [0] = uma variavel
  // - [1] = funcao set da variavel
  //ja atribuimos cada um deles a uma variavel

  //useState permite usar e trocar o valor das variáveis dinamicamente
  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState();

  return (
    <div>
      <h1>Novo Membro</h1>

      {/*onChange captura os eventos que ocorrem no input*/}
      
      <input type="text" placeholder="Nome" onChange={(e) => { setNome(e.target.value) }} />
      <br />
      
      <input id="GS" type="radio" name="cargo" value="Gerente Scrum"
        onChange={(e) => {setCargo(e.target.value)}}/>
      <label htmlFor="GS">Gerente Scrum</label>
      <br />

      <input id="GP" type="radio" name="cargo" value="Gerente de Produtos" 
        onChange={(e) => {setCargo(e.target.value)}}/>
      <label htmlFor="GP">Gerente de Produtos</label>
      <br />
      <br />

      <p>Nome do membro: {nome}</p>
      <p>Cargo do membro: {cargo}</p>
    </div>
  )
}

export default App;

