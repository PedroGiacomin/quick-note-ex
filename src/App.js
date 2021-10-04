import React from 'react';
import NewComponente from './HelloWorld';

/* O React permite desenvolver separadamente os componentes 
 * de uma pagina web. Ao executar uma acao em um desses componentes,
 * nao eh necessario recarregar a pagina toda, soh ele.
 * Componentes PAI contem componentes FILHO.
 * Ha 2 maneiras de criar um componente:
 *  - Funcao JS
 *  - Classe JS
*/
function App() {
  return (
    <div>
      <Title></Title>
      <Title/> 
      <NewComponente></NewComponente>
    </div>
  );
}

//Novo componente
function Title(){
  return <h1>Hello World</h1>;
}

export default App;
