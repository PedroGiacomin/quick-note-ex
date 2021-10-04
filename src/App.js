import React from 'react';
import NewComponente from './HelloWorld';

/* O React permite desenvolver separadamente os componentes 
 * de uma pagina web. Ao executar uma acao em um desses componentes,
 * nao eh necessario recarregar a pagina toda, soh ele.
 * Componentes PAI contem componentes FILHO.
 * Ha 2 maneiras de criar um componente:
 *  - Funcao JS
 *  - Classe JS
 * Geralmente cada componente tem seu proprio arquivo.
*/

function App() {

  function clicou(){
    alert("Clicaste?");
  }

  function clicou2(exibicao){
    alert(exibicao);
  }

  //Uma variavel pode armazenar uma funcao
  const funcao = () => {
    alert("Mar tu clica demais");
  }

  return (
    <div>
      <Title></Title>
      <Title/> 
      <NewComponente/>
      
      {/* Usando uma funcao dentro da tag JSX */}
      <button onClick={clicou}>Clique aqui</button>
    
      {/* Usando uma arrow function*/}
      <button 
        onClick={() => {
          alert("Clicaste mermo?");
        }}
      >
        Clique denovo
      </button>

      {/* Usando uma variavel que armazena uma funcao*/}
      <button onClick={funcao}>Vai clicar?</button>

      {/* Usando uma funcao que recebe um parametro */}
      <button onClick={() => clicou2("Previsível")}>
        Só mais uma, vai
      </button>

    </div>
  );
}

//Novo componente
function Title(){
  const frase = "Hello World!";
  const numero = 40;

  //Dentro das {} tudo eh JS 
  return <h1>{frase} {numero}</h1>;
}

export default App;
