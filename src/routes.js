import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
//^^^^Biblioteca de terceiros instalada para cuidar das rotas^^^^//

import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

//>>>>> ROTAS <<<<<//
/** 
 * As rotas sao os caminhos para cada pagina do sistema web,
 * elas sao o que fica na barra de navegacao do navegador quando
 * estamos em certa pagina.
 *   
 * Cada componente Route recebe dois parametros:
 *  - path: o que vai ser colocado no navegador pra ir praquela pagina
 *  - component: qual componente, criado por nos, vai renderizar quando estiver nessa rota
 * 
 * Duas maneiras de navegar entre as rotas:
 *  - Componente 'Link', que gera um link para a pagina
 *  - useHistory, usa dela para navegar entre as paginas, e.g. push e goBack
 */

function Routes(){ 

  //Estrutura das rotas
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/cadastro" component={Cadastro}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;