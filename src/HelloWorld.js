import React from "react";
import Subtitle from "./Subtitle";

function NewComponente(){
    /* Sempre precisa ter um componente pai que aglomera todos os filhos
     * pode ser uma tag vazia <></> ou uma <div>*/
    return (
        //Componente pai
        <div>
            <h1>Novo componente</h1>
            <Subtitle/>
        </div>
    );
}

/* Para que ele funcione nos outros arquivos tem que
 * dar o export aqui e o import no arquivo que se quer usar
*/ 
export default NewComponente;
