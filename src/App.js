import React from 'react';
//import NewComponente from './HelloWorld';

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

  const vetor1 = [1, 2, 3, "string", 4, 5, 6];

  function clicou1(){
    //Imprime o vetor todo de uma vez
    alert("Alert");
  }

  function clicou2(){
    //Percorre o vetor usando um laco for
    for(let i = 0; i < vetor1.length; i++){
      console.log(i + " " + vetor1[i]);
    }
  }

  function clicou3(){
    //Percorre o vetor usando forEach
    //forEach recebe uma funcao callback cujos parametros sao
    //primeiro o elemento e segundo a posicao dele no vetor 

    vetor1.forEach((elemento, posicao) => {
        console.log(elemento + " " + posicao + " :)");
        }
    );
  }
  
  return(
    <div>
      <h1>Teste vetores</h1>
      <h1>{vetor1[1]}</h1>
      <button onClick={() => clicou1}>clicou1</button>
        
      <button onClick={() => clicou2}>clicou2</button>

      <button onClick={() => clicou3}>clicou3</button>
    </div>
  )
}

export default App;


//--- EXEMPLOS DE: COMPONENTES, FUNCOES E VARIAVEIS ---//
//function App() {

  /*
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
  */

  //return (
  //  <div>
  //    <Title></Title>
  //    <Title/> 
  //    <NewComponente/>
  //    
  //    {/* Usando uma funcao dentro da tag JSX */}
  //    <button onClick={clicou}>Clique aqui</button>
  //  
  //    {/* Usando uma arrow function*/}
  //    <button 
  //      onClick={() => {
  //        alert("Clicaste mermo?");
  //      }}
  //    >
  //      Clique denovo
  //    </button>
  //
  //    {/* Usando uma variavel que armazena uma funcao*/}
  //    <button onClick={funcao}>Vai clicar?</button>
  //
  //    {/* Usando uma funcao que recebe um parametro */}
  //    <button onClick={() => clicou2("Previsível")}>
  //      Só mais uma, vai
  //    </button>
  //
  //    </div>
  //  );  
  //}

//Novo componente
/*
function Title(){
  const frase = "Hello World!";
  const numero = 40;

  //Dentro das {} tudo eh JS 
  return <h1>{frase} {numero}</h1>;
}

export default App;
*/

