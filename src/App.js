import React, { useState } from "react";

function App() {

  //useState retorna um vetor de 2 parametros:
  // - [0] = uma variavel
  // - [1] = funcao set da variavel
  //ja atribuimos cada um deles a uma variavel

  //useState permite usar e trocar o valor das variáveis dinamicamente
  const [membro, setMembro] = useState({});

  function handleInputChange(e){
    const key = e.target.name;

    const newMembro = {...membro};
    newMembro[key] = e.target.value;

    setMembro(newMembro);
  }

  return (
    <div>
      <h1>Novo Membro</h1>

      {/*onChange captura os eventos que ocorrem no input
        ele recebe uma funcao*/}
      
      <input 
        type="text" 
        placeholder="Nome" 
        name="nome"
        onChange={handleInputChange}/>
      <br />
      
      <input 
        id="GS" 
        type="radio" 
        name="cargo" 
        value="Gerente Scrum"
        onChange={handleInputChange}/>
      <label htmlFor="GS">Gerente Scrum</label>
      <br />

      <input 
        id="GP" 
        type="radio" 
        name="cargo" 
        value="Gerente de Produtos"
        onChange={handleInputChange}/>
      <label htmlFor="GP">Gerente de Produtos</label>
      <br/>
      
      <input
        type="text"
        placeholder="Idade"
        name="idade"
        onChange={handleInputChange}/>
      <br/>

      <input
        type="text"
        placeholder="Curso"
        name="curso"
        onChange={handleInputChange}/>
      
      <input
        id="diurno"
        type="radio"
        name="turno"
        value="Diurno"
        onChange={handleInputChange}/>
      <label htmlFor="diurno">Diurno</label>

      <input
        id="noturno"
        type="radio"
        name="turno"
        value="Noturno"
        onChange={handleInputChange}/>
      <label htmlFor="noturno">Noturno</label>
      <br/>

      <input
        type="text"
        placeholder="Estado"
        name="estado"
        onChange={handleInputChange}/>
      <br/>

      <input
        type="text"
        placeholder="Cidade"
        name="cidade"
        onChange={handleInputChange}/>
      <br/>
      
      <br />
      <br />

      <p>Nome do membro: {membro.nome}</p>
      <p>Cargo do membro: {membro.cargo}</p>
      <p>Idade: {membro.idade}</p>
      <p>Curso: {membro.curso}</p>
      <p>Turno: {membro.turno}</p>
      <p>Estado: {membro.estado}</p>
      <p>Cidade: {membro.cidade}</p>
    </div>
  )
}

export default App;

