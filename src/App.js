import React, { useState } from "react";
import Selecionados from "./Components/Selecionados";

function App() {

  //----- USESTATE -----//
  //useState retorna um vetor de 2 parametros:
  // - [0] = uma variavel
  // - [1] = funcao set da variavel
  //ja atribuimos cada um deles a uma variavel

  //Usar newVet = [...vet]; ou newObj = {...obj} eh o mesmo que
  //criar uma copia da estrutura em questao

  //----- USESTATE COM OBJETOS -----//
  //useState permite usar e trocar o valor das variáveis dinamicamente
  const [membro, setMembro] = useState({});

  function handleInputChange(e){
    const key = e.target.name;

    const newMembro = {...membro};
    newMembro[key] = e.target.value;

    setMembro(newMembro);
  }

  //----- USESTATE COM ARRAYS -----//
  //Usando useState para arrays, e eh o evento 
  const [ingredientes, setIngredientes] = useState([]);
  function handleVectorState(e){

    const value = e.target.value;
    const newIngredientes = [...ingredientes];
    const index = ingredientes.indexOf(value);

    /**Se o checkbox for acionado e seu valor nao estiver no vetor,
     * adiciona. Se estiver no vetor, deleta.
     */
    if(index === -1){
      
      //Essa op add um valor ao final de um vetor 
      //const newIngredientes = [...ingredientes, value];
      newIngredientes.push(value);
    }

    else{
      //Splice deleta elementos do vetor 
      //splice(<primeiro element a deletar>, <qnts a partir dele deletar>)
      newIngredientes.splice(index, 1);
    }

    setIngredientes(newIngredientes);
  
    //----- USEEFFECT -----//
    //useEffect monitora as mudancas no seu componente
    
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

      <h1>Ingredientes da Pizza</h1>
      <input
      id="Pepperoni"
      type="checkbox"
      value="Pepperoni"
      onChange={handleVectorState}/>
      <label htmlFor="Pepperoni">Pepperoni</label>
      <br/>
      <input
      id="Queijo"
      type="checkbox"
      value="Queijo"
      onChange={handleVectorState}/>
      <label htmlFor="Queijo">Queijo</label>
      <br/>
      <input
      id="Frango"
      type="checkbox"
      value="Frango"
      onChange={handleVectorState}/>
      <label htmlFor="Frango">Frango</label>
      <br/>
      <input
      id="Catupiry"
      type="checkbox"
      value="Catupiry"      
      onChange={handleVectorState}/>
      <label htmlFor="Catupiry">Catupiry</label>
      <br/>
      <input
      id="Molho de Tomate"
      type="checkbox"
      value="Molho de Tomate"
      onChange={handleVectorState}/>
      <label htmlFor="Molho de Tomate">Molho de Tomate</label>
      <br/>

      <Selecionados selecionados={ingredientes}/>
    </div>
  )
}

export default App;

