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

//--- EXEMPLOS DE: COMPONENTES, FUNCOES E VARIAVEIS ---//
function App() {

  function clicou(){
    alert("Clicaste?");
  }

  function clicou_param(exibicao){
    alert(exibicao);
  }

  //Uma variavel pode armazenar uma funcao
  const funcao = () => {
    alert("Mar tu clica demais");
  }

  let vetor1 = [1, 2, 3, "string", 4, 5, 6];

  function clicou1(){
    //Imprime o vetor todo de uma vez
    console.log(vetor1);
  }

  function clicou2(){
    //Percorre o vetor usando um laco for
    for(let i = 0; i < vetor1.length; i++){
      console.log(i + " " + vetor1[i]);
    }
  }

  function clicou3(){
    //Percorre o vetor usando forEach
    //forEach recebe uma funcao callback cujos parametros sao:
    //primeiro -> o elemento ; segundo -> a posicao dele no vetor

    //Usando arrow function
    vetor1.forEach((elemento, posicao) => {
        console.log(elemento + " " + posicao + " :)");
        }
    )

    function auxiliar(elemento, posicao){
      console.log(elemento + " " + posicao + " :)");
    }

    //Usando uma funcao pre definida
    vetor1.forEach(auxiliar);
  }

  let numeros = [1, 2, 3, 4];
  function clicou4(){
    //O map nao so percorre o vetor, ele retorna elementos novos
    //A estrutura da funcao eh igual a do foreach
    numeros = numeros.map((elemento) => {
      return elemento * 2;
    });

    console.log(numeros);
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
      <button onClick={() => clicou_param("Previsível")}>
        Só mais uma, vai
      </button>

      <h1>Teste vetores</h1>
      <h1>{vetor1[1]}</h1>
      <button onClick={clicou1}>clicou1</button>

      <button onClick={clicou2}>clicou2</button>

      <button onClick={clicou3}>clicou3</button>

      <button onClick={clicou4}>clicou4</button>

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


